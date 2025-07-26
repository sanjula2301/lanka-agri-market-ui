import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ArrowLeft, 
  Upload, 
  Plus,
  Settings, 
  MessageSquare, 
  LogOut, 
  LayoutDashboard, 
  FileText, 
  Heart, 
  Gavel, 
  Star 
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

const SubmitAd: React.FC = () => {
  const [isNegotiable, setIsNegotiable] = useState(false);
  const [useProfileAddress, setUseProfileAddress] = useState(true);
  const [useProfileContact, setUseProfileContact] = useState(true);
  const location = useLocation();
  const currentPath = location.pathname;

  const sidebarItems = [
    { 
      category: 'MAIN',
      items: [
        { title: 'Dashboard', url: '/dashboard', icon: LayoutDashboard }
      ]
    },
    {
      category: 'ADS',
      items: [
        { title: 'Your Ads', url: '/dashboard/your-ads', icon: FileText },
        { title: 'Favorite Ads', url: '/dashboard/favorites', icon: Heart },
        { title: 'Auctions', url: '/dashboard/auctions', icon: Gavel }
      ]
    },
    {
      category: 'FEEDBACK',
      items: [
        { title: 'Reviews', url: '/dashboard/reviews', icon: Star }
      ]
    },
    {
      category: 'TRANSACTIONS',
      items: [
        { title: 'Messages', url: '/dashboard/messages', icon: MessageSquare },
        { title: 'Settings', url: '/dashboard/settings', icon: Settings },
        { title: 'Logout', url: '/logout', icon: LogOut }
      ]
    }
  ];

  const isActive = (url: string) => currentPath === url;

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white">
        {/* User Profile Section */}
        <div className="p-6 border-b border-gray-700">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-2">
              S
            </div>
            <h3 className="font-semibold text-lg">Sanjula Hewage</h3>
            <p className="text-gray-400 text-sm">View Profile</p>
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <Link to="/dashboard/settings" className="text-center">
              <Settings className="w-6 h-6 mx-auto text-teal-400" />
              <span className="text-xs text-teal-400">Settings</span>
            </Link>
            <Link to="/dashboard/messages" className="text-center">
              <MessageSquare className="w-6 h-6 mx-auto text-teal-400" />
              <span className="text-xs text-teal-400">Messages</span>
            </Link>
            <div className="text-center cursor-pointer">
              <LogOut className="w-6 h-6 mx-auto text-teal-400" />
              <span className="text-xs text-teal-400">Logout</span>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="p-4">
          {sidebarItems.map((category) => (
            <div key={category.category} className="mb-6">
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                {category.category}
              </h4>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item.title}>
                    <Link
                      to={item.url}
                      className={`flex items-center px-3 py-2 rounded-lg text-sm transition-colors ${
                        isActive(item.url)
                          ? 'bg-teal-600 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                      }`}
                    >
                      <item.icon className="w-5 h-5 mr-3" />
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Top Header */}
        <header className="bg-white shadow-sm border-b px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <Link to="/dashboard" className="flex items-center text-gray-600 hover:text-gray-900">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Link>
              <Link to="/dashboard" className="text-gray-600 hover:text-gray-900">All Ads</Link>
              <Link to="/how-it-works" className="text-gray-600 hover:text-gray-900">How It Works</Link>
              <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact Us</Link>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">Howdy, Sanjula Hewage</span>
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                S
              </div>
            </div>
          </div>
        </header>

      <div className="p-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Ad Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Ad Details Section */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Ad Details</h2>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Title *</Label>
                  <Input 
                    id="title"
                    placeholder="Precise title is always better"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="adType">Ad Type</Label>
                  <Select defaultValue="sell">
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sell">Sell (Expires in 365 days)</SelectItem>
                      <SelectItem value="buy">Buy</SelectItem>
                      <SelectItem value="rent">Rent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="price">Price</Label>
                    <Input 
                      id="price"
                      placeholder="0.00"
                      type="number"
                      className="mt-1"
                    />
                  </div>
                  <div className="flex items-center space-x-2 pt-6">
                    <Checkbox 
                      id="negotiable"
                      checked={isNegotiable}
                      onCheckedChange={(checked) => setIsNegotiable(checked === true)}
                    />
                    <Label htmlFor="negotiable" className="text-sm">Is negotiable?</Label>
                  </div>
                  <div>
                    <Label htmlFor="salePrice">Sale Price</Label>
                    <Input 
                      id="salePrice"
                      placeholder="0.00"
                      type="number"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="currency">Currency</Label>
                  <Input 
                    id="currency"
                    placeholder="0"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="condition">Condition</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="- Select -" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">New</SelectItem>
                      <SelectItem value="like-new">Like New</SelectItem>
                      <SelectItem value="good">Good</SelectItem>
                      <SelectItem value="fair">Fair</SelectItem>
                      <SelectItem value="poor">Poor</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Images Section */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Images</h3>
              
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
                <Upload className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                <p className="text-lg text-gray-600 mb-2">Drag & Drop files here</p>
                <p className="text-gray-500 mb-4">or</p>
                <Button variant="outline" className="bg-teal-500 text-white border-teal-500 hover:bg-teal-600">
                  BROWSE FILES
                </Button>
                <p className="text-sm text-gray-500 mt-4">
                  Max number of images is 5. Max image size is 1.5MB.
                </p>
              </div>
            </div>

            {/* Videos Section */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Videos (2 max)</h3>
              
              <div className="space-y-4">
                <Input 
                  placeholder="Link to YouTube or Vimeo video"
                  className="w-full"
                />
                <Button variant="outline" className="w-full">
                  <Plus className="w-4 h-4 mr-2" />
                  ADD VIDEO
                </Button>
              </div>
            </div>

            {/* Description Section */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Description (min 10 chars) *</h3>
              
              <div className="border rounded-lg">
                <div className="border-b p-3 bg-gray-50">
                  <div className="flex items-center space-x-2">
                    <Select defaultValue="paragraph">
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="paragraph">Paragraph</SelectItem>
                        <SelectItem value="heading1">Heading 1</SelectItem>
                        <SelectItem value="heading2">Heading 2</SelectItem>
                      </SelectContent>
                    </Select>
                    <div className="flex space-x-1">
                      <Button variant="ghost" size="sm" className="p-1 h-8 w-8">
                        <strong>B</strong>
                      </Button>
                      <Button variant="ghost" size="sm" className="p-1 h-8 w-8">
                        <em>I</em>
                      </Button>
                    </div>
                  </div>
                </div>
                <Textarea 
                  className="border-0 min-h-[200px] resize-none"
                  placeholder="Enter your ad description here..."
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Ad Category */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Ad Category</h3>
              
              <div>
                <Label htmlFor="category">Category *</Label>
                <Select>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="- Select -" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="vegetables">Vegetables</SelectItem>
                    <SelectItem value="fruits">Fruits</SelectItem>
                    <SelectItem value="grains">Grains</SelectItem>
                    <SelectItem value="dairy">Dairy</SelectItem>
                    <SelectItem value="meat">Meat</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Ad Location & Contact */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Ad Location & Contact</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="useAddress"
                    checked={useProfileAddress}
                    onCheckedChange={(checked) => setUseProfileAddress(checked === true)}
                  />
                  <Label htmlFor="useAddress" className="text-sm">
                    Use address set in profile section
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="useContact"
                    checked={useProfileContact}
                    onCheckedChange={(checked) => setUseProfileContact(checked === true)}
                  />
                  <Label htmlFor="useContact" className="text-sm">
                    Use contact set in profile section
                  </Label>
                </div>
              </div>
            </div>

            {/* Save Button */}
            <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3">
              SAVE AD
            </Button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitAd;