import { NextResponse } from "next/server";
import { Propertibaru } from "@/types/propertibaru";

const data: Propertibaru[] = [
    {
    id:'1',    
    title: 'Rumah Minimalis',
    image: '/images/card.jpg',
    subtitle: 'Jakarta Selatan',
    description: 'Hunian modern, cocok untuk keluarga muda.',
    link1: 'https://test'
  },
  {
    id: '2',
    title: 'Apartemen Mewah',
    image:'/images/card.jpg',
    subtitle: 'Jakarta Pusat',
    description: 'Apartemen dengan fasilitas lengkap.',
    link1: 'https://test'
  },
  {
    id:'3',
    title: 'Villa di Bali',
    subtitle: 'Ubud, Bali',
    image:'/images/card.jpg',
    description: 'Villa eksklusif dengan pemandangan sawah.',
    link1: 'https://test'
  },
]

export async function GET(request: Request) {
  const url = new URL(request.url)
  const search = url.searchParams.get('search')?.toLowerCase() || ''

  const filtered = data.filter((d) => d.title.toLowerCase().includes(search))

  return NextResponse.json(filtered)
}