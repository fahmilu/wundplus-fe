import Image from "next/image";
import { replaceText } from "@/utils/wund";
const HowItWorks = ({ data }) => {
    return (
        <section className="product-how-it-works">
            <div className="container">
                <h2>{data.title}</h2>
                <div className="product-how-it-works__list">
                    {data.list.map((item, index) => (
                        <div key={index} className="product-how-it-works__list__item">
                            <div className="product-how-it-works__list__item__image">
                                <Image src={process.env.NEXT_PUBLIC_ASSET_URL + item.image} alt={item.description} fill />
                            </div>
                            <div className="product-how-it-works__list__item__description">
                                <h4>{item.title}</h4>
                                <p dangerouslySetInnerHTML={{ __html: replaceText(item.description) }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;