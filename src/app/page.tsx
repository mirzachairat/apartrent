'use client'

import { useEffect,useState } from "react";
import HerroBanner from "@/components/HerroBanner";
import { Destinasi } from '@/types/destinasi'
import {Popular} from '@/types/popular';
import {Propertibaru} from '@/types/propertibaru';
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
      // Contoh fetch API - ganti dengan endpoint sebenarnya
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
      // Contoh fetch API - ganti dengan endpoint sebenarnya
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
      // Contoh fetch API - ganti dengan endpoint sebenarnya
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
    <main>
        <section className="p-10">
          <HerroBanner />
        </section>
        <section className="">
          <h1 className="text-4xl font-bold flex items-center gap-2 mb-4 lg:px-25">
            <Landmark className="w-6 h-6 text-primary" />
            Terpopuler
          </h1>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 px-4 sm:px-8 lg:px-25">
                {destinasiList.map(d => <TiltedCard key={d.id}
                  image={d.image}
                  captionText={d.name}
                  slug={d.id} />)}
            </div>
          )}
        </section>
        <section className="m-10 px-80">
              {/* Banner Content */}
                <RotatingText
                    texts={['TERPECAYA', 'CEPAT', 'HEMAT', 'MUDAH']}
                    mainClassName="h-20 px-2 sm:px-2 md:px-3 bg-fuchsia-300 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center text-lg sm:text-xl md:text-7xl font-bold rounded-full"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 150 }}
                    rotationInterval={3000}
                  />
        </section>
        <section>
              <h1 className="text-3xl font-bold flex items-center gap-2 mb-4 lg:px-25">
                <Landmark className="w-6 h-6 text-primary" />
                Rekomendasi Sesuai Pencarianmu
              </h1>
              <div className="flex gap-4 pb-4 px-30 grid-cols-1 sm:grid-cols-1 lg-grid-cols-5">
                {popularList.map(d => (
                  <Gallerycard key={d.id} image={d.image} slug={d.id} description={d.description} />
                ))}
              </div>
        </section>
        <section className="bg-sky-50">
            <h1 className="text-3xl font-bold flex items-center gap-2 mb-4 lg:px-25 mt-px-50 p-5">
                <Landmark className="w-6 h-6 text-primary" />
                Daftar Properti Baru
              </h1>
              <div className="flex overflow-x-auto gap-4 pb-4 px-30">
                {propertibaru.map(d => (
                  <PropertibaruList key={d.id} image={d.image} title={d.title} slug={d.id} description={d.description} link1={d.link1} />
                ))}
              </div>
        </section>
    </main>
  )
}
