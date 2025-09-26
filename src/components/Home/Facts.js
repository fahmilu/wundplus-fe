import ImageWithFallback from "../ImagewFallback";
import { replaceText } from "@/utils/wund";
import { TextAnimation } from "@/utils/textAnimation";
const Facts = ({ data }) => {
    return (
        <section className="home-facts">
            <div className="container">
                <div className="home-facts__items">
                    <div className="home-facts__items__item">
                        {data.image_1 && (
                            <div className="home-facts__items__item__image" data-aos="fade-up" data-aos-delay={100}>
                                <ImageWithFallback src={process.env.NEXT_PUBLIC_ASSET_URL + data.image_1} alt={data.description_1 || `fact image`} fill />
                            </div>
                        )}
                        {data.description_1 && (
                            <TextAnimation delay={0.2}>
                                <div className="home-facts__items__item__description" dangerouslySetInnerHTML={{ __html: replaceText(data.description_1) }} />
                            </TextAnimation>
                        )}
                    </div>
                    <div className="home-facts__items__item">
                        {data.image_2 && (
                            <div className="home-facts__items__item__image" data-aos="fade-up" data-aos-delay={100}>
                                <ImageWithFallback src={process.env.NEXT_PUBLIC_ASSET_URL + data.image_2} alt={data.description_2 || `fact image`} fill />
                            </div>
                        )}
                        {data.description_2 && (
                            <TextAnimation delay={0.2}>
                                <div className="home-facts__items__item__description" dangerouslySetInnerHTML={{ __html: replaceText(data.description_2) }} />
                            </TextAnimation>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Facts;