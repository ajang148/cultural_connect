import React, { useState } from "react";
import { createPostAPI } from "../api";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createPostAPI(title, content);
      alert("Post created successfully!");
      setTitle("");
      setContent("");
    } catch (err) {
      alert(err.response?.data.error || "Failed to create post");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post Title"
        className="border p-2 rounded"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your post..."
        className="border p-2 rounded"
        rows={5}
        required
      />
      <button type="submit" className="bg-primary text-white px-4 py-2 rounded">
        Create Post
      </button>
    </form>
  );
};

export default CreatePost;
