'use client'

import Image from 'next/image'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { useState } from 'react'

type Props = {
  image: string
  // title: string
  slug: string | number
  description:string
}

export default function Gallerycard({ image,description }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="cursor-pointer hover:scale-110 transition relative w-full overflow-hidden rounded-lg shadow-md">
          <Image
            src={image}
            alt={"banner"}
            width={300}
            height={200}
            className="rounded shadow object-cover w-full"
          />
          <div className="p-2 text-center">
            {/* <h3 className="text-lg font-semibold">{title}</h3> */}
            <p className="text-sm text-gray-500">{description}</p>
          </div>

        </div>
      </DialogTrigger>
      <DialogContent className="max-w-1xl bg-black p-0 overflow-hidden">
        <Image
          src={image}
          alt="galery"
          width={800}
          height={600}
          className="w-full h-auto object-contain"
        />
      </DialogContent>
    </Dialog>
  )
}
