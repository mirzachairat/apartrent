import Image from "next/image"
import Link from "next/link"
import { MegaphoneIcon } from '@heroicons/react/24/outline';


export default function Footer() {
  return (
    <footer className="h-100 bg-[#0d1a35] text-white">
      <div className="flex flex-row p-20 gap-20">
          <div className="basis-128">
             <Image 
                src="/images/logo.png"
                alt="logo"
                width={150}
                height={60}
             /> 
            <p className="tracking-widest text-justify">3eight adalah situs teknologi jual beli dan sewa properti terdepan di Indonesia, yang hadir untuk memberikan kemudahan dalam mencari properti. 3eight berkomitmen untuk membuat pengalaman 'Jual Beli dan Sewa Properti Lebih Mudah' dengan dukungan dari agen profesional.</p>
          </div>
        <div className="basis-64">
            <p>Perusahaan</p>
            <Link href="/about">
                <p>Tentang Kami</p>
            </Link>
        </div>
        <div className="basis-64">
            <p>Layanan Kami</p>
            <Link href="/iklan">
                <p>
                    <MegaphoneIcon className="w-3 h-3"/>
                    Iklankan Properti
                </p>
            </Link>
        </div>
        <div className="basis-64">
          <p>Hubungi Kami</p>
          </div>
      </div>
    </footer>
  )
}
