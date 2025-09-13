
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import SubmitAd from "./pages/SubmitAd";
import Auction from "./pages/Auction";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/category/vegetables" element={<Products />} />
          <Route path="/category/fruits" element={<Products />} />
          <Route path="/category/grains" element={<Products />} />
          <Route path="/category/spices" element={<Products />} />
          <Route path="/category/legumes" element={<Products />} />
          <Route path="/farmers" element={<Products />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/settings" element={<Settings />} />
          <Route path="/submit-ad" element={<SubmitAd />} />
          <Route path="/dashboard/your-ads" element={<Dashboard />} />
          <Route path="/dashboard/favorites" element={<Dashboard />} />
          <Route path="/dashboard/auctions" element={<Dashboard />} />
          <Route path="/dashboard/reviews" element={<Dashboard />} />
          <Route path="/dashboard/messages" element={<Dashboard />} />
          <Route path="/auction" element={<Auction />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
