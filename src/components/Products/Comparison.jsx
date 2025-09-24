import Image from "next/image";
const Comparison = ({ data }) => {
    return (
        <section className="product-comparison relative">
            <div className="label-title">{data.title}</div>
            <div className="container">
                <div className="product-comparison__image">
                    <Image src={data.image} alt={data.title} className="!w-full !h-auto !relative" fill />
                </div>
            </div>
        </section>
    );
}

export default Comparison;