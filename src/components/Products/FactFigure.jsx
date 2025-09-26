import Image from "next/image";
import { replaceText } from "@/utils/wund";
import { removeSpecificTags } from "@/utils/CleanupHtml";
const FactFigure = ({ data }) => {
    return (
        <section className="product-fact-figure">
            <div className="container">
                <h2>{removeSpecificTags(data.title, ['p'])}</h2>
                <div className={`product-fact-figure__items ${data.items.length > 4 && 'odd-grid'}`}>
                    {data.items.map((item, index) => (
                        <div key={index} className="product-fact-figure__items__item group">
                            <div className="product-fact-figure__items__item__image">
                                <Image src={process.env.NEXT_PUBLIC_ASSET_URL + item.image} className="!opacity-100 group-hover:!opacity-0" alt={item.description} fill />
                                <Image src={process.env.NEXT_PUBLIC_ASSET_URL + item.image_hover} className="!opacity-0 group-hover:!opacity-100" alt={item.description} fill />
                            </div>
                            <div className="product-fact-figure__items__item__description" dangerouslySetInnerHTML={{ __html: replaceText(item.description) }} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FactFigure;