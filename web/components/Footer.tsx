import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return (
        <div className="bg-green-500 w-full fixed h-100 text-center bottom-0 ">
            <a>

                <Image  src= '/img/RobertLogo.png' alt="rei" height = {14.3} width= {188}
                    className=" flex " 
                    />
            </a>
            
        </div>
    )
}