import { NextResponse } from "next/server";

// Remove the import and define the type inline or just use inline typing
// This ensures no import issues

const data = [
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
  try {
    const url = new URL(request.url)
    const search = url.searchParams.get('search')?.toLowerCase() || ''

    // Safety check - though data is hardcoded, this prevents any weird issues
    if (!data || !Array.isArray(data)) {
      console.error('Popular data is not available')
      return NextResponse.json([]) // Return empty array instead of crashing
    }

    const filtered = data.filter((d) => d.title.toLowerCase().includes(search))
    return NextResponse.json(filtered)
  } catch (error) {
    console.error('Error in popular API:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}