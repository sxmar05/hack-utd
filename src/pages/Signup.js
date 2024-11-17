'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Apple, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="flex items-center justify-between p-4 bg-white border-b">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-[#E31837] text-white px-3 py-1 rounded-md font-bold">
            Frontier
          </div>
        </Link>
        <div className="flex items-center gap-2">
          <Button variant="ghost" asChild>
            <Link href="/login">Login / Signup</Link>
          </Button>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-sm p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold mb-2">
              <span className="text-[#E31837]">Sign up</span> to save your
            </h1>
            <p className="text-xl text-gray-600">
              Preferences and get{" "}
              <span className="text-[#E31837]">Personalized Content</span>
            </p>
          </div>
          <form className="space-y-6">
            <div className="space-y-4">
              <Input
                className="w-full p-3 border rounded-lg"
                placeholder="Field"
                type="text"
              />
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <Input
                  className="w-full p-3 border rounded-lg"
                  type="password"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <Input
                  className="w-full p-3 border rounded-lg"
                  type="password"
                />
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
              <Button
                className="w-full bg-white hover:bg-gray-50 text-gray-900 border"
                variant="outline"
              >
                <Apple className="w-5 h-5 mr-2" />
                Apple
              </Button>
              <Button
                className="w-full bg-white hover:bg-gray-50 text-gray-900 border"
                variant="outline"
              >
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
            <div className="flex items-center justify-between mt-6">
              <Button variant="link" className="text-sm text-gray-600" asChild>
                <Link href="/login">Login instead</Link>
              </Button>
              <Button className="bg-[#E31837] hover:bg-[#c41530]">
                Sign Up
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}