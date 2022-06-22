export const __prod__ = process.env.NODE_ENV === "production";
export const apiBaseUrl = "http://localhost:8080/api/v1/";
export const isStaging = process.env.PUBLIC_IS_STAGING === "true";
export const baseUrl = process.env.PUBLIC_BASE_URL || "http://localhost:3000/";
export const loginNextPathKey = "/";

export const linkRegex =
    /(^|\s)(https?:\/\/)(www\.)?([-a-z0-9]{1,63}\.)*?[a-z0-9][-a-z0-9]{0,61}[a-z0-9]\.[a-z]{1,6}(\/[-\\w@\\+\\.~#\\?&/=%]*)?[^\s()]+/;
export const codeBlockRegex = /`([^`]*)`/g;
export const mentionRegex = /^(?!.*\bRT\b)(?:.+\s)?#?@\w+/i;
