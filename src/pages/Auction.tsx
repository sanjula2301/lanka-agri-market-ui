import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowLeft, Clock, Users, Gavel, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Auction = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const productId = searchParams.get('productId');
  const productName = searchParams.get('productName') || 'Product';
  
  const [bidAmount, setBidAmount] = useState('');
  const [timeLeft, setTimeLeft] = useState('2d 14h 32m');

  // Mock auction data - in real app, this would come from API
  const auctionData = {
    currentBid: 1250,
    startingBid: 800,
    totalBids: 27,
    participants: 12,
    endTime: '2024-12-20T18:00:00Z',
    seller: 'Kumara Silva',
    location: 'Anuradhapura'
  };

  const recentBids = [
    { bidder: 'User***23', amount: 1250, time: '2 min ago' },
    { bidder: 'Farm***89', amount: 1200, time: '5 min ago' },
    { bidder: 'Buyer***45', amount: 1180, time: '8 min ago' },
    { bidder: 'User***67', amount: 1150, time: '12 min ago' },
    { bidder: 'Trade***12', amount: 1100, time: '15 min ago' }
  ];

  const handlePlaceBid = () => {
    if (!bidAmount || parseFloat(bidAmount) <= auctionData.currentBid) {
      alert('Bid must be higher than current bid');
      return;
    }
    // Handle bid placement logic here
    alert(`Bid of LKR ${bidAmount} placed successfully!`);
    setBidAmount('');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow bg-muted/30">
        {/* Header */}
        <div className="bg-gradient-to-r from-background to-muted border-b">
          <div className="container mx-auto px-4 py-6">
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              className="mb-4"
              size="sm"
            >
              <ArrowLeft size={16} className="mr-2" /> Back
            </Button>
            
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-foreground">
                  Auction: {productName}
                </h1>
                <p className="text-muted-foreground mt-1">
                  Seller: {auctionData.seller} • {auctionData.location}
                </p>
              </div>
              
              <div className="text-right">
                <div className="flex items-center gap-2 text-lg font-semibold text-destructive">
                  <Clock size={20} />
                  {timeLeft}
                </div>
                <p className="text-sm text-muted-foreground">Time remaining</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Auction Panel */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Current Bid Section */}
              <Card className="shadow-medium border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Gavel className="w-6 h-6 text-primary" />
                    Current Auction Status
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-primary/10 rounded-lg">
                      <div className="text-2xl font-bold text-primary">
                        LKR {auctionData.currentBid.toLocaleString()}
                      </div>
                      <div className="text-sm text-muted-foreground">Current Bid</div>
                    </div>
                    
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <div className="text-xl font-semibold">
                        LKR {auctionData.startingBid.toLocaleString()}
                      </div>
                      <div className="text-sm text-muted-foreground">Starting Bid</div>
                    </div>
                    
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <div className="text-xl font-semibold flex items-center justify-center gap-1">
                        <Users size={16} />
                        {auctionData.participants}
                      </div>
                      <div className="text-sm text-muted-foreground">Participants</div>
                    </div>
                    
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <div className="text-xl font-semibold">
                        {auctionData.totalBids}
                      </div>
                      <div className="text-sm text-muted-foreground">Total Bids</div>
                    </div>
                  </div>

                  {/* Place Bid */}
                  <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">Place Your Bid</h3>
                    <div className="flex gap-3">
                      <div className="flex-1">
                        <Input
                          type="number"
                          placeholder={`Minimum: LKR ${auctionData.currentBid + 50}`}
                          value={bidAmount}
                          onChange={(e) => setBidAmount(e.target.value)}
                          className="text-lg"
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                          Minimum bid increment: LKR 50
                        </p>
                      </div>
                      <Button 
                        size="lg" 
                        onClick={handlePlaceBid}
                        className="px-8"
                      >
                        <Gavel size={18} className="mr-2" />
                        Place Bid
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Auction Rules */}
              <Card className="shadow-medium border-0">
                <CardHeader>
                  <CardTitle>Auction Rules & Guidelines</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p>All bids are binding and cannot be retracted once placed</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p>Minimum bid increment is LKR 50</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p>Winner must complete payment within 24 hours</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p>Pickup/delivery arrangements will be made after payment</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Bid History Sidebar */}
            <div className="space-y-6">
              
              {/* Bid History */}
              <Card className="shadow-medium border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    Recent Bids
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {recentBids.map((bid, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <div>
                        <div className="font-medium text-sm">{bid.bidder}</div>
                        <div className="text-xs text-muted-foreground">{bid.time}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-primary">
                          LKR {bid.amount.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="shadow-medium border-0">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    Watch this Auction
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Contact Seller
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Report Issue
                  </Button>
                </CardContent>
              </Card>

              {/* Auction Status */}
              <Card className="shadow-medium border-0 bg-gradient-to-br from-primary/5 to-primary/10">
                <CardContent className="p-6 text-center">
                  <Badge className="mb-3">
                    🔥 Active Auction
                  </Badge>
                  <h3 className="font-semibold mb-2">Don't miss out!</h3>
                  <p className="text-sm text-muted-foreground">
                    This auction is ending soon. Place your bid now to secure this premium product.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Auction;