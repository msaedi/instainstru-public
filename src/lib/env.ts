/**
 * Type-safe access to public environment variables.
 * Only NEXT_PUBLIC_* variables are accessible client-side.
 */

const PUBLIC_ENV = {
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NEXT_PUBLIC_BETA_URL: process.env.NEXT_PUBLIC_BETA_URL,
  NEXT_PUBLIC_R2_URL: process.env.NEXT_PUBLIC_R2_URL,
} as const;

type PublicEnvKey = keyof typeof PUBLIC_ENV;

function getEnvVar(key: PublicEnvKey): string {
  const value = PUBLIC_ENV[key];
  if (!value) {
    // In development, warn but don't crash
    if (process.env.NODE_ENV === "development") {
      console.warn(`Environment variable ${key} is not set`);
      return "";
    }
    throw new Error(`Environment variable ${key} is required`);
  }
  return value;
}

export const env = {
  siteUrl: getEnvVar("NEXT_PUBLIC_SITE_URL"),
  betaUrl: getEnvVar("NEXT_PUBLIC_BETA_URL"),
  r2Url: getEnvVar("NEXT_PUBLIC_R2_URL"),
} as const;
