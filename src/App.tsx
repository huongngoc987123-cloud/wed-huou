import React, { useState } from 'react';
import { NavTab, Product, Article } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { ArticleModal } from './components/ArticleModal';
import { ContactModal } from './components/ContactModal';

import { HomeView } from './views/HomeView';
import { ProductsView } from './views/ProductsView';
import { SolutionsView } from './views/SolutionsView';
import { HeritageView } from './views/HeritageView';
import { NewsView } from './views/NewsView';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [contactProductInterest, setContactProductInterest] = useState('');

  const handleOpenInquire = (productInterest: string = '') => {
    setContactProductInterest(productInterest);
    setIsContactModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0D0B18] text-[#e5e0f3] flex flex-col font-sans selection:bg-[#FF007F]/30 selection:text-[#ffb1c4]">
      
      {/* Top Navbar Component */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenContact={() => handleOpenInquire('Tư vấn tổng thể')}
      />

      {/* Main View Canvas / Page Router */}
      <main className="flex-1 pt-6">
        {activeTab === 'home' && (
          <HomeView
            setActiveTab={setActiveTab}
            onSelectProduct={(product) => setSelectedProduct(product)}
            onSelectArticle={(article) => setSelectedArticle(article)}
            onInquire={(interest) => handleOpenInquire(interest)}
          />
        )}

        {activeTab === 'products' && (
          <ProductsView
            onSelectProduct={(product) => setSelectedProduct(product)}
            onInquire={(interest) => handleOpenInquire(interest)}
          />
        )}

        {activeTab === 'solutions' && (
          <SolutionsView
            onInquire={(interest) => handleOpenInquire(interest)}
          />
        )}

        {activeTab === 'heritage' && (
          <HeritageView
            onInquire={(interest) => handleOpenInquire(interest)}
          />
        )}

        {activeTab === 'news' && (
          <NewsView
            onSelectArticle={(article) => setSelectedArticle(article)}
          />
        )}
      </main>

      {/* Global Footer Component */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenContact={() => handleOpenInquire('Tư vấn tổng thể')}
      />

      {/* Modals & Overlays */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onInquire={(productName) => handleOpenInquire(`Sản phẩm: ${productName}`)}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        initialProductInterest={contactProductInterest}
      />

    </div>
  );
}
