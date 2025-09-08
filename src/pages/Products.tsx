import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductDescription from '@/components/ProductDescription';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter } from 'lucide-react';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  // Sample product data - in a real app, this would come from an API
  const products = [
    {
      id: 1,
      name: "Organic Red Rice",
      price: "LKR 450/kg",
      farmer: "Kumara Silva",
      location: "Anuradhapura",
      image: "/placeholder.svg",
      category: "Grains"
    },
    {
      id: 2,
      name: "Fresh Coconuts",
      price: "LKR 80/piece",
      farmer: "Nimal Perera",
      location: "Gampaha",
      image: "/placeholder.svg",
      category: "Fruits"
    },
    {
      id: 3,
      name: "Ceylon Cinnamon",
      price: "LKR 2,500/kg",
      farmer: "Saman Rathnayake",
      location: "Matale",
      image: "/placeholder.svg",
      category: "Spices"
    },
    {
      id: 4,
      name: "Organic Vegetables Mix",
      price: "LKR 300/kg",
      farmer: "Kamala Fernando",
      location: "Nuwara Eliya",
      image: "/placeholder.svg",
      category: "Vegetables"
    },
    {
      id: 5,
      name: "King Coconut Water",
      price: "LKR 120/bottle",
      farmer: "Ranjith Wickrama",
      location: "Colombo",
      image: "/placeholder.svg",
      category: "Beverages"
    },
    {
      id: 6,
      name: "Jackfruit",
      price: "LKR 200/kg",
      farmer: "Lalith Gunawardana",
      location: "Kurunegala",
      image: "/placeholder.svg",
      category: "Fruits"
    }
  ];

  const handleProductClick = (product: any) => {
    // Update URL with product name
    const productSlug = product.name.toLowerCase().replace(/\s+/g, '-');
    window.history.pushState({}, '', `/products/${productSlug}`);
    setSelectedProduct(product);
  };

  const handleBackToProducts = () => {
    window.history.pushState({}, '', '/products');
    setSelectedProduct(null);
  };

  if (selectedProduct) {
    return <ProductDescription product={selectedProduct} onBack={handleBackToProducts} />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-lanka-green text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Fresh Products from Sri Lankan Farms
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                Discover authentic, locally-grown produce directly from our trusted farmers
              </p>
            </div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white py-8 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-grow max-w-md">
                <Input 
                  type="text" 
                  placeholder="Search products..." 
                  className="pl-10 pr-4 py-2 w-full border rounded-full"
                />
                <Search className="absolute left-3 top-[9px] text-gray-400" size={20} />
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter size={18} />
                Filter
              </Button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div 
                  key={product.id} 
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => handleProductClick(product)}
                >
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-lanka-spice font-medium">{product.category}</span>
                      <span className="text-lg font-bold text-lanka-green">{product.price}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-1">By {product.farmer}</p>
                    <p className="text-gray-500 text-sm mb-4">{product.location}</p>
                    <Button 
                      className="w-full bg-lanka-green hover:bg-lanka-green/90"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Handle add to cart
                      }}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;