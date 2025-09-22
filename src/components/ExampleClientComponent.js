'use client';
import { useTranslation } from 'react-i18next';
import { replaceText } from '@/utils/wund';
const ExampleClientComponent = () => {
    const text = '<p>[wund] is a brand that makes [wund] products for the [wund].</p>';
    const { i18n, t } = useTranslation();
    console.log(i18n);
    return (
        <div dangerouslySetInnerHTML={{ __html: replaceText(text) }} />
    );
}

export default ExampleClientComponent;