/**
 * Simple logger utility for the landing page.
 *
 * In development: logs to console
 * In production: can be configured to send to external service or suppress
 */

type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LoggerConfig {
  /** Minimum level to log. Default: 'debug' in dev, 'warn' in prod */
  minLevel?: LogLevel;
  /** Prefix for all log messages */
  prefix?: string;
}

const LOG_LEVELS: Record<LogLevel, number> = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
};

const DEFAULT_CONFIG: LoggerConfig = {
  minLevel: process.env['NODE_ENV'] === 'production' ? 'warn' : 'debug',
  prefix: '[InstaInstru]',
};

function createLogger(config: LoggerConfig = {}) {
  const { minLevel, prefix } = { ...DEFAULT_CONFIG, ...config };
  const minLevelValue = LOG_LEVELS[minLevel ?? 'debug'];

  function shouldLog(level: LogLevel): boolean {
    return LOG_LEVELS[level] >= minLevelValue;
  }

  function formatMessage(message: string): string {
    return prefix ? `${prefix} ${message}` : message;
  }

  return {
    debug(message: string, ...args: unknown[]): void {
      if (shouldLog('debug')) {
        console.debug(formatMessage(message), ...args);
      }
    },

    info(message: string, ...args: unknown[]): void {
      if (shouldLog('info')) {
        console.info(formatMessage(message), ...args);
      }
    },

    warn(message: string, ...args: unknown[]): void {
      if (shouldLog('warn')) {
        console.warn(formatMessage(message), ...args);
      }
    },

    error(message: string, ...args: unknown[]): void {
      if (shouldLog('error')) {
        console.error(formatMessage(message), ...args);
      }
    },
  };
}

/** Default logger instance */
export const logger = createLogger();

/** Create a scoped logger with custom prefix */
export function createScopedLogger(scope: string): ReturnType<typeof createLogger> {
  return createLogger({ prefix: `[InstaInstru:${scope}]` });
}
