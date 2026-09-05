const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.URL || "http://localhost:3001";
export const siteUrl = configuredUrl.replace(/\/$/, "");
