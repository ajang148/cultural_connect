import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerLinks = {
    programs: [
      { label: 'Dance & Movement', path: '/cultural-programs' },
      { label: 'Music & Performance', path: '/cultural-programs' },
      { label: 'Language Classes', path: '/cultural-programs' },
      { label: 'Cooking & Cuisine', path: '/cultural-programs' }
    ],
    community: [
      { label: 'Community Forum', path: '/community-forum' },
      { label: 'Events Calendar', path: '/cultural-calendar' },
      { label: 'Success Stories', path: '/community-forum' },
      { label: 'Member Directory', path: '/community-forum' }
    ],
    services: [
      { label: 'Immigration Services', path: '/immigration-services' },
      { label: 'Expert Consultations', path: '/immigration-services' },
      { label: 'Document Assistance', path: '/immigration-services' },
      { label: 'Application Tracking', path: '/immigration-services' }
    ],
    support: [
      { label: 'Help Center', path: '/support-center' },
      { label: 'Contact Us', path: '/support-center' },
      { label: 'FAQs', path: '/support-center' },
      { label: 'Privacy Policy', path: '/support-center' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: 'Facebook', url: '#' },
    { name: 'Twitter', icon: 'Twitter', url: '#' },
    { name: 'Instagram', icon: 'Instagram', url: '#' },
    { name: 'Youtube', icon: 'Youtube', url: '#' }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-1">
            <Link to="/homepage" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-brand-teal rounded-lg flex items-center justify-center">
                <Icon name="Globe" size={24} color="#FFFFFF" />
              </div>
              <span className="text-xl font-semibold text-foreground font-accent">CulturalConnect</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Bridging cultures, empowering communities, and celebrating diversity through meaningful programs and services.
            </p>
            <div className="flex gap-3">
              {socialLinks?.map((social) => (
                <a
                  key={social?.name}
                  href={social?.url}
                  className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  aria-label={social?.name}
                >
                  <Icon name={social?.icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Programs</h3>
            <ul className="space-y-2">
              {footerLinks?.programs?.map((link) => (
                <li key={link?.label}>
                  <Link
                    to={link?.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Community</h3>
            <ul className="space-y-2">
              {footerLinks?.community?.map((link) => (
                <li key={link?.label}>
                  <Link
                    to={link?.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks?.services?.map((link) => (
                <li key={link?.label}>
                  <Link
                    to={link?.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks?.support?.map((link) => (
                <li key={link?.label}>
                  <Link
                    to={link?.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} CulturalConnect. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/support-center" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link to="/support-center" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/support-center" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;