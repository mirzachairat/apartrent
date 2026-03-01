// src/components/listing/ListingForm.tsx
import { PhotoIcon, MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'

export default function ListingForm({ role }: { role: string }) {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow rounded-lg overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">
          Form Iklan Properti - {role}
        </h2>
      </div>
      
      <div className="px-6 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Form Input */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Jenis Properti
              </label>
              <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                <option>Rumah</option>
                <option>Apartemen</option>
                <option>Tanah</option>
                <option>Komersial</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                <MapPinIcon className="h-4 w-4 mr-1 text-gray-500" />
                Lokasi
              </label>
              <input 
                type="text" 
                placeholder="Alamat lengkap" 
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
          
          {/* Upload Foto */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
              <PhotoIcon className="h-4 w-4 mr-1 text-gray-500" />
              Foto Properti
            </label>
            <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
              <div className="space-y-1 text-center">
                <div className="flex text-sm text-gray-600">
                  <label className="cursor-pointer rounded-md bg-white font-medium text-blue-600 hover:text-blue-500">
                    <span>Upload file</span>
                    <input type="file" className="sr-only" multiple />
                  </label>
                  <p className="pl-1">atau drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">
                  PNG, JPG up to 5MB
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Harga */}
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
            <CurrencyDollarIcon className="h-4 w-4 mr-1 text-gray-500" />
            Harga
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">Rp</span>
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-12 py-2 border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
              placeholder="0.00"
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <select className="h-full rounded-r-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-blue-500 focus:ring-blue-500">
                <option>/bulan</option>
                <option>/tahun</option>
                <option>sekali bayar</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Submit Button */}
        <div className="mt-8">
          <button
            type="button"
            className="w-full bg-blue-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Publikasikan Iklan
          </button>
        </div>
      </div>
    </div>
  )
}