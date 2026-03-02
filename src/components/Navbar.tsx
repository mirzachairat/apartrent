// components/Header.tsx
"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { Button } from '@/components/ui/Button'
import { MegaphoneIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <header className={`bg-white fixed top-0 w-full z-50 transition-shadow duration-300 ${
      scrolled ? 'shadow-md' : 'shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0" onClick={handleLinkClick}>
            <Image 
              src={'/images/logoproperti.png'} 
              alt={'Logo'} 
              width={100} 
              height={100}
              className="h-8 w-auto sm:h-10 md:h-12"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors text-sm lg:text-base">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors text-sm lg:text-base">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors text-sm lg:text-base">
              Services
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors text-sm lg:text-base">
              Contact
            </Link>
          </nav>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            <Link href="/iklan">
              <Button variant="outline" color="blue" className="whitespace-nowrap text-sm lg:text-base px-2 lg:px-3">
                <MegaphoneIcon className="h-4 w-4 lg:h-5 lg:w-5 text-orange-500 mr-1" />
                <span className="hidden sm:inline">Pasang Iklan</span>
                <span className="sm:hidden">Iklan</span>
              </Button>
            </Link>
            
            <Link href="/login">
              <button className="bg-blue-600 text-white px-3 lg:px-4 py-1.5 lg:py-2 rounded hover:bg-blue-700 transition text-sm lg:text-base whitespace-nowrap">
                Login
              </button>
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden p-2 rounded hover:bg-gray-100 transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <>
            <div className="md:hidden absolute left-0 right-0 top-16 bg-white border-b shadow-lg z-50">
              <div className="px-4 py-3 space-y-2">
                {/* Mobile Navigation Links */}
                <nav className="flex flex-col">
                  <Link 
                    href="/" 
                    className="block py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded px-3"
                    onClick={handleLinkClick}
                  >
                    Home
                  </Link>
                  <Link 
                    href="/about" 
                    className="block py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded px-3"
                    onClick={handleLinkClick}
                  >
                    About
                  </Link>
                  <Link 
                    href="/services" 
                    className="block py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded px-3"
                    onClick={handleLinkClick}
                  >
                    Services
                  </Link>
                  <Link 
                    href="/contact" 
                    className="block py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded px-3"
                    onClick={handleLinkClick}
                  >
                    Contact
                  </Link>
                </nav>

                {/* Mobile Action Buttons */}
                <div className="flex flex-col space-y-2 pt-2 border-t">
                  <Link href="/iklan" onClick={handleLinkClick}>
                    <Button variant="outline" color="blue" className="w-full justify-center py-2.5">
                      <MegaphoneIcon className="h-5 w-5 text-orange-500 mr-2" />
                      Pasang Iklan
                    </Button>
                  </Link>
                  
                  <Link href="/login" onClick={handleLinkClick}>
                    <button className="w-full bg-blue-600 text-white py-2.5 rounded hover:bg-blue-700 transition font-medium">
                      Login
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Overlay - now with lower z-index and pointer-events set to auto only on the overlay itself */}
            <div 
              className="md:hidden fixed inset-0 bg-black bg-opacity-50"
              style={{ top: '4rem', zIndex: 40 }}
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
          </>
        )}
      </div>
    </header>
  )
}