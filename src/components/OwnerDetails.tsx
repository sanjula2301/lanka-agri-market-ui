
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { MapPin } from 'lucide-react';

interface Owner {
  name: string;
  phone: string;
  rating: number;
  totalReviews: number;
  location: string;
  memberSince: string;
  avatar: string;
}

interface OwnerDetailsProps {
  owner: Owner;
}

const OwnerDetails: React.FC<OwnerDetailsProps> = ({ owner }) => {
  return (
    <Card className="bg-white shadow-lg">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Seller Details</h3>
        
        <div className="flex items-center space-x-4 mb-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src={owner.avatar} alt={owner.name} />
            <AvatarFallback className="bg-green-100 text-green-600 text-lg font-semibold">
              {owner.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-900">{owner.name}</h4>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>{owner.location}</span>
            </div>
            <p className="text-sm text-gray-500">Member since {owner.memberSince}</p>
          </div>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < owner.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                  }`}
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-gray-600">
              {owner.rating}.0 ({owner.totalReviews} reviews)
            </span>
          </div>
          <Badge variant="outline" className="text-green-600 border-green-600">
            Verified Seller
          </Badge>
        </div>
        
        <div className="space-y-2">
          <Button className="w-full bg-green-600 hover:bg-green-700">
            Contact Seller
          </Button>
          <Button variant="outline" className="w-full">
            View Profile
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default OwnerDetails;
