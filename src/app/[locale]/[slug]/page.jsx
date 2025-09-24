import { getPageDataByLocalizedSlug } from "@/utils/pageData";
import LayoutBase from "@/components/LayoutBase";
import Switcher from "@/components/Switcher";

export default async function Page({ params }) {
    const { locale, slug } = await params;
    
    // Get page data based on localized slug
    const data = await getPageDataByLocalizedSlug(slug, locale);
    
    return (
        <LayoutBase locale={locale}>
            {data.title && <Switcher type={'banner'} data={data} slug={slug} locale={locale} /> }
            {data.contents && data.contents.map((component, index) => {
                return <Switcher key={index} type={component.type} data={component.data} />;
            })}
        </LayoutBase>
    );
}