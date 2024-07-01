import LoginAndRegisterForms from '@/components/login/LoginAndRegisterForms'
import Image from 'next/image'
import React from 'react'

export default async function Login( {searchParams} ){



    return (
        <div className="w-full xs:px-4 lg:container mx-auto lg:max-w-6xl mt-6 py-4 px-4 flex gap-12">
            <LoginAndRegisterForms />
        </div>
    )
}