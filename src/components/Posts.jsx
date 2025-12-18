import React, { useEffect, useState } from "react";
import { getPostsAPI, addCommentAPI } from "../api/api";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [commentText, setCommentText] = useState({});

  const fetchPosts = async () => {
    const data = await getPostsAPI();
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleComment = async (postId) => {
    if (!commentText[postId]) return;
    const updatedPost = await addCommentAPI(postId, commentText[postId]);
    setPosts(posts.map(p => p._id === postId ? updatedPost : p));
    setCommentText({ ...commentText, [postId]: "" });
  };

  return (
    <div className="flex flex-col gap-6">
      {posts.map(post => (
        <div key={post._id} className="border p-4 rounded">
          <h2 className="font-bold">{post.title}</h2>
          <p>{post.content}</p>
          <div className="mt-2 text-sm text-muted">By: {post.user.name}</div>

          <div className="mt-4">
            {post.comments.map(c => (
              <div key={c._id} className="border-t pt-2 mt-2">
                <strong>{c.user.name}:</strong> {c.text}
              </div>
            ))}
            <div className="flex gap-2 mt-2">
              <input
                value={commentText[post._id] || ""}
                onChange={e => setCommentText({ ...commentText, [post._id]: e.target.value })}
                placeholder="Write a comment..."
                className="border p-1 flex-1 rounded"
              />
              <button
                onClick={() => handleComment(post._id)}
                className="bg-primary text-white px-2 rounded"
              >
                Comment
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
