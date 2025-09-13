
import React from 'react';
import { Heart, Share2, Weight, Package, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from './Navbar';
import Footer from './Footer';
import ProductImageGallery from './ProductImageGallery';
import OwnerDetails from './OwnerDetails';
import ProductMap from './ProductMap';
import CommentSection from './CommentSection';

interface ProductDescriptionProps {
  product?: any;
  productId?: string;
  onBack: () => void;
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({ product, productId, onBack }) => {
  // Use passed product data or fallback to mock data
  const productData = product || {
    id: productId || '1',
    name: 'Fresh Organic Tomatoes',
    price: 'Rs. 120.00',
    pricePerKg: 'per kg',
    location: 'Kandy, Central Province',
    farmer: 'Sunil Perera',
    category: 'Vegetables',
    images: [
      'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=600&fit=crop'
    ],
    description: 'Premium quality organic produce grown using traditional organic farming methods without any chemical pesticides or fertilizers. Perfect for cooking, salads, and fresh consumption. Rich in vitamins and nutrients.',
    details: {
      availableAmount: '50 kg',
      weight: '1 kg per pack',
      harvestDate: '2024-06-25',
      category: product?.category || 'Vegetables',
      organic: true,
      variety: product?.name || 'Fresh Produce'
    },
    owner: {
      name: product?.farmer || 'Sunil Perera',
      phone: '+94 77 123 4567',
      rating: 4,
      totalReviews: 23,
      location: product?.location || 'Kandy, Sri Lanka',
      memberSince: '2022',
      avatar: ''
    }
  };

  // Convert product data to expected format
  const formattedProduct = {
    id: productData.id.toString(),
    name: productData.name,
    price: product?.price || productData.price,
    pricePerKg: productData.pricePerKg,
    location: productData.location,
    images: productData.images || [product?.image || '/placeholder.svg'],
    description: productData.description,
    details: productData.details,
    owner: productData.owner
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Product Images and Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Product Images */}
              <Card className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <ProductImageGallery images={formattedProduct.images} productName={formattedProduct.name} />
                </CardContent>
              </Card>

              {/* Product Info */}
              <Card className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900 mb-2">{formattedProduct.name}</h1>
                      <div className="flex items-center space-x-2 mb-3">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600">{formattedProduct.location}</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="icon">
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-baseline space-x-2 mb-6">
                    <span className="text-4xl font-bold text-green-600">{formattedProduct.price}</span>
                    <span className="text-xl text-gray-500">{formattedProduct.pricePerKg}</span>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {formattedProduct.details.organic && (
                      <Badge className="bg-green-100 text-green-800">Organic</Badge>
                    )}
                    <Badge variant="outline">{formattedProduct.details.category}</Badge>
                    <Badge variant="outline">{formattedProduct.details.variety}</Badge>
                  </div>

                  {/* Product Details Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Package className="w-5 h-5 text-green-600" />
                        <span className="font-semibold">Available</span>
                      </div>
                      <p className="text-gray-700">{formattedProduct.details.availableAmount}</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Weight className="w-5 h-5 text-green-600" />
                        <span className="font-semibold">Weight</span>
                      </div>
                      <p className="text-gray-700">{formattedProduct.details.weight}</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Calendar className="w-5 h-5 text-green-600" />
                        <span className="font-semibold">Harvested</span>
                      </div>
                      <p className="text-gray-700">{formattedProduct.details.harvestDate}</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-4 mb-6">
                    <div className="flex gap-3">
                      <Button size="lg" className="flex-1 bg-green-600 hover:bg-green-700">
                        Add to Cart
                      </Button>
                      <Button variant="outline" size="lg" className="flex-1 border-orange-500 text-orange-600 hover:bg-orange-50">
                        Start Auction
                      </Button>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Product Description</h3>
                    <p className="text-gray-700 leading-relaxed">{formattedProduct.description}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Comments Section */}
              <CommentSection productId={formattedProduct.id} />
            </div>

            {/* Right Column - Owner Details and Map */}
            <div className="space-y-6">
              <OwnerDetails owner={formattedProduct.owner} />
              <ProductMap location={formattedProduct.location} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDescription;
