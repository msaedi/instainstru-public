"use client";

import { useMemo } from "react";
import {
  getOptimizedUrl,
  getResponsiveUrl,
  getDirectUrl,
  getLowQualityUrl,
  type ImageTransformOptions,
  type Viewport,
} from "@/lib/services/assetService";

/**
 * Hook for getting an optimized asset URL
 */
export function useOptimizedUrl(
  path: string,
  options: ImageTransformOptions = {}
): string {
  return useMemo(() => getOptimizedUrl(path, options), [path, options]);
}

/**
 * Hook for responsive images with viewport detection
 */
export function useResponsiveUrl(
  path: string,
  viewport: Viewport = "desktop"
): string {
  return useMemo(() => getResponsiveUrl(path, viewport), [path, viewport]);
}

/**
 * Hook for blur-up image loading pattern
 * Returns both low-quality placeholder and full-quality URL
 */
export function useProgressiveImage(
  path: string,
  options: ImageTransformOptions = {}
): { placeholder: string; src: string } {
  return useMemo(
    () => ({
      placeholder: getLowQualityUrl(path),
      src: getOptimizedUrl(path, options),
    }),
    [path, options]
  );
}

/**
 * Hook for direct URLs (videos, SVGs)
 */
export function useDirectUrl(path: string): string {
  return useMemo(() => getDirectUrl(path), [path]);
}
