import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { isLoggedIn } from '../../../utils/auth';
import { useNavigate } from 'react-router-dom';

const CreateThreadModal = ({ isOpen, onClose, onSubmit, categories }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');
  const navigate = useNavigate();
  const loggedIn = isLoggedIn();

  const handleSubmit = (e) => {
    e?.preventDefault();
    
    // Check if user is logged in
    if (!loggedIn) {
      alert('Please login to create a thread');
      onClose();
      navigate('/login');
      return;
    }
    
    onSubmit({
      title,
      content,
      category,
      tags: tags?.split(',')?.map(tag => tag?.trim())?.filter(Boolean)
    });
    setTitle('');
    setContent('');
    setCategory('');
    setTags('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-background rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-background border-b border-border p-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-foreground">
            {loggedIn ? 'Create New Thread' : 'Login Required'}
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
          >
            <Icon name="X" size={20} />
          </button>
        </div>
        
        {loggedIn ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <Input
              label="Thread Title"
              type="text"
              placeholder="Enter a descriptive title for your thread"
              value={title}
              onChange={(e) => setTitle(e?.target?.value)}
              required
            />

            <Select
              label="Category"
              placeholder="Select a category"
              options={categories?.map(cat => ({
                value: cat?.id,
                label: cat?.name
              }))}
              value={category}
              onChange={setCategory}
              required
            />

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Content
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e?.target?.value)}
                placeholder="Share your thoughts, questions, or experiences..."
                rows={8}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            </div>

            <Input
              label="Tags (comma-separated)"
              type="text"
              placeholder="e.g., visa, immigration, culture"
              value={tags}
              onChange={(e) => setTags(e?.target?.value)}
              description="Add relevant tags to help others find your thread"
            />

            <div className="flex items-center gap-3 pt-4">
              <Button
                type="submit"
                variant="default"
                iconName="Send"
                iconPosition="left"
              >
                Post Thread
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
              >
                Cancel
              </Button>
            </div>
          </form>
        ) : (
          <div className="p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Icon name="Lock" size={32} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Login Required
            </h3>
            <p className="text-muted-foreground mb-6">
              You need to be logged in to create a new thread. Please login or sign up to participate in the community.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                variant="default"
                onClick={() => {
                  onClose();
                  navigate('/login');
                }}
              >
                Login
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  onClose();
                  navigate('/signup');
                }}
              >
                Sign Up
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateThreadModal;