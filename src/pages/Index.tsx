
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CategorySection from '@/components/CategorySection';
import FeaturedProducts from '@/components/FeaturedProducts';
import FarmerSpotlight from '@/components/FarmerSpotlight';
import Testimonials from '@/components/Testimonials';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <CategorySection />
        <FeaturedProducts />
        <FarmerSpotlight />
        <Testimonials />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
