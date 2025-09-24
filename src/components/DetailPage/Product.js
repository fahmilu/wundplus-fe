'use client';
import ProductsSwitcher from '../Products';
import FloatingWA from '../FloatingWA';
const DetailPageProduct = ({ data }) => {
    return data && (
        <>
        {
            data.components.map((component) => (
                <ProductsSwitcher key={component.type} type={component.type} dataParent={data} data={component.data} />
            ))
        }
        <FloatingWA />
        </>
    );
}

export default DetailPageProduct;