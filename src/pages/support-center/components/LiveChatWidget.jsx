import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const LiveChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
  {
    id: 1,
    sender: 'agent',
    name: 'Sarah Chen',
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1b9314451-1763295947600.png",
    avatarAlt: 'Professional Asian woman with long black hair wearing blue blazer and warm smile',
    message: 'Hello! Welcome to CulturalConnect Support. How can I assist you today?',
    timestamp: new Date(Date.now() - 120000)
  }]
  );

  const handleSendMessage = (e) => {
    e?.preventDefault();
    if (message?.trim()) {
      const newMessage = {
        id: messages?.length + 1,
        sender: 'user',
        message: message,
        timestamp: new Date()
      };
      setMessages([...messages, newMessage]);
      setMessage('');

      setTimeout(() => {
        const agentResponse = {
          id: messages?.length + 2,
          sender: 'agent',
          name: 'Sarah Chen',
          avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1b9314451-1763295947600.png",
          avatarAlt: 'Professional Asian woman with long black hair wearing blue blazer and warm smile',
          message: 'Thank you for your message. Let me help you with that right away.',
          timestamp: new Date()
        };
        setMessages((prev) => [...prev, agentResponse]);
      }, 1500);
    }
  };

  const formatTime = (date) => {
    return date?.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-primary hover:bg-primary/90 text-white rounded-full shadow-medium flex items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label="Open live chat">

        {isOpen ?
        <Icon name="X" size={24} color="#FFFFFF" /> :

        <Icon name="MessageCircle" size={24} color="#FFFFFF" />
        }
      </button>
      {isOpen &&
      <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] bg-card rounded-2xl shadow-medium border border-border overflow-hidden">
          <div className="bg-primary text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Icon name="Headphones" size={20} color="#FFFFFF" />
              </div>
              <div>
                <h3 className="font-semibold">Live Support</h3>
                <p className="text-xs text-white/80">Typically replies in minutes</p>
              </div>
            </div>
            <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">

              <Icon name="Minimize2" size={18} color="#FFFFFF" />
            </button>
          </div>

          <div className="h-96 overflow-y-auto p-4 space-y-4 bg-muted/30">
            {messages?.map((msg) =>
          <div
            key={msg?.id}
            className={`flex gap-3 ${msg?.sender === 'user' ? 'flex-row-reverse' : ''}`}>

                {msg?.sender === 'agent' &&
            <img
              src={msg?.avatar}
              alt={msg?.avatarAlt}
              className="w-8 h-8 rounded-full object-cover flex-shrink-0" />

            }
                <div className={`flex-1 ${msg?.sender === 'user' ? 'flex justify-end' : ''}`}>
                  <div
                className={`inline-block max-w-[80%] rounded-2xl px-4 py-2 ${
                msg?.sender === 'user' ? 'bg-primary text-white' : 'bg-card border border-border'}`
                }>

                    {msg?.sender === 'agent' &&
                <p className="text-xs font-medium text-muted-foreground mb-1">{msg?.name}</p>
                }
                    <p className="text-sm">{msg?.message}</p>
                    <p className={`text-xs mt-1 ${msg?.sender === 'user' ? 'text-white/70' : 'text-muted-foreground'}`}>
                      {formatTime(msg?.timestamp)}
                    </p>
                  </div>
                </div>
              </div>
          )}
          </div>

          <form onSubmit={handleSendMessage} className="p-4 border-t border-border bg-card">
            <div className="flex gap-2">
              <Input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e?.target?.value)}
              className="flex-1" />

              <Button
              type="submit"
              variant="default"
              iconName="Send"
              disabled={!message?.trim()}>

                Send
              </Button>
            </div>
          </form>
        </div>
      }
    </>);

};

export default LiveChatWidget;