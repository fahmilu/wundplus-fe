"use client";

import { Desktop, Mobile } from "@/components/Nav";
import { getLocalizedNavigationItems } from "@/utils/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Header({ locale }) {

    const navItems = getLocalizedNavigationItems(locale);

    return (
        <header className="header">
            <div className="container">
                <Link href="/" className="header__logo" data-aos="fade-down">
                    <Image src="/imgs/logo.svg" alt="Logo" fill />
                </Link>
                <Desktop navItems={navItems} />
            </div>
        </header>
    );
}