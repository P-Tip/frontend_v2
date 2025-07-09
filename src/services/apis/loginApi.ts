const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const getGoogleOauth = () => {
  window.location.href = `${BASE_URL}/api/auth/oauth2/google`;
};
