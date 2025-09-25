'use client';
import Paragraph from './Paragraph';
import ParagraphWithImage from './ParagraphWithImage';
import Quote from './Quote';
import SingleImage from './SingleImage';
const ContentsSwitcher = ({ type, data }) => {
    switch (type) {
        case 'paragraph':
            return <Paragraph data={data} />;
        case 'paragraph-with-image':
            return <ParagraphWithImage data={data} />;
        case 'quote':
            return <Quote data={data} />;
        case 'single-image':
            return <SingleImage data={data} />;
        default:
            return null;
    }
}

export default ContentsSwitcher;