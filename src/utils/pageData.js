import { notFound } from 'next/navigation';
import { fetchData } from '@/services/api';

export async function getPageData(slug, locale) {
    try {
        
        if(slug === 'homepage') {
            const pageData = await fetchData(`homepage`, locale);
            return pageData.data;
        } else {            
            const pageData = await import(`@/data/pages/${slug}-${locale}.json`);
            return pageData.default;
        }

    } catch (error) {
        notFound();
    }
}

export async function getPageDataByLocalizedSlug(slug, locale) {
    try {
        const pageData = await import(`@/data/pages/${slug}.json`);
        return pageData.default;
    } catch (error) {
        notFound();
    }
}

export async function getProductDataByLocalizedSlug(slug, locale) {
    try {
        const productData = await fetchData(`products/${slug}`, locale);
        return productData.data;
    } catch (error) {
        notFound();
    }
}

export async function getArticlesData(locale) {
    try {
        const articlesData = await fetchData(`articles`, locale);
        return articlesData.data;
    } catch (error) {
        notFound();
    }
}

export async function getArticleDetailData(slug, locale) {
    try {
        const articleDetailData = await fetchData(`articles/${slug}`, locale);
        return articleDetailData.data;
    } catch (error) {
        notFound();
    }
}