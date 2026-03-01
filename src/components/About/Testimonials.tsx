// src/components/About/Testimonials.tsx
export default function Testimonials() {
  const testimonials = [
    {
      quote: "Sangat puas dengan pelayanan RentProperty. Proses sewa mudah dan properti sesuai gambar.",
      name: "Dian Sastro",
      role: "Penyewa Apartemen"
    },
    {
      quote: "Tim profesional yang responsif. Selalu membantu ketika ada masalah di properti yang kami sewa.",
      name: "Rudi Hermawan",
      role: "Penyewa Ruko"
    },
    {
      quote: "Pengalaman menyewa yang menyenangkan. Properti berkualitas dengan harga kompetitif.",
      name: "Siti Nurhaliza",
      role: "Penyewa Vila"
    }
  ]

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Apa Kata Klien Kami</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}