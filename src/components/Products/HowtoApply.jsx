import Image from "next/image";
import { replaceText } from "@/utils/wund";
const HowtoApply = ({ data }) => {
    return (
        <section className="product-howto-apply">
            <div className="container">
                <h2>{data.title}</h2>
                <div className="product-howto-apply__list">
                    {data.list.map((item, index) => (
                        <div key={index} className="product-howto-apply__list__item">
                            <div className="product-howto-apply__list__item__number">
                                STEP {index + 1 > 9 ? index + 1 : `0${index + 1}`}
                            </div>
                            <div className="product-howto-apply__list__item__content">
                                <div className="product-howto-apply__list__item__content__top-area">
                                    <div className="product-howto-apply__list__item__content__top-area__image">
                                        <Image src={process.env.NEXT_PUBLIC_ASSET_URL + item.image} alt={item.description} fill />
                                    </div>
                                </div>
                                <div className="product-howto-apply__list__item__content__description">
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

export default HowtoApply;