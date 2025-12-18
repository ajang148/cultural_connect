// src/pages/community-forum/components/ThreadDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import ThreadReply from './ThreadReply';
import { isLoggedIn } from '../../../utils/auth';
import { getPostByIdAPI, addCommentAPI } from '../../../api';

const ThreadDetail = () => {
  const { threadId } = useParams();
  const navigate = useNavigate();
  const [thread, setThread] = useState(null);
  const [loading, setLoading] = useState(true);
  const [commentText, setCommentText] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const loggedIn = isLoggedIn();

  useEffect(() => {
    fetchThread();
  }, [threadId]);

  const fetchThread = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getPostByIdAPI(threadId);
      setThread(data);
    } catch (err) {
      console.error('Failed to fetch thread:', err);
      setError('Failed to load thread. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    
    if (!loggedIn) {
      alert('Please login to add a comment');
      navigate('/login');
      return;
    }
    
    if (!commentText.trim()) return;
    
    setSubmitting(true);
    try {
      await addCommentAPI(threadId, commentText);
      setCommentText('');
      fetchThread(); // Refresh thread to show new comment
    } catch (err) {
      console.error('Failed to add comment:', err);
      alert('Failed to add comment. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleLikeThread = () => {
    if (!loggedIn) {
      alert('Please login to like threads');
      navigate('/login');
      return;
    }
    // TODO: Implement like functionality
    console.log('Liking thread:', threadId);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background pt-20">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading thread...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !thread) {
    return (
      <div className="min-h-screen bg-background pt-20">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="text-center">
            <Icon name="AlertCircle" size={48} className="mx-auto mb-4 text-destructive" />
            <h2 className="text-2xl font-semibold text-foreground mb-2">Thread Not Found</h2>
            <p className="text-muted-foreground mb-6">{error || 'The thread you are looking for does not exist.'}</p>
            <Button
              variant="default"
              onClick={() => navigate('/community-forum')}
              iconName="ArrowLeft"
              iconPosition="left"
            >
              Back to Discussions
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/community-forum')}
          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <Icon name="ArrowLeft" size={20} />
          <span>Back to Discussions</span>
        </button>

        {/* Thread Content */}
        <div className="bg-card border border-border rounded-xl p-6 mb-8">
          {/* Thread Header */}
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-border">
              <Image 
                src={thread.authorAvatar || 'https://via.placeholder.com/150'} 
                alt={`Avatar of ${thread.authorName}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1 flex-wrap">
                <span className="font-semibold text-foreground">{thread.authorName}</span>
                <span className="text-xs text-muted-foreground">
                  {formatDate(thread.createdAt)}
                </span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                {thread.title}
              </h1>
              
              {/* Tags */}
              {thread.tags && thread.tags.length > 0 && (
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  {thread.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Thread Body */}
          <div className="prose max-w-none text-foreground mb-6 whitespace-pre-line">
            {thread.content}
          </div>

          {/* Thread Actions */}
          <div className="flex items-center justify-between pt-6 border-t border-border">
            <div className="flex items-center gap-4">
              <button
                onClick={handleLikeThread}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors ${
                  loggedIn ? 'hover:bg-muted' : 'opacity-50 cursor-not-allowed'
                }`}
                disabled={!loggedIn}
              >
                <Icon name="ThumbsUp" size={18} />
                <span className="text-sm">{thread.likeCount || 0}</span>
              </button>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon name="MessageSquare" size={16} />
                <span>{thread.comments?.length || 0} comments</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon name="Eye" size={16} />
                <span>{thread.viewCount || 0} views</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                iconName="Share2"
              >
                Share
              </Button>
              {thread.isPinned && (
                <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md flex items-center gap-1">
                  <Icon name="Pin" size={12} />
                  Pinned
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-foreground">
              Comments ({thread.comments?.length || 0})
            </h2>
          </div>

          {/* Comment Form */}
          <div className="bg-card border border-border rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-foreground mb-4">
              {loggedIn ? 'Add your comment' : 'Login to comment'}
            </h3>
            
            {loggedIn ? (
              <form onSubmit={handleSubmitComment}>
                <textarea
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="Write your comment here..."
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none mb-4"
                  required
                />
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    Markdown is supported
                  </div>
                  <Button
                    type="submit"
                    variant="default"
                    disabled={submitting || !commentText.trim()}
                    iconName="Send"
                    iconPosition="left"
                  >
                    {submitting ? 'Posting...' : 'Post Comment'}
                  </Button>
                </div>
              </form>
            ) : (
              <div className="text-center py-4">
                <p className="text-muted-foreground mb-4">
                  You need to be logged in to comment on this thread.
                </p>
                <div className="flex gap-3 justify-center">
                  <Button
                    variant="default"
                    onClick={() => navigate('/login')}
                  >
                    Login
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => navigate('/signup')}
                  >
                    Sign Up
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Comments List */}
          {thread.comments && thread.comments.length > 0 ? (
            <div className="space-y-4">
              {thread.comments.map((comment) => (
                <ThreadReply
                  key={comment._id}
                  reply={{
                    id: comment._id,
                    authorName: comment.user?.name || 'Anonymous',
                    authorAvatar: comment.user?.avatar || 'https://via.placeholder.com/150',
                    authorAvatarAlt: `Avatar of ${comment.user?.name || 'Anonymous'}`,
                    content: comment.text,
                    timestamp: new Date(comment.createdAt),
                    likeCount: comment.likes || 0,
                    badges: comment.user?.badges || []
                  }}
                  onLike={() => {
                    if (!loggedIn) {
                      alert('Please login to like comments');
                      navigate('/login');
                      return;
                    }
                    console.log('Liking comment:', comment._id);
                  }}
                  onReply={() => {
                    if (!loggedIn) {
                      alert('Please login to reply to comments');
                      navigate('/login');
                      return;
                    }
                    setCommentText(`@${comment.user?.name || 'User'} `);
                    document.querySelector('textarea')?.focus();
                  }}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-8 border border-border rounded-xl">
              <Icon name="MessageSquare" size={48} className="mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-medium text-foreground mb-2">
                No comments yet
              </h3>
              <p className="text-muted-foreground">
                {loggedIn ? 'Be the first to comment!' : 'Login to be the first to comment!'}
              </p>
            </div>
          )}
        </div>

        {/* Related Threads (Optional) */}
        <div className="mt-12 pt-8 border-t border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">Related Discussions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* You can add related threads here later */}
            <div className="text-center py-8 border border-border rounded-xl">
              <p className="text-muted-foreground">Related threads feature coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreadDetail;