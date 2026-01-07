# Scripts

## upload-assets.js

Upload assets to Cloudflare R2 for the landing page.

### Prerequisites

1. Install wrangler CLI:

   ```bash
   npm install -g wrangler
   wrangler login
   ```

2. (Optional) Install cwebp for automatic WebP conversion:
   ```bash
   brew install webp
   ```

### Usage

1. Place assets in the `assets/` directory:

   ```
   assets/
   ├── landing/           # Landing page specific
   │   ├── hero/          # Hero section images/videos
   │   ├── categories/    # Category images
   │   └── illustrations/ # General illustrations
   ├── brand/             # Brand assets (logo, etc.)
   └── animations/        # Lottie files, animated SVGs
   ```

2. Run the upload script:

   ```bash
   npm run upload-assets
   ```

3. Assets will be available at:
   ```
   https://assets.instainstru.com/landing/...
   https://assets.instainstru.com/brand/...
   https://assets.instainstru.com/animations/...
   ```

### Notes

- PNG/JPG files are automatically converted to WebP (if cwebp installed)
- SVG, WebP, MP4, JSON (Lottie) files are uploaded as-is
- A manifest (`assets-manifest.json`) is generated with all uploaded URLs
