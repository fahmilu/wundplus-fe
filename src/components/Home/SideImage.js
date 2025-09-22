import Image from "next/image";
import { replaceText } from "@/utils/wund";
const HomeSideImage = ({ data }) => {
    return (
        <div className="home-side-image relative overflow-hidden">
            <div className="label-title" data-aos="fade-up" data-aos-delay={100} dangerouslySetInnerHTML={{ __html: replaceText(data.title) }} />
            <div className="container">
                {data.list.map((item, index) => (
                    <div key={index} className="home-side-image__item">
                        <div className="home-side-image__item__image-container"  data-aos="fade-right" data-aos-delay={100}>
                            {item.title && <h3 className="home-side-image__item__image-container__title">{replaceText(item.title)}</h3>}
                            <div className="home-side-image__item__image">
                                <Image src={item.image} alt={item.title || `image`} fill />
                            </div>
                        </div>
                        <div className="home-side-image__item__content" data-aos="fade-left" data-aos-delay={100}>
                            {item.image_description && (
                                <div className="home-side-image__item__content__image" data-aos="fade-up" data-aos-delay={100}>
                                    <Image src={item.image_description} alt={item.title || `image description`} fill />
                                </div>
                            )}
                            <div className="home-side-image__item__content__description" dangerouslySetInnerHTML={{ __html: replaceText(item.description) }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomeSideImage;