'use client'

import { useEffect, useState } from "react";
import HerroBanner from "@/components/HerroBanner";
import { Destinasi } from '@/types/destinasi'
import { Popular } from '@/types/popular';
import { Propertibaru } from '@/types/propertibaru';
import { fetcher } from '@/lib/fetcher';
import TiltedCard from "@/components/TiltedCard";
import Gallerycard from "@/components/Gallerycard";
import { Landmark, Search } from "lucide-react"
import RotatingText from "./../components/ui/RotatingText"
import PropertibaruList from "@/components/Propertibaru";

export default function Home() {
  const [destinasiList, setDestinasiList] = useState<Destinasi[]>([])
  const [popularList, setPopularList] = useState<Popular[]>([])
  const [propertibaru, setPropertiBaruList] = useState<Propertibaru[]>([])
  const [loading, setLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  async function fetchDestinasi(query = '') {
    setLoading(true)
    try {
      const data = await fetcher<Destinasi[]>(`/api/destinasi?search=${encodeURIComponent(query)}`)
      setDestinasiList(data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  async function fetchPopular(query = '') {
    setLoading(true)
    try {
      const data = await fetcher<Popular[]>(`/api/gallerycard?search=${encodeURIComponent(query)}`)
      setPopularList(data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  async function fetchPropertibaru(query = '') {
    setLoading(true)
    try {
      const data = await fetcher<Propertibaru[]>(`/api/propertibaru?search=${encodeURIComponent(query)}`)
      setPropertiBaruList(data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchDestinasi()
    fetchPopular()
    fetchPropertibaru()
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality
    console.log("Searching for:", searchQuery)
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section with Search */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Jual Beli dan Sewa Properti Jadi Mudah
            </h1>
            <p className="text-lg sm:text-xl mb-8 text-blue-100">
              Temukan properti impian Anda dengan mudah dan cepat
            </p>
            
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Cari destinasi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 pr-12"
              />
              <button 
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition"
              >
                <Search className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Popular Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-2 mb-8">
            <Landmark className="w-6 h-6 text-blue-600" />
            Terpopuler
          </h2>
          
          {loading ? (
            <div className="flex justify-center items-center py-10">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {destinasiList.length > 0 ? (
                destinasiList.map(d => (
                  <TiltedCard 
                    key={d.id}
                    image={d.image}
                    captionText={d.name}
                    slug={d.id} 
                  />
                ))
              ) : (
                // Placeholder cards if no data
                [1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="h-48 bg-gray-200 animate-pulse"></div>
                    <div className="p-4">
                      <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </section>

      {/* Rotating Text Banner */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-fuchsia-300 rounded-full py-4 px-6">
            <RotatingText
              texts={['TERPERCAYA', 'CEPAT', 'HEMAT', 'MUDAH']}
              mainClassName="h-12 sm:h-16 md:h-20 text-white overflow-hidden flex justify-center items-center text-xl sm:text-2xl md:text-4xl font-bold"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5"
              transition={{ type: "spring", damping: 30, stiffness: 150 }}
              rotationInterval={3000}
            />
          </div>
        </div>
      </section>

      {/* Recommendations Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-2 mb-8">
            <Landmark className="w-6 h-6 text-blue-600" />
            Rekomendasi Sesuai Pencarianmu
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {popularList.length > 0 ? (
              popularList.map(d => (
                <Gallerycard 
                  key={d.id} 
                  image={d.image} 
                  slug={d.id} 
                  description={d.description} 
                />
              ))
            ) : (
              // Placeholder cards
              [1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="bg-gray-100 rounded-lg h-48 animate-pulse"></div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* New Properties Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-2 mb-8">
            <Landmark className="w-6 h-6 text-blue-600" />
            Daftar Properti Baru
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {propertibaru.length > 0 ? (
              propertibaru.map(d => (
                <PropertibaruList 
                  key={d.id} 
                  image={d.image} 
                  title={d.title} 
                  slug={d.id} 
                  description={d.description} 
                  link1={d.link1} 
                />
              ))
            ) : (
              // Placeholder cards
              [1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 bg-gray-200 animate-pulse"></div>
                  <div className="p-4 space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                    <div className="h-3 bg-gray-200 rounded w-full animate-pulse"></div>
                    <div className="h-3 bg-gray-200 rounded w-2/3 animate-pulse"></div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </main>
  )
}