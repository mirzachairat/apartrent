// src/components/forms/DynamicForm.tsx
'use client'

import { useForm, SubmitHandler, FieldValues, UseFormRegister, FieldError } from 'react-hook-form'
import { Button } from '@/components/ui/Button'
import { clsx } from 'clsx'

type FormField = {
  name: string
  label: string
  type: string
  required?: boolean
  placeholder?: string
  validation?: any
  options?: { value: string; label: string }[]
}

interface DynamicFormProps {
  fields: FormField[]
  onSubmit: SubmitHandler<FieldValues>
  submitText?: string
  defaultValues?: Record<string, any>
}

export const DynamicForm = ({
  fields,
  onSubmit,
  submitText = 'Submit',
  defaultValues = {}
}: DynamicFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    control
  } = useForm({ defaultValues })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-4">
        {fields.map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-1">
              {field.label}
              {field.required && <span className="text-red-500"> *</span>}
            </label>
            
            {field.type === 'select' ? (
              <select
                id={field.name}
                {...register(field.name, field.validation)}
                className={clsx(
                  'mt-1 block w-full pl-3 pr-10 py-2 text-base border',
                  errors[field.name] ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500',
                  'rounded-md shadow-sm'
                )}
              >
                {field.options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={field.name}
                type={field.type}
                placeholder={field.placeholder}
                {...register(field.name, field.validation)}
                className={clsx(
                  'mt-1 block w-full shadow-sm sm:text-sm rounded-md',
                  errors[field.name] ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500',
                  field.type === 'checkbox' ? 'h-4 w-4' : 'border p-2'
                )}
              />
            )}

            {errors[field.name] && (
              <p className="mt-2 text-sm text-red-600">
                {(errors[field.name] as FieldError)?.message}
              </p>
            )}
          </div>
        ))}
      </div>

      <div>
        <Button
          type="submit"
          disabled={isSubmitting}
          loading={isSubmitting}
          color="blue"
          variant="solid"
          className="w-full justify-center"
        >
          {submitText}
        </Button>
      </div>
    </form>
  )
}