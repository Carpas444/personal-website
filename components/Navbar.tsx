import { Socials } from '@/constants'
import Image from 'next/image'
import React from 'react'
import Link from "next/link"

const Navbar = () => {
  return (
    <div className='fixed top-0 z-[40] w-full h-[80px] bg-blue-800 flex flex-col sm:flex-row justify-center sm:justify-between items-center px-5 sm:px-10 md:px-20 gap-2'>
        <div className='flex flex-row gap-3 items-center'>
            <div className='relative w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]'>
                <Image src="/adcc-cropped2.jpg" alt='afonso-carpinteiro' width={50} height={50} className='object-cover rounded-full'/>
            </div>
            <Link href="/" className='text-white text-lg sm:text-xl md:text-2xl font-semibold'>
                Afonso Carpinteiro
            </Link>
        </div>
        <div className='flex flex-row gap-5 px-5'>
            {Socials.map((social) => (
                <a 
                    key={social.name} 
                    href={social.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src={social.src}
                        alt={social.name}
                        height={24}
                        width={24}
                        className="cursor-pointer hover:opacity-80 transition-opacity"
                    />
                </a>
            ))}
        </div>
    </div>
  )
}

export default Navbar;