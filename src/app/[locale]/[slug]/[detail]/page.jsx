import LayoutBase from "@/components/LayoutBase";
import DetailPage from "@/components/DetailPage";
import { redirect } from "next/navigation";
import { getProductDataByLocalizedSlug, getArticleDetailData, getArticlesData } from "@/utils/pageData";
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
        data = articleDetailData.data;
        articlesData = await getArticlesData(locale);
    }

    return (
        <LayoutBase locale={locale}>
            {data && <DetailPage slug={pageSlug} data={data} articlesData={articlesData} />}
        </LayoutBase>
    );
}