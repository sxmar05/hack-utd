'use client'

import { Link } from 'react-router-dom';
import logo from '../frontier_logo.png';
import profileimg from '../profileimg.svg';


import { Apple, ArrowRight, ShoppingCart } from 'lucide-react'

function Card({ children, className = "", ...props }) {
    return (
      <div
        className={`p-4 border rounded-lg shadow-sm bg-white ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
  

function Input({ type = "text", className, ...props }) {
    return (
      <input
        type={type}
        className={`border rounded-lg px-3 py-2 w-full ${className}`}
        {...props}
      />
    );
  }

function Button({ children, className, ...props }) {
    return (
      <button className={`py-2 px-4 rounded-lg ${className}`} {...props}>
        {children}
      </button>
    );
  }

  function LoginButton() {
    return (
      <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
        <Link to="/login" className="text-white">Log In</Link>
      </button>
    );
}

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-header-blue p-4">
        <nav className="flex items-center justify-between container mx-auto">
          <div className="flex items-center space-x-3">
            <Link to='/'>
            <img src={logo} className="w-16 h-16" alt="logo" />
            </Link>
            <p className="text-2xl font-bold text-white">Frontier Product Services</p>
            
          </div>
          <div className="flex items-center space-x-6">
            <LoginButton />
            <img src={profileimg} className="h-12 w-12 rounded-full" alt="profileimg" />
          </div>
        </nav>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Bandwidth Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-gray-600 mb-2">Based on your devices</h2>
              <h1 className="text-2xl font-bold mb-4">
                Your approximate bandwidth is{" "}
                <span className="text-[#E31837]">9999 mbps</span>
              </h1>
              <p className="text-gray-600 mb-6">
                We Recommend the following products to get the fastest, and most efficient
                internet possible
              </p>
              
              {/* Featured Product Card */}
              <Card className="bg-[#E31837] text-white p-6 rounded-xl mb-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">Frontier Fiber 1 gig</h3>
                  <span className="bg-white/20 px-2 py-1 rounded-full text-sm">
                    Recommended
                  </span>
                </div>
                <p className="mb-4">
                  1000mbps of high speed data, perfect for all of your office & streaming needs. 
                  Includes one standard WIFI router.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">$65.00/mo</span>
                  <Button className="bg-white text-[#E31837] hover:bg-white/90">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </Card>

              {/* Additional Product Cards */}
              <div className="grid md:grid-cols-2 gap-4">
                {[1, 2].map((i) => (
                  <Card key={i} className="p-4 border">
                    <h3 className="font-bold mb-2">Frontier Fiber 1 gig</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      1000mbps of high speed data, perfect for all of your office & streaming needs. 
                      Includes one standard WIFI router.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold">$65.00/mo</span>
                      <Button size="sm" variant="outline" className="text-[#E31837]">
                        Add to Cart
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="flex justify-between mt-6">
                <Button variant="ghost">Skip</Button>
                <Button className="bg-[#E31837] hover:bg-[#c41530]">
                  Finish & Save
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Sign Up Form */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold mb-2">
                <span className="text-[#E31837]">Sign up</span> to save your
              </h2>
              <p className="text-gray-600">Preferences</p>
            </div>

            <form className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input type="email" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <Input type="password" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm Password
                  </label>
                  <Input type="password" className="w-full" />
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">or</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="w-full">
                  <Apple className="w-5 h-5 mr-2" />
                  Apple
                </Button>
                <Button variant="outline" className="w-full">
                  <svg
                    className="w-5 h-5 mr-2"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  Google
                </Button>
              </div>

              <div className="flex items-center justify-between">
                <Button variant="link" className="text-gray-600" asChild>
                  <Link href="/login">Login instead</Link>
                </Button>
                <Button className="bg-[#E31837] hover:bg-[#c41530]">
                  Sign Up
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}