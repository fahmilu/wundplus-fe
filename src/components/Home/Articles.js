"use client";

import ImageWithFallback from "../ImagewFallback";
import { replaceText } from "@/utils/wund";
import Link from "next/link";
import { useState, useEffect } from "react";
import { TextAnimation } from "@/utils/textAnimation";
import { removeSpecificTags } from "@/utils/CleanupHtml";
import { useTranslation } from "react-i18next";
const Articles = ({ data }) => {
    const [currentArticle, setCurrentArticle] = useState(null);
    const { i18n } = useTranslation();
    const currentLocale = i18n.language;
    useEffect(() => {
        setCurrentArticle(data.items[0].id);
    }, [data.items]);

    const handleArticleClick = (id) => {
        setCurrentArticle(id);
    };

    return (
        <section className="home-articles overflow-hidden">
            <div className="container">
                <h2 dangerouslySetInnerHTML={{ __html: replaceText(data.title) }} data-aos="fade-up" data-aos-delay={100} />
                <div className="home-articles__content">
                    <div className="home-articles__content__image" data-aos="fade-right" data-aos-delay={100}>
                        {currentArticle !== null && 
                            data.items.map((item) => (
                                <ImageWithFallback key={item.id} className={`${currentArticle === item.id ? 'active' : ''}`} src={process.env.NEXT_PUBLIC_ASSET_URL + item.image} alt={item.description} fill />
                            ))
                        }
                    </div>
                    <div className="home-articles__content__list-container" data-aos="fade-left" data-aos-delay={100}>
                        <div className="home-articles__content__list">
                            {currentArticle !== null && 
                                data.items.map((item, index) => (
                                    <div key={item.id}>
                                        <div className={`home-articles__content__list__item__image ${currentArticle === item.id ? 'active' : ''}`}>
                                            <img src={process.env.NEXT_PUBLIC_ASSET_URL + item.image} alt={item.description} />
                                        </div>
                                        <div key={item.id} className={`home-articles__content__list__item ${currentArticle === item.id ? 'active' : ''}`} onClick={() => handleArticleClick(item.id)} dangerouslySetInnerHTML={{ __html: replaceText(item.description) }}  />
                                    </div>
                                ))
                            }
                        </div>
                        <div className="btn-area" data-aos="fade-up" data-aos-delay={100}>
                            <Link href={currentLocale === "en" ? '/en/articles' : '/id/artikel'} className="btn btn-secondary">{removeSpecificTags(data.button_label, ['p'])}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Articles;