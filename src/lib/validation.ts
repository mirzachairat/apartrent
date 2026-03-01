// src/lib/validation.ts
export const validateEmail = (email: string): string => {
  if (!email) return 'Email harus diisi'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return 'Email tidak valid'
  }
  return ''
}

export const validatePassword = (password: string): string => {
  if (!password) return 'Password harus diisi'
  if (password.length < 6) return 'Password minimal 6 karakter'
  return ''
}

export const validateName = (name: string, fieldName: string): string => {
  if (!name) return `${fieldName} is required`
  if (name.length < 2) return `${fieldName} must be at least 2 characters`
  return ''
}

export const validatePhone = (phone: string): string => {
  if (!phone) return 'Phone number is required'
  if (!/^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/.test(phone)) {
    return 'Please enter a valid phone number'
  }
  return ''
}