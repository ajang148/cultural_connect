// src/utils/auth.js
export const getToken = () => {
  return localStorage.getItem("token");
};

export const setToken = (token) => {
  localStorage.setItem("token", token);
};

export const removeToken = () => {
  localStorage.removeItem("token");
};

export const isLoggedIn = () => {
  return !!localStorage.getItem("token");
};

// User data management
export const getUser = () => {
  const userStr = localStorage.getItem("user");
  try {
    return userStr ? JSON.parse(userStr) : null;
  } catch (error) {
    console.error("Failed to parse user data:", error);
    return null;
  }
};

export const setUser = (userData) => {
  localStorage.setItem("user", JSON.stringify(userData));
};

export const removeUser = () => {
  localStorage.removeItem("user");
};

export const logout = () => {
  removeToken();
  removeUser();
};