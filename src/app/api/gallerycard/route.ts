import { NextResponse } from "next/server";
import { Popular } from "@/types/popular";

const data: Popular[] = [
    {
        id:'1',
        image:'/images/card.jpg',
        title:'test',
        description:'rumah type/xxxxx harga yang sangat kompetif'
    },
    {
        id:'2',
        image:'/images/card2.jpg',
        title:'test',
        description:'rumah type/xxxxx harga yang sangat kompetif'
    },
    {
        id:'3',
        image:'/images/card.jpg',
        title:'test',
        description:'rumah type/xxxxx harga yang sangat kompetif'
    },
    {
        id:'4',
        image:'/images/card.jpg',
        title:'test',
        description:'rumah type/xxxxx harga yang sangat kompetif'
    },
    {
        id:'5',
        image:'/images/card.jpg',
        title:'test',
        description:'rumah type/xxxxx harga yang sangat kompetif'
    }
]

export async function GET(request: Request) {
  const url = new URL(request.url)
  const search = url.searchParams.get('search')?.toLowerCase() || ''

  const filtered = data.filter((d) => d.title.toLowerCase().includes(search))

  return NextResponse.json(filtered)
}