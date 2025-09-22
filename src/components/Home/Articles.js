"use client";

import Image from "next/image";
import { replaceText } from "@/utils/wund";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
const Articles = ({ data }) => {
    const [currentArticle, setCurrentArticle] = useState(null);
    const { i18n } = useTranslation();
    const currentLocale = i18n.language;
    useEffect(() => {
        setCurrentArticle(data.list[0]._id);
    }, [data.list]);

    const handleArticleClick = (_id) => {
        setCurrentArticle(_id);
    };

    return (
        <section className="home-articles overflow-hidden">
            <div className="container">
                <h2 dangerouslySetInnerHTML={{ __html: replaceText(data.title) }} />
                <div className="home-articles__content">
                    <div className="home-articles__content__image" data-aos="fade-right" data-aos-delay={100}>
                        {currentArticle && 
                            data.list.map((item) => (
                                <Image key={item._id} className={`${currentArticle === item._id ? 'active' : ''}`} src={item.image} alt={item.title} fill />
                            ))
                        }
                    </div>
                    <div className="home-articles__content__list-container" data-aos="fade-left" data-aos-delay={100}>
                        <div className="home-articles__content__list">
                            {currentArticle && 
                                data.list.map((item, index) => (
                                    <div key={item._id}>
                                        <div className={`home-articles__content__list__item__image ${currentArticle === item._id ? 'active' : ''}`}>
                                            <img src={item.image} alt={item.title} />
                                        </div>
                                        <div key={item._id} className={`home-articles__content__list__item ${currentArticle === item._id ? 'active' : ''}`} onClick={() => handleArticleClick(item._id)} dangerouslySetInnerHTML={{ __html: replaceText(item.title) }}  />
                                    </div>
                                ))
                            }
                        </div>
                        <div className="btn-area" data-aos="fade-up" data-aos-delay={100}>
                            <Link href={'/'} className="btn btn-secondary">{currentLocale === "en" ? "Learn More" : "Pelajari Selengkapnya"}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Articles;