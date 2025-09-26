import Image from "next/image";
import { replaceText } from "@/utils/wund";
const About = ({ dataParent, data }) => {
    return (
        <section className="product-about">
            <div className="container">
                <div className="product-about__image">
                    <Image src={process.env.NEXT_PUBLIC_ASSET_URL + data.image} alt={`${dataParent.name} About`} fill />
                </div>
                <div className="product-about__content">
                    <h2 dangerouslySetInnerHTML={{ __html: replaceText(dataParent.name) }} />
                    <div className="product-about__content__list">
                        {data.items.map((item, index) => (
                            <div key={index} className="product-about__content__item">
                                <div className="product-about__content__item__icon">
                                    <Image src={process.env.NEXT_PUBLIC_ASSET_URL + item.icon} alt={item.description} fill />
                                </div>
                                <div className="product-about__content__item__text">
                                    <p dangerouslySetInnerHTML={{ __html: replaceText(item.description) }} />
                                </div>
                            </div>
                        ))}
                    </div>
                    <p dangerouslySetInnerHTML={{ __html: replaceText(data.description) }} />
                </div>
            </div>
        </section>
    );
}

export default About;