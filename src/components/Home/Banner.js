import ImageWithFallback from "../ImagewFallback";
import Link from "next/link";
import { replaceText } from "@/utils/wund";
import { removeSpecificTags } from "@/utils/CleanupHtml";
import { TextAnimation } from "@/utils/textAnimation";
const HomeBanner = ({ data }) => {
    return (
        <div className="home-banner"  data-aos="fade-in">
            <div className="home-banner__image" >
                <ImageWithFallback src={process.env.NEXT_PUBLIC_ASSET_URL + data.image} alt={data.title} fill className="hidden md:block" />
                <ImageWithFallback src={data.image_mobile ? process.env.NEXT_PUBLIC_ASSET_URL + data.image_mobile : '/imgs/home-mobile-new.jpg'} alt={data.title} fill className="block md:hidden" />
            </div>
            <div className="container"> 
                <div className="home-banner__content">
                    <TextAnimation delay={0.5}>
                        <h2 dangerouslySetInnerHTML={{ __html: replaceText(removeSpecificTags(data.title, ['p'])) }} />
                    </TextAnimation>
                    <TextAnimation delay={0.6}>
                        <p dangerouslySetInnerHTML={{ __html: replaceText(data.description) }} />
                    </TextAnimation>
                    <div className="btn-area" data-aos="fade-up" data-aos-delay={800}>
                        <Link href={data.btn_url || '#about-us'} className="btn btn-primary">{ removeSpecificTags(data.btn_txt, ['p'])}</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeBanner;