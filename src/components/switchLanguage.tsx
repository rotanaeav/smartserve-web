"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

export default function SwitchLanguage() {
    const { i18n } = useTranslation()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true)
    }, [])

    const handleChangeLanguage = () => {
        const lang = i18n.language === 'en' ? 'km' : 'en'
        i18n.changeLanguage(lang)
        localStorage.setItem('i18nextLng', lang)
    }

    if (!mounted) {
        // Render an empty matching circle button to prevent hydration layout shift
        return (
            <div className="md:w-10 md:h-10 md:rounded-full md:border md:border-[#e8d5c8] md:bg-white md:shadow-xs" />
        )
    }

    return (
        <button
            onClick={handleChangeLanguage}
            className="cursor-pointer md:w-10 md:h-10 md:rounded-full flex items-center justify-center md:hover:bg-[#fff0e8] active:scale-95 transition-all md:border md:border-[#e8d5c8] md:bg-white md:shadow-xs"
            aria-label="Switch Language"
        >
            <div className="w-6.5 h-6.5 overflow-hidden rounded-full relative border border-gray-100 shrink-0">
                {i18n.language === 'en' ? (
                    <Image src="/kh-flag.png" alt='Khmer flag' fill priority className="object-cover" sizes="26px" />
                ) : (
                    <Image src="/en-flag.png" alt='English flag' fill priority className="object-cover" sizes="26px" />
                )}
            </div>
        </button>
    )
}