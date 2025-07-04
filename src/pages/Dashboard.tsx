
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
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

const Dashboard: React.FC = () => {
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

        {/* Dashboard Content */}
        <main className="p-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Your Ads</h3>
                <p className="text-3xl font-bold text-teal-600">12</p>
                <p className="text-gray-600 text-sm">Active listings</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Messages</h3>
                <p className="text-3xl font-bold text-blue-600">5</p>
                <p className="text-gray-600 text-sm">Unread messages</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Reviews</h3>
                <p className="text-3xl font-bold text-yellow-600">4.8</p>
                <p className="text-gray-600 text-sm">Average rating</p>
              </div>
            </div>

            <div className="mt-8 bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b">
                  <div>
                    <p className="font-medium text-gray-900">New message received</p>
                    <p className="text-sm text-gray-600">From buyer interested in your tomatoes</p>
                  </div>
                  <span className="text-sm text-gray-500">2 hours ago</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b">
                  <div>
                    <p className="font-medium text-gray-900">Ad approved</p>
                    <p className="text-sm text-gray-600">Your coconut listing is now live</p>
                  </div>
                  <span className="text-sm text-gray-500">1 day ago</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <div>
                    <p className="font-medium text-gray-900">Review received</p>
                    <p className="text-sm text-gray-600">5-star review for your rice quality</p>
                  </div>
                  <span className="text-sm text-gray-500">3 days ago</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
