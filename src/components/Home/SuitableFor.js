import ImageWithFallback from "../ImagewFallback";
import { replaceText } from "@/utils/wund";
import { TextAnimation } from "@/utils/textAnimation";
import { removeSpecificTags } from "@/utils/CleanupHtml";

const SuitableFor = ({ data }) => {
    return (
        <div className="home-suitable-for relative">
            <div className="container">
                <TextAnimation delay={0.1}>
                    <h2 dangerouslySetInnerHTML={{ __html: replaceText(removeSpecificTags(data.title, ['p'])) }} />
                </TextAnimation>
                <div className="home-suitable-for__items" data-aos="fade-up" data-aos-delay={100}>
                    <div className="home-suitable-for__items__large">
                        {data.items.slice(0, 1).map((item, index) => (
                            <div key={index} className="home-suitable-for__item">
                                <div className="home-suitable-for__item__image">
                                    <ImageWithFallback src={process.env.NEXT_PUBLIC_ASSET_URL + item.image} alt={item.label} fill />
                                </div>
                                <div className="home-suitable-for__item__label">
                                    {item.label}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="home-suitable-for__items__small">
                        {data.items.slice(1, data.items.length).map((item, index) => (
                            <div key={index} className="home-suitable-for__item">
                                <div className="home-suitable-for__item__image">
                                    <ImageWithFallback src={process.env.NEXT_PUBLIC_ASSET_URL + item.image} alt={item.label} fill />
                                </div>
                                <div className="home-suitable-for__item__label">
                                    {item.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SuitableFor;
