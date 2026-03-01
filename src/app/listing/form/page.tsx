// src/app/listing/new/form/page.tsx
'use client'

import { useSearchParams } from 'next/navigation'
import ListingForm from '@/components/Iklan/listingform'

export default function ListingFormPage() {
  const searchParams = useSearchParams()
  const role = searchParams.get('role') || 'agen'

  // Konversi parameter ke format judul
  const roleTitle = {
    'pemilik-rumah': 'Pemilik Rumah',
    'developer': 'Developer',
    'agen': 'Agen Properti'
  }[role] || 'Agen Properti'

  return (
    <section className='mt-20'>
        <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <ListingForm role={roleTitle} />
        </div>
    </section>
  )
}