"use client";

import { useRouter, usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const { i18n } = useTranslation();

  const changeLanguage = (locale) => {
    // Remove current locale from pathname
    const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, "") || "/";
    // Navigate to new locale
    router.push(`/${locale}${pathWithoutLocale}`);
  };

  return (
    <div className="dropdown dropdown-end dropdown-hover">
      <div tabIndex={0} className="nav-link">
        <span>{i18n.language === 'en' ? 'Language' : 'Bahasa'}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={10}
          viewBox="0 0 16 10"
          fill="none"
        >
          <path
            d="M14.73 1.11035L7.94995 8.40035L1.18005 1.11035"
            stroke="white"
            strokeWidth="1.81"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <ul tabIndex={0} className="dropdown-content">
        <li><a href="#" onClick={() => changeLanguage('en')} className="nav-link">English</a></li>
        <li><a href="#" onClick={() => changeLanguage('id')} className="nav-link">Indonesia</a></li>
      </ul>

    </div>
  );
}
