'use client'

import { useEffect, useState } from "react";
import HerroBanner from "@/components/HerroBanner";
import { Destinasi } from '@/types/destinasi'
import { Popular } from '@/types/popular';
import { Propertibaru } from '@/types/propertibaru';
import { fetcher } from '@/lib/fetcher';
import TiltedCard from "@/components/TiltedCard";
import Gallerycard from "@/components/Gallerycard";
import { Landmark } from "lucide-react"
import RotatingText from "./../components/ui/RotatingText"
import PropertibaruList from "@/components/Propertibaru";

export default function Home() {
  const [destinasiList, setDestinasiList] = useState<Destinasi[]>([])
  const [popularList, setPopularList] = useState<Popular[]>([])
  const [propertibaru, setPropertiBaruList] = useState<Propertibaru[]>([])
  const [loading, setLoading] = useState(false)

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
  }, [])

  useEffect(() => {
    fetchPopular()
  }, [])

  useEffect(() => {
    fetchPropertibaru()
  }, [])

  return (
    <main className="overflow-x-hidden">
      {/* Hero Banner Section */}
      <section className="p-4 sm:p-6 md:p-8 lg:p-10">
        <HerroBanner />
      </section>

      {/* Popular Section */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold flex items-center gap-2 mb-4 lg:px-25">
          <Landmark className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
          Terpopuler
        </h1>
        {loading ? (
          <div className="flex justify-center items-center py-10">
            <p className="text-gray-500">Loading...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-5 px-0 sm:px-4 lg:px-25">
            {destinasiList.map(d => (
              <TiltedCard 
                key={d.id}
                image={d.image}
                captionText={d.name}
                slug={d.id} 
              />
            ))}
          </div>
        )}
      </section>

      {/* Rotating Text Banner */}
      <section className="my-6 sm:my-8 md:my-10 px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="w-full overflow-hidden">
          <RotatingText
            texts={['TERPECAYA', 'CEPAT', 'HEMAT', 'MUDAH']}
            mainClassName="h-16 sm:h-20 px-2 sm:px-2 md:px-3 bg-fuchsia-300 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center text-lg sm:text-xl md:text-4xl lg:text-7xl font-bold rounded-full"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 150 }}
            rotationInterval={3000}
          />
        </div>
      </section>

      {/* Recommendations Section */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-10">
        <h1 className="text-2xl sm:text-3xl font-bold flex items-center gap-2 mb-4 lg:px-25">
          <Landmark className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
          Rekomendasi Sesuai Pencarianmu
        </h1>
        
        {/* Mobile: Horizontal scroll, Desktop: Grid */}
        <div className="lg:px-25">
          <div className="flex lg:grid lg:grid-cols-5 gap-4 overflow-x-auto pb-4 scrollbar-hide lg:overflow-x-visible">
            {popularList.map(d => (
              <div key={d.id} className="min-w-[250px] sm:min-w-[280px] lg:min-w-0 flex-shrink-0 lg:flex-shrink">
                <Gallerycard 
                  image={d.image} 
                  slug={d.id} 
                  description={d.description} 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Properties Section */}
      <section className="bg-sky-50 mt-6 sm:mt-8 md:mt-10 px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8">
        <h1 className="text-2xl sm:text-3xl font-bold flex items-center gap-2 mb-4 lg:px-25">
          <Landmark className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
          Daftar Properti Baru
        </h1>
        
        {/* Horizontal scroll for all screen sizes */}
        <div className="lg:px-25">
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {propertibaru.map(d => (
              <div key={d.id} className="min-w-[280px] sm:min-w-[300px] md:min-w-[320px] flex-shrink-0">
                <PropertibaruList 
                  image={d.image} 
                  title={d.title} 
                  slug={d.id} 
                  description={d.description} 
                  link1={d.link1} 
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}