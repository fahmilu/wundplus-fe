import Image from "next/image";
import { replaceText } from "@/utils/wund";
const HowItWorksTwo = ({ data }) => {
    return (
        <section className="product-how-it-works-two">
            <div className="container">
                <h2>{data.title}</h2>
                <div className="product-how-it-works-two__list">
                    {data.list.map((item, index) => (
                        <div key={index} className="product-how-it-works-two__list__item">
                            <div className="product-how-it-works-two__list__item__number">
                                {index + 1 > 9 ? index + 1 : `0${index + 1}`}
                            </div>
                            <div className="product-how-it-works-two__list__item__content">
                                <div className="product-how-it-works-two__list__item__content__top-area">
                                    <div className="product-how-it-works-two__list__item__content__top-area__image">
                                        <Image src={item.image} alt={item.description} fill />
                                    </div>
                                </div>
                                <div className="product-how-it-works-two__list__item__content__description">
                                    <p dangerouslySetInnerHTML={{ __html: replaceText(item.description) }} />
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