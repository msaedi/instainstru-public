"use client";

import { useRef, useEffect, useState } from "react";
import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import { cn } from "@/lib/utils";
import { getDirectUrl } from "@/lib/services/assetService";
import { logger } from "@/lib/logger";

interface LottieAnimationProps {
  /** Path to Lottie JSON file in R2 (e.g., '/animations/hero.json') */
  path?: string;
  /** Or provide animation data directly */
  animationData?: Record<string, unknown>;
  /** Enable loop (default: true) */
  loop?: boolean;
  /** Auto play (default: true) */
  autoplay?: boolean;
  /** Play on hover only */
  playOnHover?: boolean;
  /** Play when in viewport */
  playOnView?: boolean;
  /** Animation speed (default: 1) */
  speed?: number;
  /** Additional class names */
  className?: string;
  /** Aria label for accessibility */
  ariaLabel?: string;
}

export function LottieAnimation({
  path,
  animationData: providedData,
  loop = true,
  autoplay = true,
  playOnHover = false,
  playOnView = false,
  speed = 1,
  className,
  ariaLabel,
}: LottieAnimationProps) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [animationData, setAnimationData] = useState<Record<string, unknown> | null>(
    providedData ?? null
  );
  const [isLoaded, setIsLoaded] = useState(!!providedData);
  const [isInView, setIsInView] = useState(false);

  // Fetch animation data from R2 if path provided
  useEffect(() => {
    if (!path || providedData) return;

    const url = getDirectUrl(path);
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to load animation: ${res.status}`);
        }
        return res.json();
      })
      .then((data: Record<string, unknown>) => {
        setAnimationData(data);
        setIsLoaded(true);
      })
      .catch((err) => {
        logger.error("Failed to load Lottie animation", err);
      });
  }, [path, providedData]);

  // Set animation speed
  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(speed);
    }
  }, [speed]);

  // Intersection observer for play-on-view
  useEffect(() => {
    if (!playOnView || !containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry?.isIntersecting ?? false);
      },
      { threshold: 0.2 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [playOnView]);

  // Control playback based on view/hover
  useEffect(() => {
    if (!lottieRef.current) return;

    if (playOnView) {
      if (isInView) {
        lottieRef.current.play();
      } else {
        lottieRef.current.pause();
      }
    }
  }, [isInView, playOnView]);

  const handleMouseEnter = () => {
    if (playOnHover && lottieRef.current) {
      lottieRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (playOnHover && lottieRef.current) {
      lottieRef.current.pause();
    }
  };

  if (!isLoaded || !animationData) {
    return (
      <div
        className={cn("animate-pulse rounded-lg bg-gray-200", className)}
        aria-label="Loading animation..."
      />
    );
  }

  return (
    <div
      ref={containerRef}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={loop}
        autoplay={autoplay && !playOnHover && !playOnView}
        aria-label={ariaLabel}
      />
    </div>
  );
}
