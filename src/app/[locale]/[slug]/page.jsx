import { getPageDataByLocalizedSlug, getArticlesData } from "@/utils/pageData";
import LayoutBase from "@/components/LayoutBase";
import Switcher from "@/components/Switcher";
import ArticlesHeader from "@/components/Articles/Header";
import ArticlesList from "@/components/Articles/List";
import CTAs from "@/components/CTAs";
export default async function Page({ params }) {
    const { locale, slug } = await params;
    
    // Get page data based on localized slug
    const data = await getPageDataByLocalizedSlug(slug, locale);
    
    // Get articles data if this is an articles page
    let articlesData = null;
    if (slug === 'articles' || slug === 'artikel') {
        articlesData = await getArticlesData(locale);
    }
    
    return (
        <LayoutBase locale={locale}>
            {(slug === 'articles' || slug === 'artikel') ? (
                <>
                    <ArticlesHeader data={data} featuredArticles={articlesData?.articles?.filter(article => article.is_featured) || []} />
                    <ArticlesList articles={articlesData?.articles || []} />
                </>
            ) : (
                <>
                    {data.components.map((component, index) => {
                        return <Switcher key={index} type={component.type} data={component.data} />;
                    })}
                </>
            )}
            {/* {data.title && <Switcher type={'banner'} data={data} slug={slug} locale={locale} /> }
            {data.contents && data.contents.map((component, index) => {
                return <Switcher key={index} type={component.type} data={component.data} />;
            })} */}
            <CTAs />
        </LayoutBase>
    );
}