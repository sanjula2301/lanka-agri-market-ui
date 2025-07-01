
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CategorySection from '@/components/CategorySection';
import FeaturedProducts from '@/components/FeaturedProducts';
import FarmerSpotlight from '@/components/FarmerSpotlight';
import Testimonials from '@/components/Testimonials';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';
import ProductDescription from '@/components/ProductDescription';

const Index = () => {
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  const handleProductClick = (id: number) => {
    setSelectedProductId(id.toString());
  };

  const handleBackToHome = () => {
    setSelectedProductId(null);
  };

  if (selectedProductId) {
    return <ProductDescription productId={selectedProductId} onBack={handleBackToHome} />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <CategorySection />
        <FeaturedProducts onProductClick={handleProductClick} />
        <FarmerSpotlight />
        <Testimonials />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
