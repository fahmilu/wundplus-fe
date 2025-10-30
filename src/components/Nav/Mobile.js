"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslation } from "react-i18next";

export default function Mobile({ navItems }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    const { i18n } = useTranslation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            {/* Hamburger Button */}
            <button 
                className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 z-50"
                onClick={toggleMenu}
                aria-label="Toggle mobile menu"
            >
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div 
                    className="fixed inset-0 bg-white bg-opacity-50 z-40 lg:hidden"
                    onClick={closeMenu}
                ></div>
            )}

            {/* Mobile Menu */}
            <div className={`fixed top-0 right-0 h-full w-full max-w-[320px] bg-wund-red transform transition-transform duration-300 ease-in-out z-50 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col h-full">
                    {/* Menu Header */}
                    <div className="flex justify-end items-center p-4">
                        <button 
                            onClick={closeMenu}
                            className="w-12 h-12 flex items-center justify-center"
                            aria-label="Close menu"
                        >
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex px-6 pt-2 pb-10 flex-col justify-between flex-1">
                        <ul className="space-y-3">
                            {navItems.map((item) => (
                                <li key={item.key}>
                                    <Link 
                                        href={item.href} 
                                        className="block text-lg font-medium text-white"
                                        onClick={closeMenu}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                            
                            {/* Shop Dropdown */}
                            <li>
                                <div className="space-y-3">
                                    <div className="text-lg font-medium text-white">
                                        {i18n.language === 'en' ? 'Shop' : 'Belanja'}
                                    </div>
                                    <ul className="space-y-3">
                                        <li>
                                            <a 
                                                href="https://tk.tokopedia.com/ZSANsnD9P/" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-3 text-white"
                                            >
                                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                                    <img src="/imgs/tokopedia.png" alt="Tokopedia" className="w-[60%] h-[60%] object-contain" />
                                                </div>
                                                Tokopedia
                                            </a>
                                        </li>
                                        <li>
                                            <a 
                                                href="https://shopee.co.id/universal-link/wundplusindonesia" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-3 text-white"
                                            >
                                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                                    <img src="/imgs/shopee.png" alt="Shopee" className="w-[60%] h-[60%] object-contain" />
                                                </div>
                                                Shopee
                                            </a>
                                        </li>
                                        <li>
                                            <a 
                                                href="https://www.tiktok.com/@wundplus" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-3 text-white"
                                            >
                                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                                    <img src="/imgs/tiktok.png" alt="Tiktok Shop" className="w-[60%] h-[60%] object-contain" />
                                                </div>
                                                Tiktok Shop
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                            </li>
                        </ul>

                        <LanguageSwitcher />
                    </nav>

                </div>
            </div>
        </>
    );
}