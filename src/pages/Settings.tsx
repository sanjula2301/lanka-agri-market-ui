
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Settings as SettingsIcon, 
  MessageSquare, 
  LogOut, 
  LayoutDashboard, 
  FileText, 
  Heart, 
  Gavel, 
  Star,
  Upload
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

const Settings: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  const [formData, setFormData] = useState({
    firstName: 'Sanjula',
    lastName: 'Hewage',
    email: 'sanjula2301@gmail.com',
    phone: '0769823103',
    hidePhone: false,
    accountType: 'Individual',
    facebook: 'https://www.facebook.com/...',
    twitter: 'https://twitter.com/...',
    youtube: 'https://www.youtube.com/channel/...',
    linkedin: 'https://linkedin.com/in/...',
    instagram: 'https://www.instagram.com/...',
    website: 'Link to your site',
    description: 'Write something about yourself',
    location: 'Anuradhapura',
    preciseLocation: '',
    country: 'Sri Lanka',
    state: 'Western Province',
    city: 'Colombo',
    street: 'Populated on Google place select',
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

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
        { title: 'Settings', url: '/dashboard/settings', icon: SettingsIcon },
        { title: 'Logout', url: '/logout', icon: LogOut }
      ]
    }
  ];

  const isActive = (url: string) => currentPath === url;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData({
      ...formData,
      hidePhone: checked
    });
  };

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
            <div className="text-center">
              <SettingsIcon className="w-6 h-6 mx-auto text-teal-400" />
              <span className="text-xs text-teal-400">Settings</span>
            </div>
            <div className="text-center">
              <MessageSquare className="w-6 h-6 mx-auto text-teal-400" />
              <span className="text-xs text-teal-400">Messages</span>
            </div>
            <div className="text-center">
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
            <div className="flex space-x-6">
              <Link to="/dashboard" className="text-gray-600 hover:text-gray-900">All Ads</Link>
              <Link to="/how-it-works" className="text-gray-600 hover:text-gray-900">How It Works</Link>
              <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact Us</Link>
            </div>
            <Button className="bg-teal-500 hover:bg-teal-600 text-white">
              Submit Ad
            </Button>
          </div>
        </header>

        {/* Settings Content */}
        <main className="p-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Account Details */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Account Details</h2>
                  
                  {/* Avatar Upload */}
                  <div className="mb-6">
                    <Label className="text-sm font-medium text-gray-600 mb-2 block">
                      Select new avatar
                    </Label>
                    <div className="flex items-center space-x-4">
                      <Button variant="outline" className="flex items-center gap-2">
                        <Upload className="w-4 h-4" />
                        Choose File
                      </Button>
                      <span className="text-sm text-gray-500">No file chosen</span>
                    </div>
                  </div>

                  {/* Name Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <Label htmlFor="firstName" className="text-sm font-medium text-gray-600">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-sm font-medium text-gray-600">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="mb-4">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-600">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>

                  {/* Phone */}
                  <div className="mb-4">
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-600">
                      Phone *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                    <div className="flex items-center space-x-2 mt-2">
                      <Checkbox 
                        id="hidePhone"
                        checked={formData.hidePhone}
                        onCheckedChange={handleCheckboxChange}
                      />
                      <Label htmlFor="hidePhone" className="text-sm text-gray-600">
                        Hide phone?
                      </Label>
                    </div>
                  </div>

                  {/* Account Type */}
                  <div className="mb-6">
                    <Label className="text-sm font-medium text-gray-600 mb-2 block">
                      Account Type
                    </Label>
                    <div className="bg-gray-50 p-3 rounded border">
                      <span className="text-gray-700">{formData.accountType}</span>
                    </div>
                  </div>

                  {/* Social Media Links */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <Label htmlFor="facebook" className="text-sm font-medium text-gray-600">Facebook</Label>
                      <Input
                        id="facebook"
                        name="facebook"
                        value={formData.facebook}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="twitter" className="text-sm font-medium text-gray-600">Twitter</Label>
                      <Input
                        id="twitter"
                        name="twitter"
                        value={formData.twitter}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="youtube" className="text-sm font-medium text-gray-600">YouTube</Label>
                      <Input
                        id="youtube"
                        name="youtube"
                        value={formData.youtube}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="linkedin" className="text-sm font-medium text-gray-600">LinkedIn</Label>
                      <Input
                        id="linkedin"
                        name="linkedin"
                        value={formData.linkedin}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="instagram" className="text-sm font-medium text-gray-600">Instagram</Label>
                      <Input
                        id="instagram"
                        name="instagram"
                        value={formData.instagram}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="website" className="text-sm font-medium text-gray-600">Website</Label>
                      <Input
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <Label htmlFor="description" className="text-sm font-medium text-gray-600">Description</Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      className="mt-1 h-32"
                    />
                  </div>

                  {/* Location */}
                  <div className="mb-4">
                    <Label htmlFor="location" className="text-sm font-medium text-gray-600">Location *</Label>
                    <Input
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>

                  <div className="mb-6">
                    <Label htmlFor="preciseLocation" className="text-sm font-medium text-gray-600">Precise Location *</Label>
                    <Input
                      id="preciseLocation"
                      name="preciseLocation"
                      value={formData.preciseLocation}
                      onChange={handleInputChange}
                      placeholder="Start typing..."
                      className="mt-1"
                    />
                  </div>

                  {/* Map Placeholder */}
                  <div className="mb-6">
                    <div className="bg-gray-200 h-48 rounded border flex items-center justify-center">
                      <span className="text-gray-500">Map View (Google Maps Integration)</span>
                    </div>
                  </div>

                  {/* Address Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <Label htmlFor="country" className="text-sm font-medium text-gray-600">Country</Label>
                      <Input
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="state" className="text-sm font-medium text-gray-600">State</Label>
                      <Input
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="city" className="text-sm font-medium text-gray-600">City</Label>
                      <Input
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="street" className="text-sm font-medium text-gray-600">Street</Label>
                      <Input
                        id="street"
                        name="street"
                        value={formData.street}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <Button className="bg-teal-500 hover:bg-teal-600 text-white">
                    UPDATE ACCOUNT
                  </Button>
                </div>
              </div>

              {/* Change Password */}
              <div>
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Change Password</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="oldPassword" className="text-sm font-medium text-gray-600">
                        Old Password *
                      </Label>
                      <Input
                        id="oldPassword"
                        name="oldPassword"
                        type="password"
                        value={formData.oldPassword}
                        onChange={handleInputChange}
                        placeholder="Your current password"
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="newPassword" className="text-sm font-medium text-gray-600">
                        New Password *
                      </Label>
                      <Input
                        id="newPassword"
                        name="newPassword"
                        type="password"
                        value={formData.newPassword}
                        onChange={handleInputChange}
                        placeholder="Your desired new password"
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-600">
                        Confirm New Password *
                      </Label>
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        placeholder="Your desired new password"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <Button className="w-full mt-6 bg-teal-500 hover:bg-teal-600 text-white">
                    CHANGE PASSWORD
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Settings;
