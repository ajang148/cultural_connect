import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const SupportTicketSystem = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    subject: '',
    category: '',
    priority: '',
    description: ''
  });

  const tickets = [
  {
    id: 'TKT-2025-1247',
    subject: 'Document verification delay',
    category: 'Immigration Services',
    status: 'In Progress',
    priority: 'High',
    created: new Date(Date.now() - 172800000),
    lastUpdate: new Date(Date.now() - 3600000),
    agent: 'Michael Chen',
    agentAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_17b5a89dc-1763294048620.png",
    agentAvatarAlt: 'Asian male support agent with short black hair wearing professional navy suit'
  },
  {
    id: 'TKT-2025-1198',
    subject: 'Unable to register for cultural workshop',
    category: 'Cultural Programs',
    status: 'Resolved',
    priority: 'Medium',
    created: new Date(Date.now() - 432000000),
    lastUpdate: new Date(Date.now() - 86400000),
    agent: 'Sarah Johnson',
    agentAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_178337bc9-1765707832662.png",
    agentAvatarAlt: 'Caucasian female support agent with blonde hair in professional blue blazer'
  },
  {
    id: 'TKT-2025-1156',
    subject: 'Payment processing issue',
    category: 'Billing & Payments',
    status: 'Pending',
    priority: 'High',
    created: new Date(Date.now() - 604800000),
    lastUpdate: new Date(Date.now() - 259200000),
    agent: 'Unassigned',
    agentAvatar: null,
    agentAvatarAlt: null
  }];


  const categoryOptions = [
  { value: 'immigration', label: 'Immigration Services' },
  { value: 'cultural', label: 'Cultural Programs' },
  { value: 'community', label: 'Community Forum' },
  { value: 'account', label: 'Account & Settings' },
  { value: 'technical', label: 'Technical Support' },
  { value: 'billing', label: 'Billing & Payments' }];


  const priorityOptions = [
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' },
  { value: 'urgent', label: 'Urgent' }];


  const getStatusColor = (status) => {
    const colors = {
      'In Progress': 'bg-warning/10 text-warning border-warning/20',
      'Resolved': 'bg-success/10 text-success border-success/20',
      'Pending': 'bg-muted text-muted-foreground border-border'
    };
    return colors?.[status] || colors?.['Pending'];
  };

  const getPriorityColor = (priority) => {
    const colors = {
      'High': 'text-error',
      'Medium': 'text-warning',
      'Low': 'text-success',
      'Urgent': 'text-destructive'
    };
    return colors?.[priority] || 'text-muted-foreground';
  };

  const formatDate = (date) => {
    return date?.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    console.log('Ticket submitted:', formData);
    setShowForm(false);
    setFormData({ subject: '', category: '', priority: '', description: '' });
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Support Tickets
            </h2>
            <p className="text-lg text-muted-foreground">
              Track and manage your support requests
            </p>
          </div>
          <Button
            variant="default"
            iconName="Plus"
            iconPosition="left"
            onClick={() => setShowForm(!showForm)}
            className="mt-4 md:mt-0">

            Create New Ticket
          </Button>
        </div>

        {showForm &&
        <div className="bg-card border border-border rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">Create Support Ticket</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
              label="Subject"
              type="text"
              placeholder="Brief description of your issue"
              required
              value={formData?.subject}
              onChange={(e) => setFormData({ ...formData, subject: e?.target?.value })} />

              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Select
                label="Category"
                placeholder="Select category"
                options={categoryOptions}
                value={formData?.category}
                onChange={(value) => setFormData({ ...formData, category: value })}
                required />

                
                <Select
                label="Priority"
                placeholder="Select priority"
                options={priorityOptions}
                value={formData?.priority}
                onChange={(value) => setFormData({ ...formData, priority: value })}
                required />

              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Description
                </label>
                <textarea
                className="w-full min-h-32 px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground"
                placeholder="Provide detailed information about your issue..."
                required
                value={formData?.description}
                onChange={(e) => setFormData({ ...formData, description: e?.target?.value })} />

              </div>

              <div className="flex gap-3">
                <Button type="submit" variant="default">
                  Submit Ticket
                </Button>
                <Button
                type="button"
                variant="outline"
                onClick={() => setShowForm(false)}>

                  Cancel
                </Button>
              </div>
            </form>
          </div>
        }

        <div className="space-y-4">
          {tickets?.map((ticket) =>
          <div
            key={ticket?.id}
            className="bg-card border border-border rounded-xl p-6 hover:shadow-medium transition-all duration-300">

              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm font-mono text-muted-foreground">{ticket?.id}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(ticket?.status)}`}>
                      {ticket?.status}
                    </span>
                    <div className={`flex items-center gap-1 ${getPriorityColor(ticket?.priority)}`}>
                      <Icon name="AlertCircle" size={16} />
                      <span className="text-sm font-medium">{ticket?.priority}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {ticket?.subject}
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Icon name="Tag" size={16} />
                      <span>{ticket?.category}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Calendar" size={16} />
                      <span>Created {formatDate(ticket?.created)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" size={16} />
                      <span>Updated {formatDate(ticket?.lastUpdate)}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  {ticket?.agentAvatar ?
                <div className="flex items-center gap-3">
                      <img
                    src={ticket?.agentAvatar}
                    alt={ticket?.agentAvatarAlt}
                    className="w-10 h-10 rounded-full object-cover" />

                      <div>
                        <p className="text-sm font-medium text-foreground">{ticket?.agent}</p>
                        <p className="text-xs text-muted-foreground">Assigned Agent</p>
                      </div>
                    </div> :

                <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="UserX" size={20} />
                      <span className="text-sm">{ticket?.agent}</span>
                    </div>
                }
                  
                  <Button variant="outline" size="sm" iconName="ExternalLink">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default SupportTicketSystem;