'use client';

import { useEffect, useState } from 'react';
import Image, { type ImageProps } from 'next/image';

type ColorScheme = 'light' | 'dark';

type ColorSchemeImageProps = Omit<ImageProps, 'src'> & {
  lightSrc: string;
  darkSrc: string;
  width: number;
  height: number;
};

export function ColorSchemeImage({
  lightSrc,
  darkSrc,
  width,
  height,
  alt,
  className,
  ...props
}: ColorSchemeImageProps) {
  const [scheme, setScheme] = useState<ColorScheme | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const updateScheme = () => {
      setScheme(mediaQuery.matches ? 'dark' : 'light');
    };

    updateScheme();

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', updateScheme);
      return () => mediaQuery.removeEventListener('change', updateScheme);
    }

    mediaQuery.addListener(updateScheme);
    return () => mediaQuery.removeListener(updateScheme);
  }, []);

  if (!scheme) {
    return (
      <div
        aria-hidden="true"
        className={className}
        style={{ aspectRatio: `${width} / ${height}` }}
      />
    );
  }

  return (
    <Image
      {...props}
      alt={alt}
      src={scheme === 'dark' ? darkSrc : lightSrc}
      width={width}
      height={height}
      className={className}
    />
  );
}
