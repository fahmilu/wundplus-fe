"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslation } from "react-i18next";
export default function Desktop({ navItems }) {
    const pathname = usePathname();
    const { i18n } = useTranslation();
    return (
        <nav className="hidden lg:flex" data-aos="fade-down">
            {navItems.map((item) => (
                <Link key={item.key} href={item.href} className={`nav-link`}>{item.label}</Link>
            ))}
            <div className="dropdown dropdown-end dropdown-hover">
                <div tabIndex={0} className="nav-link">
                    <span>{i18n.language === 'en' ? 'Shop' : 'Belanja'}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={10} viewBox="0 0 16 10" fill="none">
                        <path d="M14.73 1.11035L7.94995 8.40035L1.18005 1.11035" stroke="white" strokeWidth="1.81" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <ul tabIndex={0} className="dropdown-content">
                    <li><a href="https://tk.tokopedia.com/ZSANsnD9P/" target="_blank" className="nav-link">
                        <img src="/imgs/tokopedia.png" alt="Tokopedia" />
                        Tokopedia
                    </a></li>
                    <li><a href="https://www.tiktok.com/@wundplus" target="_blank" className="nav-link">
                        <img src="/imgs/shopee.png" alt="Shopee" />
                        Shopee
                    </a></li>
                    <li><a href="https://shopee.co.id/universal-link/wundplusindonesia" target="_blank" className="nav-link">
                        <img src="/imgs/tiktok.png" alt="Tiktop Shop" />
                        Tiktop Shop
                    </a></li>
                </ul>
            </div>
            <LanguageSwitcher />
        </nav>
    );
}