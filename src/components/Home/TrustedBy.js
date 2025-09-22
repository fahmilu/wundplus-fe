import Image from "next/image";
import { replaceText } from "@/utils/wund";
const TrustedBy = ({ data }) => {
    return (
        <section className="home-trusted-by">
            <div className="container">
                <div className="home-trusted-by__items">
                    {data.list.map((item, index) => (
                        <div key={index} className="home-trusted-by__items__item" data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className="home-trusted-by__items__item__label">
                                {item.label}
                            </div>
                            <div className="home-trusted-by__items__item__content">
                                <div className="home-trusted-by__items__item__image">
                                    <Image src={item.image} alt={item.description} fill />
                                </div>
                                <div className="home-trusted-by__items__item__count">
                                    {item.count}
                                </div>
                                <div className="home-trusted-by__items__item__description" dangerouslySetInnerHTML={{ __html: replaceText(item.description) }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TrustedBy;