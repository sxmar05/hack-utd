'use client'

import { Apple, ArrowRight } from "lucide-react"
import { Link } from 'react-router-dom';
import logo from '../frontier_logo.png';
import profileimg from '../profileimg.svg';

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
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* Header */}
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

      {/* Login Form */}
      <main className="container mx-auto px-4 mt-8">
        <div className="max-w-md mx-auto bg-white rounded-2xl p-8 shadow-sm">
          <h1 className="text-2xl font-bold text-red-500 mb-8">Login to your account</h1>
          
          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
  id="email"
  type="email"
  required
  className="block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
/>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
  id="password"
  type="password"
  required
  className="block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
/>
            </div>

            <div className="relative flex items-center justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">or</span>
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
            </div>

            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-center gap-2">
                <Apple className="h-5 w-5" />
                Continue with Apple
              </Button>
              <Button variant="outline" className="w-full justify-center gap-2">
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Continue with Google
              </Button>
            </div>

            <div className="flex items-center justify-between">
              <Link href="/forgot-password" className="text-sm text-gray-600 hover:text-gray-900">
                Forgot Password?
              </Link>
              <div className="space-x-3">
                <Link to="/signup" className="text-sm text-gray-600 hover:text-gray-900">
                  Sign Up
                </Link>
                <Button className="bg-red-500 hover:bg-red-600">
                  Login
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-gray-600">
            <Link href="/privacy" className="hover:text-gray-900">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-900">Terms & Conditions</Link>
            <Link href="/accessibility" className="hover:text-gray-900">Accessibility</Link>
            <Link href="/california-privacy" className="hover:text-gray-900">California Privacy Policy</Link>
            <Link href="/privacy-policy" className="hover:text-gray-900">CT, TX Privacy Policy</Link>
            <Link href="/do-not-sell" className="hover:text-gray-900">Do Not Sell or Share My Personal Information</Link>
            <Link href="/contact" className="hover:text-gray-900">Contact Us</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}