// components/Header.tsx
"use client"
import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import {Button} from '@/components/ui/Button'
import { MegaphoneIcon } from '@heroicons/react/24/outline';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Image src={'/images/logoproperti.png'} alt={'banner'} width={100} height={100}/>

          <nav className="hidden md:flex space-x-6 ml-30">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <Link href="/about" className="hover:text-blue-600">About</Link>
            <Link href="/services" className="hover:text-blue-600">Services</Link>
            <Link href="/contact" className="hover:text-blue-600">Contact</Link>
          </nav>
          <Link href="/iklan">
              <Button className ="ml-20" variant="outline" color="blue">
                <MegaphoneIcon className="h-6 w-6 text-orange-500" />
                Pasang Iklan
              </Button>
          </Link>
      
          <div className="hidden md:block">
            <Link href="/login">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Login
              </button>
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-2">
            <Link href="/" className="block hover:text-blue-600">Home</Link>
            <Link href="/about" className="block hover:text-blue-600">About</Link>
            <Link href="/services" className="block hover:text-blue-600">Services</Link>
            <Link href="/contact" className="block hover:text-blue-600">Contact</Link>
            <Link href="/login">
              <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                Login
              </button>
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
