import Image from "next/image";
import { replaceText } from "@/utils/wund";
const ProductsBanner = ({ dataParent, data }) => {
    return (
        <>
            <section className="product-banner">
                <div className="product-banner__image">
                    <Image src={process.env.NEXT_PUBLIC_ASSET_URL + data.banner} alt={data.title} fill />
                </div>
                <div className="container">
                    <div className="product-banner__content">
                        <h2 dangerouslySetInnerHTML={{ __html: replaceText(data.lead) }} />
                        <p dangerouslySetInnerHTML={{ __html: replaceText(data.description) }} />
                    </div>
                </div>
            </section>
            <section className="product-product-header">
                <div className="container">
                    <div className="product-product-header__content">
                        {dataParent.image && (
                            <div className="product-product-header__image">
                                <Image src={process.env.NEXT_PUBLIC_ASSET_URL + dataParent.image} alt={data.title} fill />
                            </div>
                        )}
                        <h2 dangerouslySetInnerHTML={{ __html: replaceText(dataParent.title) }} />
                    </div>
                    <img src={'/imgs/details/rec-by.png'} className="sm:w-[228px] w-full h-auto block" alt={'recommended product'} />
                </div>
            </section>
        </>
    );
}

export default ProductsBanner;