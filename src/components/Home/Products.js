import Image from "next/image";
import { replaceText } from "@/utils/wund";
import Link from "next/link";
import Slider from "react-slick";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { TextAnimation } from "@/utils/textAnimation";
import { removeSpecificTags } from "@/utils/CleanupHtml";

const Products = ({ data }) => {
    console.log(data);
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
        arrows: false,
        dots: false, // Disable default dots since we're using custom ones
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
        <div className="home-products" id={currentLocale === "en" ? "products" : "produk"}>
            <div className="container">
                <TextAnimation delay={0.1}>
                    <h2 dangerouslySetInnerHTML={{ __html: replaceText(removeSpecificTags(data.title, ['p'])) }} />
                </TextAnimation>
                <div className="home-products__items slider-container" data-aos="fade-up" data-aos-delay={100}>
                    <Slider ref={sliderRef} {...settings}>
                        {data.items.map((item, index) => (
                            <div key={index} className="home-products__item">
                                <Image src={process.env.NEXT_PUBLIC_ASSET_URL + item.image} alt={item.title} fill className="!w-full !h-auto !object-contain !relative" />
                                <div className="btn-area">
                                    <Link href={`/${currentLocale}/${currentLocale === "en" ? "products" : "produk"}/${item.slug}`} className="btn btn-primary">{item.title}</Link>
                                </div>
                            </div>
                        ))}
                    </Slider>
                    <div className="controls">
                        <button onClick={goToPrev}>
                            <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 36 36" fill="none">
                                <path d="M0.810059 18.36C0.810059 28 8.70009 35.8901 18.3401 35.8901C27.9801 35.8901 35.8701 28 35.8701 18.36C35.8701 8.72005 27.9801 0.830078 18.3401 0.830078C8.70009 0.830078 0.810059 8.72005 0.810059 18.36ZM9.70007 18.86C9.57007 18.48 9.57007 18.11 9.70007 17.86C9.70007 17.73 9.83007 17.61 9.95007 17.48L14.9601 12.47C15.4601 11.97 16.2101 11.97 16.7101 12.47C17.2101 12.97 17.2101 13.72 16.7101 14.22L13.8301 17.1H27.11C27.86 17.1 28.36 17.6 28.36 18.35C28.36 19.1 27.86 19.6 27.11 19.6H13.8301L16.7101 22.48C17.2101 22.98 17.2101 23.73 16.7101 24.23C16.4601 24.48 16.2101 24.61 15.8301 24.61C15.4501 24.61 15.2001 24.48 14.9501 24.23L9.94006 19.22C9.81006 19.09 9.69006 18.9701 9.69006 18.8401L9.70007 18.86Z" fill="#DE0026" />
                            </svg>
                        </button>
                        <div className="dots">
                            {data.items.map((_, index) => (
                                <button
                                    key={index}
                                    className={`dot ${currentSlide === index ? 'active' : ''}`}
                                    onClick={() => goToSlide(index)}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                        <button onClick={goToNext}>
                            <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 36 36" fill="none">
                                <path d="M17.6799 0.820312C8.03987 0.820312 0.149902 8.71028 0.149902 18.3503C0.149902 27.9903 8.03987 35.8803 17.6799 35.8803C27.3199 35.8803 35.2099 27.9903 35.2099 18.3503C35.2099 8.71028 27.3199 0.820312 17.6799 0.820312ZM26.0699 19.2303L21.0599 24.2403C20.8099 24.4903 20.5599 24.6203 20.1799 24.6203C19.7999 24.6203 19.5499 24.4903 19.2999 24.2403C18.7999 23.7403 18.7999 22.9903 19.2999 22.4903L22.1799 19.6103H8.8999C8.1499 19.6103 7.6499 19.1103 7.6499 18.3603C7.6499 17.6103 8.1499 17.1103 8.8999 17.1103H22.1799L19.2999 14.2303C18.7999 13.7303 18.7999 12.9803 19.2999 12.4803C19.7999 11.9803 20.5499 11.9803 21.0499 12.4803L26.0599 17.4903C26.1899 17.6203 26.3099 17.7403 26.3099 17.8703C26.4399 18.1203 26.4399 18.5003 26.3099 18.8703C26.3099 19.0003 26.1799 19.1203 26.0599 19.2503L26.0699 19.2303Z" fill="#DE0026" />
                            </svg>

                        </button>
                    </div>
                    <div className="prev-area" onClick={goToPrev}></div>
                    <div className="next-area" onClick={goToNext}></div>
                </div>
            </div>
        </div>
    );
}

export default Products;