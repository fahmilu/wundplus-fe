import { replaceText } from "@/utils/wund";
const Paragraph = ({ data }) => {
    return (
        <div className="content content__paragraph">
            {data.title && <h3 dangerouslySetInnerHTML={{ __html: replaceText(data.title) }} />}
            {data.content && (
                <div className="content__paragraph-content" dangerouslySetInnerHTML={{ __html: replaceText(data.content) }} />
            )}
        </div>
    );
}

export default Paragraph;