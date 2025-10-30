import LayoutBase from "@/components/LayoutBase";
import DetailPage from "@/components/DetailPage";
import { redirect } from "next/navigation";
import { getProductDataByLocalizedSlug, getArticleDetailData, getArticlesData } from "@/utils/pageData";

export async function generateMetadata({ params }) {

    const { locale, slug, "detail": detailSlug } = await params;

    let data;
    let title;
    
    if((slug === 'products' || slug === 'produk') && detailSlug) {
        data = await getProductDataByLocalizedSlug(detailSlug, locale);
    }

    if((slug === 'articles' || slug === 'artikel') && detailSlug) {
        const articleDetailData = await getArticleDetailData(detailSlug, locale);
        data = articleDetailData;
    }
    console.log(data);

    return {
        title: `${data?.meta?.title || data?.title} | wund+™`,
        description: `${data?.meta?.description || data?.description} | wund+™`,
    };
}

export default async function Page({ params }) {
    const { locale, slug, "detail": detailSlug } = await params;
    
    let pageSlug;
    let data;
    let articlesData;

    if(slug === 'articles' || slug === 'artikel') pageSlug = 'articles';
    if(slug === 'products' || slug === 'produk') pageSlug = 'products';
    
    if((slug === 'products' || slug === 'produk') && !detailSlug) {
        redirect(`/${locale}`);
    }
    
    if((slug === 'products' || slug === 'produk') && detailSlug) {
        data = await getProductDataByLocalizedSlug(detailSlug, locale);
    }

    if((slug === 'articles' || slug === 'artikel') && detailSlug) {
        const articleDetailData = await getArticleDetailData(detailSlug, locale);
        data = articleDetailData;
        articlesData = await getArticlesData(locale);
    }

    return (
        <LayoutBase locale={locale}>
            {data && <DetailPage slug={pageSlug} data={data} articlesData={articlesData} />}
        </LayoutBase>
    );
}