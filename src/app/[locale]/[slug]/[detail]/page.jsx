import LayoutBase from "@/components/LayoutBase";
import DetailPage from "@/components/DetailPage";
import { redirect } from "next/navigation";
import { getProductDataByLocalizedSlug } from "@/utils/pageData";
export default async function Page({ params }) {
    const { locale, slug, "detail": detailSlug } = await params;
    
    let pageSlug;
    let data;

    if(slug === 'articles' || slug === 'artikel') pageSlug = 'articles';
    if(slug === 'products' || slug === 'produk') pageSlug = 'products';
    
    if((slug === 'products' || slug === 'produk') && !detailSlug) {
        redirect(`/${locale}`);
    }
    
    if((slug === 'products' || slug === 'produk') && detailSlug) {
        data = await getProductDataByLocalizedSlug(detailSlug, locale);
    }

    console.log(data);
    
    return (
        <LayoutBase locale={locale}>
            {data && <DetailPage slug={pageSlug} data={data} />}
        </LayoutBase>
    );
}