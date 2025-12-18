import axios from "axios";
import { getToken } from "./utils/auth";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use((req) => {
  const token = getToken();
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// Optional: set JWT token automatically
export const setToken = (token) => {
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common["Authorization"];
  }
};

export const signupUser = async (name, email, password) => {
  try {
    const response = await API.post("/users", { name, email, password });
    console.log("Signup success:", response.data);
    return response.data;
  } catch (err) {
    console.error("Signup error:", err.response?.data || err.message);
    throw err;
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await API.post("/users/login", { email, password });
    console.log("Login success:", response.data);

    // Save JWT token in localStorage
    localStorage.setItem("token", response.data.token);
    setToken(response.data.token);

    return response.data;
  } catch (err) {
    console.error("Login error:", err.response?.data || err.message);
    throw err;
  }
};

export const getUsers = async () => {
  try {
    const response = await API.get("/users");
    console.log("Users:", response.data);
    return response.data;
  } catch (err) {
    console.error("Get users error:", err.response?.data || err.message);
    throw err;
  }
};

// Create a post
export const createPostAPI = async (title, content) => {
  const response = await API.post("/posts", { title, content });
  return response.data;
};

// Get all posts
export const getPostsAPI = async () => {
  const response = await API.get("/posts");
  return response.data;
};

// Add a comment
export const addCommentAPI = async (postId, text) => {
  const response = await API.post(`/posts/${postId}/comments`, { text }); // PLURAL 'comments'
  return response.data;
};

// Get a single post by ID
export const getPostByIdAPI = async (postId) => {
  try {
    const response = await API.get(`/posts/${postId}`);
    return response.data;
  } catch (err) {
    console.error('Get post error:', err.response?.data || err.message);
    throw err;
  }
};


export default API;
