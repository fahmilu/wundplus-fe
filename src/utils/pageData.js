import { notFound } from 'next/navigation';

export async function getPageData(slug, locale) {
    try {
        const pageData = await import(`@/data/pages/${slug}-${locale}.json`);
        return pageData.default;
    } catch (error) {
        notFound();
    }
}

export async function getPageDataByLocalizedSlug(slug, locale) {
    try {
        const pageData = await import(`@/data/pages/${slug}-${locale}.json`);
        return pageData.default;
    } catch (error) {
        notFound();
    }
}

export async function getProductDataByLocalizedSlug(slug, locale) {
    try {
        const productData = await import(`@/data/products/${slug}-${locale}.json`);
        return productData.default;
    } catch (error) {
        notFound();
    }
}