"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  getOptimizedUrl,
  getLowQualityUrl,
  type ImageTransformOptions,
} from "@/lib/services/assetService";

interface OptimizedImageProps
  extends Omit<ImageProps, "src" | "placeholder" | "blurDataURL"> {
  /** Path relative to R2 bucket (e.g., '/landing/hero/poster.webp') */
  path: string;
  /** Cloudflare transformation options */
  transformOptions?: ImageTransformOptions;
  /** Enable blur-up loading effect */
  enableBlurUp?: boolean;
}

export function OptimizedImage({
  path,
  transformOptions = {},
  enableBlurUp = true,
  alt,
  className,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const src = getOptimizedUrl(path, transformOptions);
  const placeholderSrc = enableBlurUp ? getLowQualityUrl(path) : undefined;

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Low-quality placeholder */}
      {enableBlurUp && !isLoaded ? (
        <Image
          src={placeholderSrc!}
          alt=""
          fill
          className="object-cover blur-lg scale-105"
          aria-hidden="true"
          priority
          unoptimized
        />
      ) : null}

      {/* Full quality image */}
      <Image
        src={src}
        alt={alt}
        className={cn(
          "object-cover transition-opacity duration-500",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
        onLoad={() => setIsLoaded(true)}
        unoptimized
        {...props}
      />
    </div>
  );
}
