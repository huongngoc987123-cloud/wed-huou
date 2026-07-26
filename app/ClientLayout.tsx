'use client';

import React from 'react';
import { AppProvider, useAppContext } from '@/context/AppContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ProductDetailModal } from '@/components/ProductDetailModal';
import { ArticleModal } from '@/components/ArticleModal';
import { ContactModal } from '@/components/ContactModal';

function LayoutContent({ children }: { children: React.ReactNode }) {
  const {
    selectedProduct,
    setSelectedProduct,
    selectedArticle,
    setSelectedArticle,
    isContactModalOpen,
    contactProductInterest,
    closeContactModal,
    openContactModal,
  } = useAppContext();

  return (
    <>
      <Navbar />

      <main className="flex-1 pt-6">{children}</main>

      <Footer />

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onInquire={(productName) =>
          openContactModal(`Sản phẩm: ${productName}`)
        }
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={closeContactModal}
        initialProductInterest={contactProductInterest}
      />
    </>
  );
}

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppProvider>
      <LayoutContent>{children}</LayoutContent>
    </AppProvider>
  );
}
