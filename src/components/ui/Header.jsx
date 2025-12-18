// src/components/ui/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';
import { isLoggedIn, getUser, logout } from '../../utils/auth';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const location = useLocation();

  const loggedIn = isLoggedIn();
  const user = getUser();

  // Debug log
  useEffect(() => {
    console.log("Header debug - loggedIn:", loggedIn);
    console.log("Header debug - user:", user);
  }, [loggedIn, user]);

  const handleLogout = () => {
    logout();
    window.location.href = "/login";
  };

  // Get user initials for avatar fallback
  const getUserInitials = (name) => {
    if (!name) return 'U';
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  // Main nav links
  const mainNav = [
    { path: '/homepage', label: 'Home' },
    { path: '/cultural-programs', label: 'Programs' },
    { path: '/immigration-services', label: 'Services' },
    { path: '/community-forum', label: 'Community' },
  ];

  // Secondary links
  const moreNav = loggedIn
    ? [
        { path: '/cultural-calendar', label: 'Events' },
        { path: '/support-center', label: 'Support Center' },
        { action: handleLogout, label: 'Logout' },
      ]
    : [
        { path: '/cultural-calendar', label: 'Events' },
        { path: '/signup', label: 'Signup' },
        { path: '/login', label: 'Login' },
      ];

  const isActivePath = (path) => location.pathname === path;

  return (
    <>
      <header className="fixed w-full z-50 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/homepage" className="flex items-center gap-2 font-bold text-xl">
            <Icon name="Globe" size={24} />
            CulturalConnect
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-4">
            {mainNav.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded hover:bg-muted ${
                  isActivePath(item.path) ? 'text-primary' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* More dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                className="px-3 py-2 rounded hover:bg-muted flex items-center gap-1"
              >
                More
                <Icon name={isMoreOpen ? 'ChevronUp' : 'ChevronDown'} size={16} />
              </button>

              {isMoreOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded shadow-md z-50">
                  {moreNav.map(item =>
                    item.path ? (
                      <Link
                        key={item.label}
                        to={item.path}
                        onClick={() => setIsMoreOpen(false)}
                        className="block px-4 py-2 hover:bg-muted"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <button
                        key={item.label}
                        onClick={() => {
                          item.action();
                          setIsMoreOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-muted"
                      >
                        {item.label}
                      </button>
                    )
                  )}
                </div>
              )}
            </div>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="sm" iconName="Search" />
            
            {loggedIn && user ? (
              /* User Profile Dropdown */
              <div className="relative">
                <button
                  onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-muted transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                    {user.avatar ? (
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      <span className="text-xs font-semibold text-primary">
                        {getUserInitials(user.name)}
                      </span>
                    )}
                  </div>
                  <span className="font-medium text-sm">{user.name}</span>
                  <Icon name={isUserDropdownOpen ? 'ChevronUp' : 'ChevronDown'} size={16} />
                </button>

                {isUserDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg z-50">
                    <div className="px-4 py-3 border-b border-border">
                      <p className="font-semibold text-foreground">{user.name}</p>
                      <p className="text-xs text-muted-foreground">{user.email}</p>
                    </div>
                    <div className="py-1">
                      <Link
                        to="/profile"
                        onClick={() => setIsUserDropdownOpen(false)}
                        className="block px-4 py-2 hover:bg-muted text-sm"
                      >
                        <Icon name="User" size={16} className="inline mr-2" />
                        My Profile
                      </Link>
                      <Link
                        to="/my-posts"
                        onClick={() => setIsUserDropdownOpen(false)}
                        className="block px-4 py-2 hover:bg-muted text-sm"
                      >
                        <Icon name="FileText" size={16} className="inline mr-2" />
                        My Posts
                      </Link>
                      <Link
                        to="/settings"
                        onClick={() => setIsUserDropdownOpen(false)}
                        className="block px-4 py-2 hover:bg-muted text-sm"
                      >
                        <Icon name="Settings" size={16} className="inline mr-2" />
                        Settings
                      </Link>
                      <div className="border-t border-border my-1"></div>
                      <button
                        onClick={() => {
                          handleLogout();
                          setIsUserDropdownOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 hover:bg-muted text-sm text-destructive"
                      >
                        <Icon name="LogOut" size={16} className="inline mr-2" />
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* Sign Up button for non-logged in users */
              <Link to="/signup">
                <Button variant="default" size="sm">
                  Get Started
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded bg-muted"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Icon name="Menu" size={20} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="absolute right-0 top-0 w-64 h-full bg-background p-4" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setIsMobileMenuOpen(false)} className="mb-4">
              <Icon name="X" size={20} />
            </button>

            {/* Show user info in mobile menu */}
            {loggedIn && user && (
              <div className="mb-6 p-3 bg-muted rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                    {user.avatar ? (
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      <span className="text-sm font-semibold text-primary">
                        {getUserInitials(user.name)}
                      </span>
                    )}
                  </div>
                  <div>
                    <p className="font-semibold">{user.name}</p>
                    <p className="text-xs text-muted-foreground">{user.email}</p>
                  </div>
                </div>
              </div>
            )}

            <nav className="flex flex-col gap-2">
              {mainNav.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2 rounded hover:bg-muted"
                >
                  {item.label}
                </Link>
              ))}

              {moreNav.map(item =>
                item.path ? (
                  <Link
                    key={item.label}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-3 py-2 rounded hover:bg-muted"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.label}
                    onClick={() => {
                      item.action();
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-left px-3 py-2 rounded hover:bg-muted"
                  >
                    {item.label}
                  </button>
                )
              )}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;