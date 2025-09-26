import Image from "next/image";
import { replaceText } from "@/utils/wund";
const Advantage = ({ data }) => {
    return (
        <section className="product-advantage">
            {data.image && (
                <div className="product-advantage__image">
                    <Image src={process.env.NEXT_PUBLIC_ASSET_URL + data.image} alt={data.title} fill className="object-cover" />
                </div>
            )}
            <div className="relative">
                <div className="label-title" dangerouslySetInnerHTML={{ __html: replaceText(data.title) }} />
                <div className="container">
                    <div className="product-advantage__content">
                        <div className="product-advantage__content__description" dangerouslySetInnerHTML={{ __html: replaceText(data.description) }} />
                    </div>
                    {data.clinical_data && (
                        <div className="product-advantage__content__clinical-data">
                            <h2 className="product-advantage__content__clinical-data__title" dangerouslySetInnerHTML={{ __html: replaceText(data.clinical_data.title) }} />
                            <div className="product-advantage__content__clinical-data__contents">
                                {data.clinical_data.list.map((item, index) => (
                                    <div key={index} className="product-advantage__content__clinical-data__content">
                                        <div className="product-advantage__content__clinical-data__content__image">
                                            <Image src={process.env.NEXT_PUBLIC_ASSET_URL + item.image} alt={item.description} fill />
                                        </div>
                                        <div className="product-advantage__content__clinical-data__content__description" dangerouslySetInnerHTML={{ __html: replaceText(item.description) }} />
                                    </div>
                                ))}
                            </div>
                            {data.clinical_data.note && (
                                <div className="product-advantage__content__clinical-data__note" dangerouslySetInnerHTML={{ __html: replaceText(data.clinical_data.note) }} />
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Advantage;