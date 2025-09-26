"use client";
import Image from "next/image";
import { replaceText } from "@/utils/wund";
import Featured from "./Featured";
import { useTranslation } from "react-i18next";
const ArticlesHeader = ({ data, featuredArticles }) => {
    const { i18n } = useTranslation();
    const currentLocale = i18n.language;
    return (
        <section className="articles-header">
            <Image src={data.image} alt={data.title} fill />
            <div className="container">
                <div className="articles-header__content">
                    <h1 dangerouslySetInnerHTML={{ __html: replaceText(data.title) }} />
                    <p dangerouslySetInnerHTML={{ __html: replaceText(data.description) }} />
                </div>
                <Featured data={featuredArticles} isLandscape={true} title={currentLocale === 'id' ? 'Artikel Pilihan' : 'Featured Articles'} />
            </div>
        </section>
    );
}

export default ArticlesHeader;