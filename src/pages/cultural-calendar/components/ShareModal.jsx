import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ShareModal = ({ event, isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !event) return null;

  const shareUrl = `https://culturalconnect.com/events/${event?.id}`;

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareOptions = [
    {
      name: 'Facebook',
      icon: 'Facebook',
      color: 'bg-[#1877F2]',
      action: () => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank')
    },
    {
      name: 'Twitter',
      icon: 'Twitter',
      color: 'bg-[#1DA1F2]',
      action: () => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(event?.title)}`, '_blank')
    },
    {
      name: 'LinkedIn',
      icon: 'Linkedin',
      color: 'bg-[#0A66C2]',
      action: () => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank')
    },
    {
      name: 'WhatsApp',
      icon: 'MessageCircle',
      color: 'bg-[#25D366]',
      action: () => window.open(`https://wa.me/?text=${encodeURIComponent(event?.title + ' ' + shareUrl)}`, '_blank')
    },
    {
      name: 'Email',
      icon: 'Mail',
      color: 'bg-gray-600',
      action: () => window.location.href = `mailto:?subject=${encodeURIComponent(event?.title)}&body=${encodeURIComponent(shareUrl)}`
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-background rounded-2xl max-w-md w-full">
        <div className="p-6 border-b border-border">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-foreground">Share Event</h2>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
              aria-label="Close modal"
            >
              <Icon name="X" size={18} />
            </button>
          </div>
        </div>

        <div className="p-6">
          <p className="text-sm text-muted-foreground mb-6">
            Share this event with your friends and community
          </p>

          <div className="grid grid-cols-5 gap-3 mb-6">
            {shareOptions?.map((option) => (
              <button
                key={option?.name}
                onClick={option?.action}
                className="flex flex-col items-center gap-2 group"
              >
                <div className={`w-12 h-12 rounded-full ${option?.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Icon name={option?.icon} size={20} color="#FFFFFF" />
                </div>
                <span className="text-xs text-muted-foreground">{option?.name}</span>
              </button>
            ))}
          </div>

          <div className="bg-muted rounded-lg p-4">
            <p className="text-xs text-muted-foreground mb-2">Event Link</p>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={shareUrl}
                readOnly
                className="flex-1 px-3 py-2 bg-background border border-border rounded-lg text-sm text-foreground"
              />
              <Button
                variant={copied ? "success" : "default"}
                size="sm"
                iconName={copied ? "Check" : "Copy"}
                iconPosition="left"
                onClick={handleCopyLink}
              >
                {copied ? 'Copied' : 'Copy'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;