// src/components/About/TeamSection.tsx
import Image from 'next/image'

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Budi Santoso",
      position: "CEO & Founder",
      image: "/images/team-member1.jpg",
      bio: "Pendiri RentProperty dengan pengalaman 15 tahun di industri properti."
    },
    {
      name: "Anita Wijaya",
      position: "Direktur Operasional",
      image: "/images/team-member2.jpg",
      bio: "Mengawasi operasional harian dan pengembangan properti."
    },
    {
      name: "Dewi Kartika",
      position: "Manajer Pemasaran",
      image: "/images/team-member3.jpg",
      bio: "Bertanggung jawab atas strategi pemasaran dan branding."
    }
  ]

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Tim Kami</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="h-64 relative">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-blue-600 mb-3">{member.position}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}