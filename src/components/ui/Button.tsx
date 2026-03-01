// src/components/button.tsx
'use client'

import { Button as HeadlessButton } from '@headlessui/react'
import { clsx } from 'clsx'
import React from 'react'

export const Button = ({  
  children,
  className,
  variant = 'solid',
  color = 'blue',
  loading = false,
  disabled = false,
  ...props
}: {
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
  className?: string
  variant?: 'solid' | 'outline' | 'ghost'
  color?: 'blue' | 'gray' | 'red' | 'green'
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const isDisabled = disabled || loading
  
  return (
    <HeadlessButton
      className={clsx(
        // Base styles
        'inline-flex items-center justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
        
        // Variant and color styles
        variant === 'solid' && {
          'bg-blue-600 text-white hover:bg-blue-500 focus-visible:outline-blue-600': color === 'blue',
          'bg-gray-600 text-white hover:bg-gray-500 focus-visible:outline-gray-600': color === 'gray',
          'bg-red-600 text-white hover:bg-red-500 focus-visible:outline-red-600': color === 'red',
          'bg-green-600 text-white hover:bg-green-500 focus-visible:outline-green-600': color === 'green',
        },
        
        variant === 'outline' && {
          'ring-1 ring-inset ring-blue-600 text-blue-600 hover:bg-blue-50': color === 'blue',
          'ring-1 ring-inset ring-gray-600 text-gray-600 hover:bg-gray-50': color === 'gray',
          'ring-1 ring-inset ring-red-600 text-red-600 hover:bg-red-50': color === 'red',
          'ring-1 ring-inset ring-green-600 text-green-600 hover:bg-green-50': color === 'green',
        },
        
        // Disabled state
        isDisabled && 'opacity-75 cursor-not-allowed',
        
        className
      )}
      disabled={isDisabled}
      {...props}
    >
      {loading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {children}
    </HeadlessButton>
  )
}