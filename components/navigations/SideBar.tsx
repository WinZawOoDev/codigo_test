import Link from 'next/link'
import React from 'react'

export default function SideBar() {
    return (
        <aside className='fixed left-0 top-0 px-5 h-full shadow-2xl border-r border-gray-200 bg-white z-50'>
            <ul className='pt-10'>
                <li className='my-4'>
                    <Link href={"/"} className='hover:underline'>
                        Teams
                    </Link>
                </li>
                <li className='my-4'>
                    <Link href={"players"} className='hover:underline'>
                        Players
                    </Link>
                </li>
            </ul>
        </aside>
    )
}
