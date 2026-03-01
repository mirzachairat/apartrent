import { NextResponse } from 'next/server'
import { Destinasi } from '@/types/destinasi'

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
  const url = new URL(request.url)
  const search = url.searchParams.get('search')?.toLowerCase() || ''

  const filtered = data.filter((d) => d.name.toLowerCase().includes(search))

  return NextResponse.json(filtered)
}
