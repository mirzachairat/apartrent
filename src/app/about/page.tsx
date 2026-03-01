import Image from 'next/image'
import TeamSection from '@/components/About/TeamSection'
import StatsSection from '@/components/About/StatsSection'
import Testimonials from '@/components/About/Testimonials'

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-96 rounded-b-full overflow-hidden">
        <Image
          src="/images/about-hero.jpg"
          alt="Tentang Kami"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Tentang Kami</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Menyediakan solusi penyewaan properti terbaik
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <Image
              src="/images/office-building.jpg"
              alt="Kantor Kami"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Cerita Kami</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                3eightProperty telah menjadi penyedia layanan penyewaan properti 
                terpercaya di Indonesia. Kami memulai dengan satu gedung kecil di Jakarta dan kini 
                mengelola lebih dari 500 properti di seluruh Indonesia.
              </p>
              <p>
                Misi kami adalah menyediakan pengalaman menyewa yang mudah, aman, dan nyaman 
                bagi semua pelanggan. Dengan tim profesional yang berpengalaman, kami berkomitmen 
                untuk memberikan layanan terbaik.
              </p>
              <p>
                Setiap properti dalam portofolio kami dipilih dengan cermat untuk memastikan 
                kualitas dan kenyamanan bagi penyewa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Nilai-Nilai Kami</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Integritas",
                description: "Kami selalu jujur dan transparan dalam setiap transaksi.",
                icon: "🤝"
              },
              {
                title: "Profesionalisme",
                description: "Tim ahli kami siap memberikan layanan terbaik untuk kebutuhan properti Anda.",
                icon: "👔"
              },
              {
                title: "Inovasi",
                description: "Terus mengembangkan sistem untuk pengalaman menyewa yang lebih baik.",
                icon: "💡"
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
                <span className="text-4xl mb-4 inline-block">{value.icon}</span>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Testimonials */}
      <Testimonials />
    </div>
  )
}