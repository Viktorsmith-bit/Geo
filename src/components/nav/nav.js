'use client'
import Link from 'next/link';
import Image from 'next/image'
import { useState } from 'react';
export default function Nav(){
    const [view, setView] = useState('close');
    function openCloseView(e){
        e.preventDefault();
        setView(view === 'open'?'close':'open')
    }
    return(
        <div className="flex justify-center hidden lg:flex">
            <div className="flex-1 w-full lg:max-w-6xl">
                <div className='flex items-center justify-between py-5'>
                    <Image src='/Logo_Walsh.png' width={250} height={250} alt='Walsh Perú' priority/>
                    <div className='flex items-center gap-3'>
                        <Link href={'/'}>Inicio</Link>
                        <Link href={'/planes'}><h1 className='bg-white py-1 px-10 rounded-sm border-2 border-gray-800 cursor-pointer'>Planes</h1></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}