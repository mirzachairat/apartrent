import { NextResponse } from 'next/server'

// Define the type inline to avoid import issues
interface Destinasi {
  id: string
  name: string
  location: string
  image: string
}

// Make sure data is always defined
const data: Destinasi[] = [
  {
    id: '1',
    name: 'Pulau Seribu',
    location: 'Jakarta',
    image: '/images/card.jpg',
  },
  {
    id: '2',
    name: 'Bali Beach',
    location: 'Bali',
    image: '/images/card2.jpg',
  },
  {
    id: '3',
    name: 'Pulau Seribu',
    location: 'Jakarta',
    image: '/images/card.jpg',
  },
  {
    id: '4',
    name: 'Bali Beach',
    location: 'Bali',
    image: '/images/card2.jpg',
  },
]

export async function GET(request: Request) {
  try {
    const url = new URL(request.url)
    const search = url.searchParams.get('search')?.toLowerCase() || ''

    // This will never crash because data is hardcoded
    const filtered = data.filter((d) => d.name.toLowerCase().includes(search))
    
    return NextResponse.json(filtered)
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}