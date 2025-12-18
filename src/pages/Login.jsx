// src/pages/Login.jsx
import React, { useState } from "react";
import { loginUser } from "../api";
import { useNavigate } from "react-router-dom";
import { setToken, setUser } from "../utils/auth";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Call the login API
      const response = await loginUser(email, password);
      
      console.log("API Response:", response);
      
      // Store token
      setToken(response.token);
      
      // Store user data - response contains user data directly
      setUser({
        id: response._id || response.id,
        name: response.name,
        email: response.email,
        avatar: response.avatar || response.profileImage || null,
        role: response.role || "member"
      });
      
      alert(`Welcome back, ${response.name}`);
      navigate("/homepage");
    } catch (err) {
      console.error("Login error details:", err);
      alert(err.response?.data?.error || err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md p-8 bg-card rounded-xl shadow-medium">
        <h1 className="text-3xl font-accent mb-6 text-primary text-center">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 border border-border rounded-lg bg-surface text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="w-full px-4 py-2 border border-border rounded-lg bg-surface text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 mt-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="mt-6 text-sm text-muted-foreground text-center">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="text-secondary hover:text-secondary-foreground font-medium"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;