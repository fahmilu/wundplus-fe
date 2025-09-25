'use client';
import Image from "next/image";
import { replaceText } from "@/utils/wund";
import Link from "next/link";
import { useTranslation } from "react-i18next";
const Banner = ({ data }) => {
    console.log(data);
    const { i18n } = useTranslation();
    const currentLocale = i18n.language;
    return (
        <div className="content content__banner">
            {data.hero_image && (
                <Image src={data.hero_image} alt={data.title} fill />
            )}
            <div className="container">
                <Link href={`/${currentLocale === 'id' ? 'id/artikel' : 'en/articles'}`} className="content__banner__back">
                    {currentLocale === 'id' ? '< Kembali' : '< Back'}
                </Link>
                <h2 dangerouslySetInnerHTML={{ __html: replaceText(data.title) }} />
                <div className="bottom">
                    <div className="tags">
                        {data.tags.map((tag) => (
                            <span key={tag.id} className="tags__tag">{tag.name}</span>
                        ))}
                    </div>
                    <div className="bottom__date">
                        <svg xmlns="http://www.w3.org/2000/svg" width={19} height={19} viewBox="0 0 19 19" fill="none">
                            <path d="M8.95997 0.459961L9.90998 0.479919C16.97 0.869919 20.95 8.88993 16.89 14.7399C13.26 19.9799 5.51999 19.9599 1.88999 14.7299C-2.19001 8.83992 1.90997 0.79991 8.95997 0.46991V0.459961ZM8.79996 2.50995C5.83996 2.66995 3.23999 5.01997 2.50999 7.83997C2.25999 8.79997 2.25999 10.2799 2.50999 11.2399C3.87999 16.6299 10.58 18.4999 14.49 14.4699C17.03 11.8499 17.17 7.62996 14.72 4.89996C13.15 3.14996 11.16 2.37995 8.80997 2.50995H8.79996Z" fill="#353535" />
                            <path d="M10.34 9.40991L14.05 10.8499C14.68 11.1699 14.83 11.9699 14.37 12.5099C14.09 12.8399 13.77 12.8699 13.35 12.8699C11.95 12.3199 10.51 11.8399 9.13002 11.2399C8.94002 11.1599 8.68002 11.0799 8.54002 10.9199C8.44002 10.8099 8.17001 10.3599 8.15001 10.2199C8.13001 10.0599 8.17003 9.78992 8.17003 9.60992C8.17003 8.86992 8.17003 8.11994 8.17003 7.37994C8.17003 6.70994 8.12003 5.95993 8.17003 5.30993C8.24003 4.35993 9.45001 4.01993 10.06 4.73993C10.37 5.09993 10.27 5.49995 10.29 5.94995C10.29 5.99995 10.31 6.04992 10.31 6.10992C10.34 7.20992 10.31 8.30992 10.33 9.41992L10.34 9.40991Z" fill="#353535" />
                        </svg>
                        <span>{new Date(data.published_date).toLocaleDateString(currentLocale, { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;