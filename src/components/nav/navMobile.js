'use client'
import Link from 'next/link';
import Image from 'next/image'
import { useState } from 'react';
export default function NavMobile(){
    const [view, setView] = useState('close');
    function openCloseView(e){
        e.preventDefault();
        setView(view === 'open'?'close':'open')
    }
    return(
        <div className="absolute top-0 left-0 flex justify-center lg:hidden h-14 w-full bg-white z-30">
            <div className="fixed flex-1 lg:max-w-6xl bg-white w-full h-14">
                <div className='flex items-center justify-between pr-4 lg:pr-0 h-14 border border-gray-200'>
                    <Image className='' src='/Logo_Walsh.png' width={200} height={200} alt='Walsh Perú' priority/>
                    <div onClick={openCloseView}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                        </svg>
                    </div>
                </div>
                {
                    view === 'close'?null:<div className='px-4 py-2 bg-white'>
                        <Link href={'/'}><h1 className='text-sm'>Inicio</h1></Link>
                        <Link href={'/planes'}><h1 className='bg-white mt-1 w-20 text-center rounded-sm border-2 border-gray-800 cursor-pointer text-sm'>Planes</h1></Link>
                    </div>
                }
            </div>
        </div>
    );
}