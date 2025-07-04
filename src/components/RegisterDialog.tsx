
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from 'lucide-react';

interface RegisterDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
}

const RegisterDialog: React.FC<RegisterDialogProps> = ({ isOpen, onClose, onSwitchToLogin }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    repeatPassword: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Registration attempt:', formData);
    
    // Simulate successful registration with dummy data
    if (formData.username && formData.email && formData.password && formData.repeatPassword) {
      if (formData.password === formData.repeatPassword) {
        onClose();
        navigate('/dashboard');
      }
    }
  };

  const handleGoogleRegister = () => {
    // Handle Google registration
    console.log('Google registration');
    onClose();
    navigate('/dashboard');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-left">Register</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleRegister} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="username" className="text-sm font-medium text-gray-600">
                Username *
              </Label>
              <Input
                id="username"
                name="username"
                type="text"
                placeholder="Your desired username"
                value={formData.username}
                onChange={handleInputChange}
                className="mt-1"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="email" className="text-sm font-medium text-gray-600">
                Email *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="It will be verified"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="password" className="text-sm font-medium text-gray-600">
                Password *
              </Label>
              <div className="relative mt-1">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Use a strong password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
            
            <div>
              <Label htmlFor="repeatPassword" className="text-sm font-medium text-gray-600">
                Repeat Password *
              </Label>
              <div className="relative mt-1">
                <Input
                  id="repeatPassword"
                  name="repeatPassword"
                  type={showRepeatPassword ? "text" : "password"}
                  placeholder="To make sure that it is correct"
                  value={formData.repeatPassword}
                  onChange={handleInputChange}
                  className="pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowRepeatPassword(!showRepeatPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showRepeatPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 text-lg font-medium"
          >
            REGISTER
          </Button>
        </form>

        <div className="text-center">
          <button className="text-sm text-gray-500 hover:text-gray-700">
            Resend verification?
          </button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-teal-500 font-medium">OR</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-center text-sm text-gray-600">
            Sign In With
          </div>
          
          <Button
            type="button"
            variant="outline"
            onClick={handleGoogleRegister}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white border-blue-500 py-3"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Google
          </Button>
        </div>

        <div className="text-center text-sm text-gray-600">
          Already have an account?{' '}
          <button
            onClick={onSwitchToLogin}
            className="text-teal-500 hover:text-teal-600 font-medium"
          >
            Login here.
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterDialog;
