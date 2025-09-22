"use client"
import Image from "next/image";
import { replaceText } from "@/utils/wund";
import Slider from "react-slick";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { TextAnimation } from "@/utils/textAnimation";
const Testimonials = ({ data }) => {

    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const { i18n } = useTranslation();
    const currentLocale = i18n.language;

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 1,
        speed: 500,
        fade: true,
        arrows: true,
        adaptiveHeight: false,
        dots: false,
        beforeChange: (current, next) => setCurrentSlide(next),
    };

    const goToPrev = () => {
        sliderRef.current?.slickPrev();
    };

    const goToNext = () => {
        sliderRef.current?.slickNext();
    };

    const goToSlide = (slideIndex) => {
        sliderRef.current?.slickGoTo(slideIndex);
    };
    return (
        <section className="home-testimonials">
            <div className="container">
                <TextAnimation delay={0.1}>
                    <h2 dangerouslySetInnerHTML={{ __html: replaceText(data.title) }} />
                </TextAnimation>
                <div className="home-testimonials__items slider-container" data-aos="fade-up" data-aos-delay={100}>
                    <Slider ref={sliderRef} {...settings}>
                        {data.list.map((item, index) => (
                            <div key={index} className="slick-slide__content">
                                <div className="slick-slide__content__header">
                                    <div className="slick-slide__content__header__content">
                                        <div className="slick-slide__content__header__content__name">{item.name}</div>
                                        <p className="slick-slide__content__header__content__role">{currentLocale === "en" ? item.role : "Testimoni " + item.role}</p>
                                    </div>
                                    <div className="slick-slide__content__header__avatar">
                                        <Image src={item.image} alt={item.name} fill />
                                    </div>
                                </div>
                                <div className="slick-slide__content__description" dangerouslySetInnerHTML={{ __html: replaceText(`“${item.description}”`) }} />
                            </div>
                        ))} 
                    </Slider>
                    <div className="controls">
                        <div className="dots">
                            {data.list.map((_, index) => (
                                <button
                                    key={index}
                                    className={`dot ${currentSlide === index ? 'active' : ''}`}
                                    onClick={() => goToSlide(index)}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;