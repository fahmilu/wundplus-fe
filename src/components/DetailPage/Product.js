'use client';
import ProductsSwitcher from '../Products';
import FloatingWA from '../FloatingWA';
import CTAs from '../CTAs';
const DetailPageProduct = ({ data }) => {
    return data && (
        <>
        {
            data.components.map((component) => (
                <ProductsSwitcher key={component.type} type={component.type} dataParent={data} data={component.data} />
            ))
        }
        <CTAs isProduct={true} />
        <FloatingWA />
        </>
    );
}

export default DetailPageProduct;