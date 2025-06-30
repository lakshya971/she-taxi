"use client";

import { useState, useEffect } from 'react';
import Loading from '@/components/ui/loading';
import PageLoading from '@/components/ui/page-loading';

// Global loading context for app-wide loading states
import { createContext, useContext } from 'react';

interface LoadingContextType {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
  loadingMessage: string;
  setLoadingMessage: (message: string) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessageState] = useState('Loading...');

  const setLoading = (loading: boolean) => {
    setIsLoading(loading);
  };

  const setLoadingMessage = (message: string) => {
    setLoadingMessageState(message);
  };

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading, loadingMessage, setLoadingMessage }}>
      {children}
      {isLoading && <PageLoading />}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
}

// Page transition loading component
export function PageTransitionLoading() {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500); // Increased from 1500 to 2500ms

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return <PageLoading />;
}

// Route loading component for Next.js 13+ app router
export default function RouteLoading() {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <Loading message="Loading page..." size="lg" />
    </div>
  );
}
