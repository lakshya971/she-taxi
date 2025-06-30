"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  Car, 
  User, 
  ChevronDown, 
  PhoneCall, 
  Shield, 
  LogIn, 
  Timer, 
  MapPin, 
  CreditCard,
  Check // Added Check icon
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasScrollInitialized, setHasScrollInitialized] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add a small delay to prevent flash of unstyled content
    setTimeout(() => {
      setHasScrollInitialized(true);
      handleScroll();
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && event.target instanceof HTMLElement) {
        if (!event.target.closest('[data-mobile-menu]') && 
            !event.target.closest('[data-toggle-menu]')) {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  
  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  // Note: Type definitions are now at the top of the file

const NavLink = ({ href, children, icon = null }: { 
    href: string; 
    children: React.ReactNode; 
    icon?: React.ReactNode;
  }) => {
    const isActive = pathname === href || pathname.startsWith(href + '/');
    
    return (
      <div className="relative group">
        <Link 
          href={href} 
          onClick={closeMenu}
          className="flex items-center space-x-1"
        >
          <div
            className={cn(
              "flex items-center space-x-1.5 px-4 py-2 rounded-full transition-all",
              isActive
                ? "bg-primary/10 text-primary"
                : "hover:bg-primary/5 text-foreground/80 hover:text-foreground"
            )}
          >
            {icon && <span className="text-primary/70">{icon}</span>}
            <span className="text-sm font-medium">{children}</span>
          </div>
        </Link>
        
        {/* Enhanced active indicator with animation */}
        {isActive && (
          <motion.div
            layoutId="navbar-active-pill"
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            className="absolute -bottom-1 left-0 right-0 mx-auto w-1/2 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full hidden md:block"
          />
        )}
      </div>
    );
  };

  // Define navigation items with icons
  const navItems = [
    { href: "/", label: "Home", icon: <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg> },
    { href: "/services", label: "Services", icon: <Car className="w-3.5 h-3.5" /> },
    { href: "/about", label: "About", icon: <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
    { href: "/safety", label: "Safety", icon: <Shield className="w-3.5 h-3.5" /> },
    { href: "/contact", label: "Contact", icon: <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> }
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        hasScrollInitialized && (
          isScrolled
            ? "bg-background/85 backdrop-blur-lg shadow-sm border-b border-gray-200/20 dark:border-gray-800/20"
            : "bg-transparent"
        ),
        !hasScrollInitialized && "opacity-0"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="flex items-center"
          >
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <div className="absolute inset-0 bg-pink-400/20 dark:bg-pink-600/20 rounded-full blur-md group-hover:bg-pink-400/30 dark:group-hover:bg-pink-600/30 transition-colors duration-300"></div>
                <div className="relative bg-white dark:bg-gray-900 rounded-full p-1.5 shadow-sm border border-pink-200/50 dark:border-pink-800/50 group-hover:scale-105 transition-transform duration-300">
                  <Car className="h-5 w-5 text-pink-500 dark:text-pink-400" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-foreground tracking-tight">
                  She<span className="text-pink-500 dark:text-pink-400">Taxi</span>
                </span>
                <span className="text-[10px] leading-none text-gray-500 dark:text-gray-400 tracking-tight -mt-0.5">Women's Safety First</span>
              </div>
            </Link>
          </motion.div>

          {/* Enhanced desktop navigation */}
          <motion.nav 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="hidden md:flex items-center space-x-1"
          >
            {navItems.map((item, index) => (
              <NavLink 
                key={index}
                href={item.href} 
                icon={item.icon}
              >
                {item.label}
              </NavLink>
            ))}
          </motion.nav>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="hidden md:flex items-center space-x-3"
          >
            {/* Emergency button */}
            <Link href="/emergency">
              <Button 
                variant="ghost" 
                size="sm" 
                className="rounded-full text-red-500 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20"
              >
                <PhoneCall className="h-4 w-4 mr-1.5" />
                Emergency
              </Button>
            </Link>
            
            {/* Theme toggle */}
            <ThemeToggle size="sm" />
            
            {/* Login button */}
            <Link href="/auth/login">
              <Button 
                variant="outline" 
                size="sm" 
                className="rounded-full group relative overflow-hidden border-gray-200 hover:border-primary/30 transition-colors"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400/0 via-pink-400/10 to-pink-400/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity group-hover:animate-shimmer"></div>
                <LogIn className="mr-1.5 h-4 w-4" />
                Login
              </Button>
            </Link>
            
            {/* Signup button */}
            <Link href="/auth/signup">
              <Button 
                size="sm" 
                className="rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:shadow-md hover:shadow-pink-500/15 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-pink-400/0 via-white/20 to-pink-400/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-500"></span>
                <Shield className="mr-1.5 h-4 w-4" />
                Sign Up
              </Button>
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <ThemeToggle size="md" className="mr-1.5" />
            
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              data-toggle-menu
              className="relative"
            >
              <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-pink-500 rounded-full hidden" />
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu with animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            data-mobile-menu
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-b overflow-hidden"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.05 }}
              className="container mx-auto px-4 py-4 space-y-2"
            >
              {/* Enhanced navigation links with icons */}
              {navItems.map((item, index) => (
                <motion.div 
                  key={item.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.05 + index * 0.05 }}
                >
                  <Link href={item.href} onClick={closeMenu}>
                    <div className={cn(
                      "flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors",
                      pathname === item.href 
                        ? "bg-primary/10 text-primary font-medium" 
                        : "hover:bg-muted"
                    )}>
                      <span className="text-primary/70">{item.icon}</span>
                      <span>{item.label}</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
              
              {/* Emergency button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.3 }}
                className="pt-2"
              >
                <Link href="/emergency" onClick={closeMenu}>
                  <Button 
                    variant="outline" 
                    className="w-full rounded-xl text-red-500 border-red-200 dark:border-red-900/30 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20"
                  >
                    <PhoneCall className="mr-2 h-4 w-4" />
                    Emergency
                  </Button>
                </Link>
              </motion.div>
              
              {/* Auth buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.35 }}
                className="pt-2 space-y-2"
              >
                <Link href="/auth/login" onClick={closeMenu}>
                  <Button variant="outline" className="w-full rounded-xl">
                    <LogIn className="mr-2 h-4 w-4" />
                    Login
                  </Button>
                </Link>
                
                <Link href="/auth/signup" onClick={closeMenu}>
                  <Button className="w-full rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white">
                    <Shield className="mr-2 h-4 w-4" />
                    Sign Up
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add keyframe animations */}
      <style jsx global>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .rotate-270 {
          transform: rotate(-90deg);
        }
      `}</style>
    </header>
  );
};

export default Navbar;