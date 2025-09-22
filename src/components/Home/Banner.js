import Image from "next/image";
import Link from "next/link";
import { replaceText } from "@/utils/wund";
import { TextAnimation } from "@/utils/textAnimation";
const HomeBanner = ({ data }) => {
    return (
        <div className="home-banner"  data-aos="fade-in">
            <div className="home-banner__image" >
                <Image src={data.image} alt={data.title} fill className="hidden md:block" />
                <Image src={data.image_mobile} alt={data.title} fill className="block md:hidden" />
            </div>
            <div className="container"> 
                <div className="home-banner__content">
                    <TextAnimation delay={0.5}>
                        <h2 dangerouslySetInnerHTML={{ __html: replaceText(data.title) }} />
                    </TextAnimation>
                    <TextAnimation delay={0.6}>
                        <p dangerouslySetInnerHTML={{ __html: replaceText(data.description) }} />
                    </TextAnimation>
                    <div className="btn-area" data-aos="fade-up" data-aos-delay={800}>
                        <Link href={data.btn_url} className="btn btn-primary">{data.btn_text}</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeBanner;