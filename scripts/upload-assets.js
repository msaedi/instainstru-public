#!/usr/bin/env node

/**
 * Asset Upload Script for InstaInstru Landing Page
 *
 * Usage:
 *   node scripts/upload-assets.js
 *
 * Place assets in the `assets/` directory following this structure:
 *   assets/
 *   ├── landing/          -> uploads to /landing/
 *   │   ├── hero/
 *   │   ├── categories/
 *   │   └── illustrations/
 *   └── brand/            -> uploads to /brand/
 *       ├── logo.svg
 *       └── logo-white.svg
 *
 * Features:
 *   - Auto-converts PNG to WebP (if cwebp is installed)
 *   - Uses wrangler CLI to upload to R2
 *   - Generates manifest of uploaded files
 *
 * Prerequisites:
 *   - wrangler CLI installed and authenticated
 *   - R2 bucket configured in wrangler.toml (or use --remote flag)
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Configuration
const ASSETS_DIR = path.join(__dirname, '..', 'assets');
const MANIFEST_FILE = path.join(__dirname, '..', 'assets-manifest.json');
const R2_BUCKET = 'instainstru-assets';
const ALLOWED_FOLDERS = ['landing', 'brand', 'animations'];
const CONVERTIBLE_EXTENSIONS = ['.png', '.jpg', '.jpeg'];
const PASSTHROUGH_EXTENSIONS = ['.webp', '.svg', '.mp4', '.webm', '.json', '.lottie'];

// Check if cwebp is available for WebP conversion
function hasCwebp() {
  try {
    execSync('which cwebp', { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

// Convert image to WebP
function convertToWebp(inputPath) {
  const outputPath = inputPath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
  try {
    execSync(`cwebp -q 85 "${inputPath}" -o "${outputPath}"`, { stdio: 'inherit' });
    console.log(`  [OK] Converted to WebP: ${path.basename(outputPath)}`);
    return outputPath;
  } catch (error) {
    console.warn(
      `  [WARN] WebP conversion failed, uploading original: ${path.basename(inputPath)}`
    );
    return inputPath;
  }
}

// Upload file to R2 using wrangler
function uploadToR2(localPath, r2Key) {
  try {
    execSync(
      `wrangler r2 object put "${R2_BUCKET}/${r2Key}" --file "${localPath}" --remote`,
      { stdio: 'inherit' }
    );
    console.log(`  [OK] Uploaded: ${r2Key}`);
    return true;
  } catch (error) {
    console.error(`  [ERR] Failed to upload: ${r2Key}`);
    return false;
  }
}

// Get all files recursively
function getFilesRecursively(dir, baseDir = dir) {
  const files = [];

  if (!fs.existsSync(dir)) {
    return files;
  }

  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      files.push(...getFilesRecursively(fullPath, baseDir));
    } else {
      const relativePath = path.relative(baseDir, fullPath);
      const ext = path.extname(item).toLowerCase();

      if ([...CONVERTIBLE_EXTENSIONS, ...PASSTHROUGH_EXTENSIONS].includes(ext)) {
        files.push({ fullPath, relativePath, ext });
      }
    }
  }

  return files;
}

// Main upload function
async function main() {
  console.log('\nInstaInstru Asset Upload\n');

  // Check for assets directory
  if (!fs.existsSync(ASSETS_DIR)) {
    console.log('Creating assets directory structure...\n');
    for (const folder of ALLOWED_FOLDERS) {
      fs.mkdirSync(path.join(ASSETS_DIR, folder), { recursive: true });
    }
    console.log('Created:');
    console.log('  assets/landing/');
    console.log('  assets/brand/');
    console.log('  assets/animations/');
    console.log('\nPlace your assets in these folders and run the script again.\n');
    return;
  }

  // Check for wrangler
  try {
    execSync('which wrangler', { stdio: 'ignore' });
  } catch {
    console.error('wrangler CLI not found. Install with: npm install -g wrangler');
    process.exit(1);
  }

  const canConvert = hasCwebp();
  if (canConvert) {
    console.log('cwebp found - PNG/JPG files will be converted to WebP\n');
  } else {
    console.log('cwebp not found - images will be uploaded as-is');
    console.log('Install for auto WebP conversion: brew install webp\n');
  }

  // Collect files from allowed folders
  const allFiles = [];
  for (const folder of ALLOWED_FOLDERS) {
    const folderPath = path.join(ASSETS_DIR, folder);
    if (fs.existsSync(folderPath)) {
      const files = getFilesRecursively(folderPath, ASSETS_DIR);
      allFiles.push(...files);
    }
  }

  if (allFiles.length === 0) {
    console.log('No assets found to upload.\n');
    console.log('Place assets in:');
    for (const folder of ALLOWED_FOLDERS) {
      console.log(`  assets/${folder}/`);
    }
    return;
  }

  console.log(`Found ${allFiles.length} file(s) to process:\n`);

  // Process and upload
  const manifest = {
    uploadedAt: new Date().toISOString(),
    files: [],
  };

  let successCount = 0;
  let failCount = 0;

  for (const file of allFiles) {
    console.log(`Processing: ${file.relativePath}`);

    let uploadPath = file.fullPath;
    let r2Key = file.relativePath;

    // Convert to WebP if applicable
    if (canConvert && CONVERTIBLE_EXTENSIONS.includes(file.ext)) {
      uploadPath = convertToWebp(file.fullPath);
      r2Key = file.relativePath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
    }

    // Upload to R2
    const success = uploadToR2(uploadPath, r2Key);

    if (success) {
      successCount++;
      manifest.files.push({
        local: file.relativePath,
        r2: r2Key,
        url: `https://assets.instainstru.com/${r2Key}`,
      });
    } else {
      failCount++;
    }

    // Clean up converted WebP if different from original
    if (uploadPath !== file.fullPath && fs.existsSync(uploadPath)) {
      fs.unlinkSync(uploadPath);
    }

    console.log('');
  }

  // Write manifest
  fs.writeFileSync(MANIFEST_FILE, JSON.stringify(manifest, null, 2));

  // Summary
  console.log('-'.repeat(50));
  console.log(`\nUpload complete: ${successCount} succeeded, ${failCount} failed`);
  console.log(`Manifest written to: assets-manifest.json\n`);

  if (manifest.files.length > 0) {
    console.log('Uploaded URLs:');
    for (const file of manifest.files) {
      console.log(`  ${file.url}`);
    }
    console.log('');
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
