export const port = Number(process.env.PORT) || 3000;

export const siteOrigin = process.env.VIDCORE_ORIGIN || 'https://vidcore.io';

export const siteReferer = `${siteOrigin}/`;

export const userAgent =
  process.env.USER_AGENT ||
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36';
