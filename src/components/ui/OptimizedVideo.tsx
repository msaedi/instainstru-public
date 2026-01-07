"use client";

import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { getDirectUrl, getOptimizedUrl } from "@/lib/services/assetService";

interface OptimizedVideoProps {
  /** Video path in R2 */
  videoPath: string;
  /** Poster image path in R2 */
  posterPath: string;
  /** Mobile poster path (optional) */
  mobilePosterPath?: string;
  /** Additional class names */
  className?: string;
  /** Autoplay (default: true) */
  autoPlay?: boolean;
  /** Loop (default: true) */
  loop?: boolean;
  /** Muted (default: true, required for autoplay) */
  muted?: boolean;
}

export function OptimizedVideo({
  videoPath,
  posterPath,
  mobilePosterPath,
  className,
  autoPlay = true,
  loop = true,
  muted = true,
}: OptimizedVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const videoSrc = getDirectUrl(videoPath);
  const posterSrc = getOptimizedUrl(
    isMobile && mobilePosterPath ? mobilePosterPath : posterPath,
    { width: isMobile ? 640 : 1920, quality: 85, format: "auto" }
  );

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <video
        ref={videoRef}
        poster={posterSrc}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline
        className={cn(
          "h-full w-full object-cover transition-opacity duration-700",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
        onLoadedData={() => setIsLoaded(true)}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Fallback poster while video loads */}
      {!isLoaded ? (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${posterSrc})` }}
        />
      ) : null}
    </div>
  );
}
