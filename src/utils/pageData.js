import { notFound } from 'next/navigation';

export async function getPageData(slug) {
    try {
        const pageData = await import(`@/data/pages/${slug}.json`);
        return pageData;
    } catch (error) {
        notFound();
    }
}