
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

interface ProductMapProps {
  location: string;
}

const ProductMap: React.FC<ProductMapProps> = ({ location }) => {
  return (
    <Card className="bg-white shadow-lg">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Location</h3>
        
        <div className="flex items-center space-x-2 mb-4">
          <MapPin className="w-5 h-5 text-green-600" />
          <span className="text-gray-700">{location}</span>
        </div>
        
        {/* Placeholder for map - in a real app, you'd integrate with Google Maps or similar */}
        <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
          <div className="text-center text-gray-500">
            <MapPin className="w-8 h-8 mx-auto mb-2" />
            <p className="text-sm">Interactive Map</p>
            <p className="text-xs">{location}</p>
          </div>
        </div>
        
        <div className="mt-4 text-sm text-gray-600">
          <p>📍 Exact location shared after purchase confirmation</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductMap;
