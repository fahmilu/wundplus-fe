import { notFound } from 'next/navigation';

export async function getPageData(slug, locale) {
    try {
        const pageData = await import(`@/data/pages/${slug}-${locale}.json`);
        return pageData;
    } catch (error) {
        notFound();
    }
}