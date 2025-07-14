/**
 * Array of routes that are accessible to public
 * those route do not require authentication
 */
export const publicRoutes = ["/", "/auth/new-verification"];

/**
 * the array of route used for authentication
 */
export const authRoutes = ["/auth/login", "/auth/register", "/auth/error"];

/**
 * prefix for API authentication
 */
export const apiAuthPrefix = "/api/auth";

/**
 * default auth redirect url
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";
