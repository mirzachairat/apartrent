// src/components/About/StatsSection.tsx
export default function StatsSection() {
  const stats = [
    { value: "500+", label: "Properti Tersedia" },
    { value: "12+", label: "Tahun Pengalaman" },
    { value: "10K+", label: "Klien Puas" },
    { value: "24/7", label: "Layanan Pelanggan" }
  ]

  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-bold mb-2">{stat.value}</p>
              <p className="text-xl">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}