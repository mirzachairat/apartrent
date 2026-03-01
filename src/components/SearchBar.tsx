'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { X } from 'lucide-react' // pastikan sudah install lucide-react

interface SearchBarProps {
  onSearch?: (query: string) => void
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState('')

  // Debounce effect
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query)
    }, 500)

    return () => clearTimeout(handler)
  }, [query])

  useEffect(() => {
    if (onSearch && debouncedQuery !== '') {
      onSearch(debouncedQuery)
    }
  }, [debouncedQuery, onSearch])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (onSearch) onSearch(query)
  }

  const handleClear = () => {
    setQuery('')
    if (onSearch) onSearch('') // Clear result in parent
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="relative flex flex-col sm:flex-row items-center justify-center w-full px-4 sm:px-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-full sm:w-[400px]">
        <input
          type="text"
          aria-label="Cari destinasi"
          placeholder="Cari destinasi..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 text-gray-800 bg-white rounded-t-md sm:rounded-l-md sm:rounded-tr-none focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
            aria-label="Clear input"
          >
            <X size={18} />
          </button>
        )}
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto bg-blue-700 text-white px-4 py-2 rounded-b-md sm:rounded-r-md sm:rounded-bl-none hover:bg-blue-800 transition"
      >
        Cari
      </button>
    </motion.form>
  )
}
