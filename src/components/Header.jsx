import React from 'react'
import MenuItem from './MenuItem'
import { FaHome } from "react-icons/fa";
import { FaAtom } from "react-icons/fa";
import Link from 'next/link';
export default function Header() {
  return (
    <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
        <div className="flex gap-4">
            <MenuItem title="home" address="/" Icon={FaHome }/>
            <MenuItem title="about" address="/about" Icon= {FaAtom}/>
        </div>
        <Link href='/' className="flex gap-1 items-center">
          <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">IMdb</span>
          <span className="text-xl sm:inline">clone</span>
        </Link>
    </div>
  )
}
