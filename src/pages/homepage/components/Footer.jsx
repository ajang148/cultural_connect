import React from 'react';
import Icon from '../../../components/AppIcon';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerLinks = {
    services: [
      { label: "Cultural Programs", path: "/cultural-programs" },
      { label: "Immigration Services", path: "/immigration-services" },
      { label: "Community Forum", path: "/community-forum" },
      { label: "Cultural Calendar", path: "/cultural-calendar" }
    ],
    resources: [
      { label: "Visa Guides", path: "/immigration-services" },
      { label: "Cultural Resources", path: "/cultural-programs" },
      { label: "Success Stories", path: "/homepage" },
      { label: "Expert Directory", path: "/immigration-services" }
    ],
    company: [
      { label: "About Us", path: "/homepage" },
      { label: "Support Center", path: "/support-center" },
      { label: "Privacy Policy", path: "/homepage" },
      { label: "Terms of Service", path: "/homepage" }
    ]
  };

  const socialLinks = [
    { icon: "Facebook", label: "Facebook", url: "#" },
    { icon: "Twitter", label: "Twitter", url: "#" },
    { icon: "Instagram", label: "Instagram", url: "#" },
    { icon: "Linkedin", label: "LinkedIn", url: "#" }
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link to="/homepage" className="inline-flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-brand-teal flex items-center justify-center">
                <Icon name="Globe" size={24} color="#FFFFFF" />
              </div>
              <span className="text-xl font-semibold text-foreground font-accent">
                CulturalConnect
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-sm">
              Your trusted partner for cultural integration and immigration success. Building bridges between cultures and communities worldwide.
            </p>
            <div className="flex gap-3">
              {socialLinks?.map((social) => (
                <a
                  key={social?.label}
                  href={social?.url}
                  className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                  aria-label={social?.label}
                >
                  <Icon name={social?.icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks?.services?.map((link) => (
                <li key={link?.label}>
                  <Link
                    to={link?.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks?.resources?.map((link) => (
                <li key={link?.label}>
                  <Link
                    to={link?.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks?.company?.map((link) => (
                <li key={link?.label}>
                  <Link
                    to={link?.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <a href="mailto:support@culturalconnect.com" className="hover:text-primary transition-colors">
                  support@culturalconnect.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <a href="tel:+1-800-CULTURE" className="hover:text-primary transition-colors">
                  +1 (800) CULTURE
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon name="Shield" size={16} className="text-success" />
                <span>Secure & Trusted</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon name="Award" size={16} className="text-secondary" />
                <span>Certified Experts</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 text-sm text-muted-foreground">
            <p>&copy; {currentYear} CulturalConnect. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;