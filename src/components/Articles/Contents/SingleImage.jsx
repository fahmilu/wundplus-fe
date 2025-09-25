import Image from "next/image";
const SingleImage = ({ data }) => {
    return (
        <div className={`content content__single-image`}>
            <Image src={data.image} alt={data.title} fill />
        </div>
    );
}

export default SingleImage;