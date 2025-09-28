import Image from "next/image";
import { replaceText } from "@/utils/wund";
import { removeSpecificTags } from "@/utils/CleanupHtml";
const HowItWorksTwo = ({ data }) => {
    console.log(data);
    return (
        <section className="product-how-it-works-two">
            <div className="container">
                <h2>{removeSpecificTags(data.title, ['p'])}</h2>
                <div className="product-how-it-works-two__list">
                    {data.items.map((item, index) => (
                        <div key={index} className="product-how-it-works-two__list__item">
                            <div className="product-how-it-works-two__list__item__number">
                                {index + 1 > 9 ? index + 1 : `0${index + 1}`}
                            </div>
                            <div className="product-how-it-works-two__list__item__content">
                                <div className="product-how-it-works-two__list__item__content__top-area">
                                    <div className="product-how-it-works-two__list__item__content__top-area__image">
                                        <Image src={process.env.NEXT_PUBLIC_ASSET_URL + item.image} alt={item.title} fill />
                                    </div>
                                </div>
                                <div className="product-how-it-works-two__list__item__content__description">
                                    <p dangerouslySetInnerHTML={{ __html: replaceText(item.title) }} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HowItWorksTwo;