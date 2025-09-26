import ImageWithFallback from "../ImagewFallback";
import { replaceText } from "@/utils/wund";
import { TextAnimation } from "@/utils/textAnimation";
const TrustedBy = ({ data }) => {
    return (
        <section className="home-trusted-by">
            <div className="container">
                <div className="home-trusted-by__items">
                    {data.items.map((item, index) => (
                        <div key={index} className="home-trusted-by__items__item" data-aos="fade-up" data-aos-delay={index * 100}>
                            <TextAnimation delay={0.1}>
                                <div className="home-trusted-by__items__item__label" dangerouslySetInnerHTML={{ __html: replaceText(item.title) }} />
                            </TextAnimation>
                            <div className="home-trusted-by__items__item__content">
                                <div className="home-trusted-by__items__item__image">
                                    <ImageWithFallback src={process.env.NEXT_PUBLIC_ASSET_URL + item.image} alt={item.description} fill />
                                </div>
                                <div className="home-trusted-by__items__item__count">
                                    {item.count}
                                </div>
                                <TextAnimation delay={0.2}>
                                    <div className="home-trusted-by__items__item__description" dangerouslySetInnerHTML={{ __html: replaceText(item.description) }} />
                                </TextAnimation>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TrustedBy;