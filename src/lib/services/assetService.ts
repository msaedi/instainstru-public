import { env } from "@/lib/env";
import { logger } from "@/lib/logger";

/**
 * Cloudflare Image Transformation options
 * @see https://developers.cloudflare.com/images/transform-images/transform-via-url/
 */
export interface ImageTransformOptions {
  /** Target width in pixels */
  width?: number;
  /** Target height in pixels */
  height?: number;
  /** Quality (1-100), default 85 */
  quality?: number;
  /** Output format */
  format?: "auto" | "webp" | "avif" | "json";
  /** Resize behavior */
  fit?: "scale-down" | "contain" | "cover" | "crop" | "pad";
  /** Sharpening (0-10) */
  sharpen?: number;
  /** Blur (1-250) */
  blur?: number;
  /** Device pixel ratio (1-3) */
  dpr?: number;
}

export type Viewport = "mobile" | "tablet" | "desktop";

/**
 * Viewport-specific image optimization presets
 */
const VIEWPORT_PRESETS: Record<Viewport, { width: number; quality: number }> = {
  mobile: { width: 640, quality: 75 },
  tablet: { width: 1024, quality: 80 },
  desktop: { width: 1920, quality: 85 },
};

/**
 * Build a Cloudflare Image Transformation URL
 *
 * @example
 * getOptimizedUrl("/landing/hero/poster.webp", { width: 1920, quality: 85 })
 * // -> https://assets.instainstru.com/cdn-cgi/image/width=1920,quality=85,format=auto/landing/hero/poster.webp
 */
export function getOptimizedUrl(
  path: string,
  options: ImageTransformOptions = {}
): string {
  const baseUrl = env.r2Url;

  if (!baseUrl) {
    logger.warn("R2_URL not configured, returning path as-is");
    return path;
  }

  // Normalize path (ensure leading slash, no double slashes)
  const normalizedPath = "/" + path.replace(/^\/+/, "");

  // If no transformations requested, return direct URL
  if (Object.keys(options).length === 0) {
    return `${baseUrl}${normalizedPath}`;
  }

  // Build transformation parameters
  const params: string[] = [];

  if (options.width) params.push(`width=${options.width}`);
  if (options.height) params.push(`height=${options.height}`);
  if (options.quality) params.push(`quality=${options.quality}`);
  if (options.format) params.push(`format=${options.format}`);
  if (options.fit) params.push(`fit=${options.fit}`);
  if (options.sharpen) params.push(`sharpen=${options.sharpen}`);
  if (options.blur) params.push(`blur=${options.blur}`);
  if (options.dpr) params.push(`dpr=${options.dpr}`);

  // Default to auto format if not specified
  if (!options.format && params.length > 0) {
    params.push("format=auto");
  }

  const transformString = params.join(",");

  return `${baseUrl}/cdn-cgi/image/${transformString}${normalizedPath}`;
}

/**
 * Get a low-quality placeholder URL for blur-up effect
 */
export function getLowQualityUrl(path: string): string {
  return getOptimizedUrl(path, {
    width: 100,
    quality: 40,
    format: "auto",
  });
}

/**
 * Get viewport-optimized URL with sensible defaults
 */
export function getResponsiveUrl(
  path: string,
  viewport: Viewport = "desktop",
  additionalOptions: Omit<ImageTransformOptions, "width" | "quality"> = {}
): string {
  const preset = VIEWPORT_PRESETS[viewport];
  return getOptimizedUrl(path, {
    ...preset,
    format: "auto",
    fit: "cover",
    ...additionalOptions,
  });
}

/**
 * Get direct URL without transformations (for videos, SVGs, etc.)
 */
export function getDirectUrl(path: string): string {
  const baseUrl = env.r2Url;
  if (!baseUrl) return path;

  const normalizedPath = "/" + path.replace(/^\/+/, "");
  return `${baseUrl}${normalizedPath}`;
}

/**
 * Check if a URL is using Cloudflare transformations
 */
export function isTransformedUrl(url: string): boolean {
  return url.includes("/cdn-cgi/image/");
}
