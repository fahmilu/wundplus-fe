import Image from "next/image";
import { replaceText } from "@/utils/wund";
const About = ({ data }) => {
    return (
        <section className="product-about">
            <div className="container">
                <div className="product-about__image">
                    <Image src={process.env.NEXT_PUBLIC_ASSET_URL + data.image} alt={data.title} fill />
                </div>
                <div className="product-about__content">
                    <h2 dangerouslySetInnerHTML={{ __html: replaceText(data.title) }} />
                    <div className="product-about__content__list">
                        {data.list.map((item, index) => (
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