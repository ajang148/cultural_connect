// src/pages/SignupForm.jsx
import React, { useState } from "react";
import { signupUser } from "../api";
import { useNavigate } from "react-router-dom";
import { setToken, setUser } from "../utils/auth";

const SignupForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await signupUser(name, email, password);
      
      console.log("Signup API Response:", response);
      
      // Store token
      setToken(response.token);
      
      // Store user data
      setUser({
        id: response._id || response.id,
        name: response.name,
        email: response.email,
        avatar: response.avatar || null,
        role: response.role || "member"
      });
      
      alert(`Welcome, ${response.name}!`);
      navigate("/homepage");
    } catch (err) {
      alert(err.response?.data.error || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md p-8 bg-card rounded-xl shadow-medium">
        <h1 className="text-3xl font-accent mb-6 text-primary text-center">Sign Up</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
              className="w-full px-4 py-2 border border-border rounded-lg bg-surface text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition"
            />
          </div>

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
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>

        <p className="mt-6 text-sm text-muted-foreground text-center">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-secondary hover:text-secondary-foreground font-medium"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;