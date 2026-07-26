'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product, Article } from '@/types';

interface AppContextType {
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;
  selectedArticle: Article | null;
  setSelectedArticle: (article: Article | null) => void;
  isContactModalOpen: boolean;
  contactProductInterest: string;
  openContactModal: (interest?: string) => void;
  closeContactModal: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [contactProductInterest, setContactProductInterest] = useState('');

  const openContactModal = (interest: string = '') => {
    setContactProductInterest(interest);
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        selectedProduct,
        setSelectedProduct,
        selectedArticle,
        setSelectedArticle,
        isContactModalOpen,
        contactProductInterest,
        openContactModal,
        closeContactModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
