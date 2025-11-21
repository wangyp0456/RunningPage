// src/utils/path.ts
export const getBasePath = () => {
  // 直接返回 Vite 构建时的 BASE_URL
  return import.meta.env.BASE_URL;
};
