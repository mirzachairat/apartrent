// src/app/register/page.tsx
'use client'

import { DynamicForm } from '@/components/DinamicForm'
import { useRouter } from 'next/navigation'

export default function RegisterPage() {
  const router = useRouter()

  const formFields = [
    {
      name: 'firstName',
      label: 'First Name',
      type: 'text',
      required: true,
      placeholder: 'John',
      validation: {
        required: 'First name is required',
        minLength: {
          value: 2,
          message: 'First name must be at least 2 characters'
        }
      }
    },
    {
      name: 'lastName',
      label: 'Last Name',
      type: 'text',
      required: true,
      placeholder: 'Doe',
      validation: {
        required: 'Last name is required',
        minLength: {
          value: 2,
          message: 'Last name must be at least 2 characters'
        }
      }
    },
    {
      name: 'email',
      label: 'Email Address',
      type: 'email',
      required: true,
      placeholder: 'email@example.com',
      validation: {
        required: 'Email is required',
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: 'Invalid email address'
        }
      }
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      required: true,
      validation: {
        required: 'Password is required',
        minLength: {
          value: 8,
          message: 'Password must be at least 8 characters'
        }
      }
    },
    {
      name: 'userType',
      label: 'User Type',
      type: 'select',
      required: true,
      options: [
        { value: 'tenant', label: 'Tenant' },
        { value: 'landlord', label: 'Landlord' },
        { value: 'agent', label: 'Agent' }
      ],
      validation: {
        required: 'Please select a user type'
      }
    },
    {
      name: 'terms',
      label: 'I agree to the terms and conditions',
      type: 'checkbox',
      required: true,
      validation: {
        required: 'You must accept the terms'
      }
    }
  ]

  const handleSubmit = async (data: any) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log('Form submitted:', data)
    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Or{' '}
            <a href="/login" className="font-medium text-blue-600 hover:text-blue-500">
              login to existing account
            </a>
          </p>
        </div>

        <DynamicForm 
          fields={formFields}
          onSubmit={handleSubmit}
          submitText="Register"
        />
      </div>
    </div>
  )
}