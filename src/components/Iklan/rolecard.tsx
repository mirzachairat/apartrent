// src/components/listing/RoleCard.tsx
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

interface RoleCardProps {
  icon: React.ReactNode
  title: string
  description: string
  buttonText: string
  bgColor: string
}

export default function RoleCard({ 
  icon, 
  title, 
  description, 
  buttonText, 
  bgColor 
}: RoleCardProps) {
  return (
    <div className={`${bgColor}shadow-sm overflow-hidden`}>
      <div className="p-6">
        <div className="flex justify-center mb-4">
          <div className="rounded-full bg-white p-3 shadow-md">
            {icon}
          </div>
        </div>
        <h3 className="text-lg font-semibold text-center text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 text-center mb-6">{description}</p>
        <Link 
          href={`/listing/form?role=${title.toLowerCase().replace(' ', '-')}`}
          className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors"
        >
          {buttonText}
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}