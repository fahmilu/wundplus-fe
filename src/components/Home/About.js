import Image from "next/image";
import { replaceText } from "@/utils/wund";
import { useTranslation } from "react-i18next";
import { TextAnimation } from "@/utils/textAnimation";
const HomeAbout = ({ data }) => {
    const { i18n } = useTranslation();
    const currentLocale = i18n.language;
    return (
        <section id={currentLocale === "en" ? "about-us" : "tentang-kami"} className="home-about">
            <div className="home-about__image" data-aos="fade-right" data-aos-delay={100}>
                <Image src={data.image} alt={data.title} fill className="hidden md:block" />
                <Image src={data.image_mobile} alt={data.title} fill className="block md:hidden" />
            </div>
            <div className="container" data-aos="fade-in" data-aos-delay={100}> 
                <div className="home-about__content">
                    <TextAnimation delay={0.1}>
                        <h2 dangerouslySetInnerHTML={{ __html: replaceText(data.title) }} />
                    </TextAnimation>
                    <TextAnimation delay={0.2}>
                        <div className="home-about__content__description" dangerouslySetInnerHTML={{ __html: replaceText(data.description) }} />
                    </TextAnimation>
                    <Image src={data.image_icon} data-aos="fade-up" data-aos-delay={300} alt={data.title || `image icon`} className="home-about__content__image" fill />
                </div>
            </div>
        </section>
    );
}

export default HomeAbout;