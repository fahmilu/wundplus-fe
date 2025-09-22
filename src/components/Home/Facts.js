import Image from "next/image";
import { replaceText } from "@/utils/wund";
import { TextAnimation } from "@/utils/textAnimation";
const Facts = ({ data }) => {
    return (
        <section className="home-facts">
            <div className="container">
                <div className="home-facts__items">
                    {data.list.map((item, index) => (
                        <div key={index} className="home-facts__items__item">
                            <div className="home-facts__items__item__image" data-aos="fade-up" data-aos-delay={100}>
                                <Image src={item.image} alt={item.description || `fact image`} fill />
                            </div>
                            <TextAnimation delay={0.1}>
                                <div className="home-facts__items__item__description" dangerouslySetInnerHTML={{ __html: replaceText(item.description) }} />
                            </TextAnimation>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Facts;