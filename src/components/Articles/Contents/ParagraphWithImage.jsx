import { replaceText } from "@/utils/wund";
import Image from "next/image";
const ParagraphWithImage = ({ data }) => {
    return (
        <div className={`content content__paragraph with-image ${data.image_position === 'right' && 'right'}`}>
            <div className="content__paragraph-image">
                <Image src={data.image} alt={data.title} fill />
            </div>
            <div className="content">
                {data.title && <h3 dangerouslySetInnerHTML={{ __html: replaceText(data.title) }} />}
                <div className="content__paragraph-content" dangerouslySetInnerHTML={{ __html: replaceText(data.content) }} />
            </div>
        </div>
    );
}

export default ParagraphWithImage;