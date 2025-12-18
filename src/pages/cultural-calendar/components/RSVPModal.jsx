import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import { Checkbox } from '../../../components/ui/Checkbox';

const RSVPModal = ({ event, isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    attendees: 1,
    dietaryRestrictions: '',
    specialRequests: '',
    newsletter: false
  });

  if (!isOpen || !event) return null;

  const handleSubmit = (e) => {
    e?.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-background rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-border">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-1">RSVP to Event</h2>
              <p className="text-sm text-muted-foreground">{event?.title}</p>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
              aria-label="Close modal"
            >
              <Icon name="X" size={20} />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-5">
            <Input
              label="Full Name"
              type="text"
              placeholder="Enter your full name"
              required
              value={formData?.name}
              onChange={(e) => handleChange('name', e?.target?.value)}
            />

            <Input
              label="Email Address"
              type="email"
              placeholder="your.email@example.com"
              required
              value={formData?.email}
              onChange={(e) => handleChange('email', e?.target?.value)}
            />

            <Input
              label="Phone Number"
              type="tel"
              placeholder="(555) 123-4567"
              required
              value={formData?.phone}
              onChange={(e) => handleChange('phone', e?.target?.value)}
            />

            <Input
              label="Number of Attendees"
              type="number"
              min="1"
              max="10"
              required
              value={formData?.attendees}
              onChange={(e) => handleChange('attendees', e?.target?.value)}
              description="Maximum 10 attendees per registration"
            />

            <Input
              label="Dietary Restrictions"
              type="text"
              placeholder="e.g., Vegetarian, Vegan, Gluten-free"
              value={formData?.dietaryRestrictions}
              onChange={(e) => handleChange('dietaryRestrictions', e?.target?.value)}
            />

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Special Requests or Questions
              </label>
              <textarea
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                rows="4"
                placeholder="Any special accommodations or questions?"
                value={formData?.specialRequests}
                onChange={(e) => handleChange('specialRequests', e?.target?.value)}
              />
            </div>

            <div className="pt-4 border-t border-border">
              <Checkbox
                label="Subscribe to event updates and cultural program newsletter"
                checked={formData?.newsletter}
                onChange={(e) => handleChange('newsletter', e?.target?.checked)}
              />
            </div>

            <div className="bg-muted/50 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Icon name="Info" size={20} color="var(--color-primary)" className="flex-shrink-0 mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <p className="font-medium text-foreground mb-1">Registration Confirmation</p>
                  <p>You will receive a confirmation email with event details and any additional instructions within 24 hours.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <Button
              type="button"
              variant="outline"
              fullWidth
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="default"
              fullWidth
              iconName="Check"
              iconPosition="left"
            >
              Confirm RSVP
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RSVPModal;