import ImageWithFallback from "../ImagewFallback";
import { replaceText } from "@/utils/wund";
import { useTranslation } from "react-i18next";
import { TextAnimation } from "@/utils/textAnimation";
import { removeSpecificTags } from "@/utils/CleanupHtml";

const HomeAbout = ({ data }) => {
    const { i18n } = useTranslation();
    const currentLocale = i18n.language;
    return (
        <section id={currentLocale === "en" ? "about-us" : "tentang-kami"} className="home-about">
            <div className="home-about__image" data-aos="fade-right" data-aos-delay={100}>
                <ImageWithFallback src={process.env.NEXT_PUBLIC_ASSET_URL + data.image} alt={data.title} fill className="hidden md:block" />
                <ImageWithFallback src={process.env.NEXT_PUBLIC_ASSET_URL + data.image_mobile || `/imgs/home/about-mobile.jpg`} alt={data.title} fill className="block md:hidden" />
            </div>
            <div className="container" data-aos="fade-in" data-aos-delay={100}> 
                <div className="home-about__content">
                    <TextAnimation delay={0.1}>
                        <h2 dangerouslySetInnerHTML={{ __html: replaceText(removeSpecificTags(data.title, ['p'])) }} />
                    </TextAnimation>
                    <TextAnimation delay={0.2}>
                        <div className="home-about__content__description" dangerouslySetInnerHTML={{ __html: replaceText(data.description) }} />
                    </TextAnimation>
                    <ImageWithFallback src={process.env.NEXT_PUBLIC_ASSET_URL + data.image_icon} data-aos="fade-up" data-aos-delay={300} alt={data.title || `image icon`} className="home-about__content__image" fill />
                </div>
            </div>
        </section>
    );
}

export default HomeAbout;