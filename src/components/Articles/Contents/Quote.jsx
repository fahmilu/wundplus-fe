import { replaceText } from "@/utils/wund";
const Quote = ({ data }) => {
    console.log(data);
    return (
        <div className="content content__quote">
            <div className="content__quote-content" dangerouslySetInnerHTML={{ __html: replaceText(data.content) }} />
        </div>
    );
}

export default Quote;