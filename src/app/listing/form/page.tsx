'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import ListingForm from '@/components/Iklan/listingform'

// Create a separate component that uses useSearchParams
function ListingFormContent() {
  const searchParams = useSearchParams()
  const role = searchParams.get('role') || 'agen'

  // Konversi parameter ke format judul
  const roleTitle = {
    'pemilik-rumah': 'Pemilik Rumah',
    'developer': 'Developer',
    'agen': 'Agen Properti'
  }[role] || 'Agen Properti'

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <ListingForm role={roleTitle} />
    </div>
  )
}

// Loading skeleton for better UX
function FormSkeleton() {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
          <div className="space-y-4">
            <div className="h-12 bg-gray-200 rounded"></div>
            <div className="h-64 bg-gray-200 rounded"></div>
            <div className="h-12 bg-gray-200 rounded w-1/3"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Main page component with Suspense
export default function ListingFormPage() {
  return (
    <section className='mt-20'>
      <Suspense fallback={<FormSkeleton />}>
        <ListingFormContent />
      </Suspense>
    </section>
  )
}