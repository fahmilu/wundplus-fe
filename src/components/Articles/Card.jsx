"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { removeSpecificTags } from "@/utils/CleanupHtml";
const ArticlesCard = ({ article }) => {
    const { i18n } = useTranslation();
    const currentLocale = i18n.language;
    return (
        <Link href={`/${currentLocale === 'id' ? 'id/artikel' : 'en/articles'}/${article.slug}`} className="articles__card">
            <div className="articles__card__top">
                <div className="articles__card__top__tags">
                    {article.tags.slice(0, 2).map((tag) => (
                        <span key={tag.id} className="articles__card__top__tags__tag">{tag.name}</span>
                    ))}
                </div>
                <div className="articles__card__top__date">
                    <svg xmlns="http://www.w3.org/2000/svg" width={19} height={19} viewBox="0 0 19 19" fill="none">
                        <path d="M9.08013 0.51001H10.0201C16.9801 0.91001 20.9101 8.81009 16.9101 14.5901C13.3301 19.7601 5.69013 19.7401 2.11013 14.5801C-1.91987 8.77008 2.13013 0.84001 9.08013 0.51001ZM8.92015 2.52002C6.00015 2.68002 3.43014 4.99003 2.72014 7.78003C2.48014 8.73003 2.48014 10.1899 2.72014 11.1299C4.07014 16.4499 10.6801 18.2801 14.5301 14.3201C17.0301 11.7401 17.1701 7.56988 14.7501 4.87988C13.2001 3.14988 11.2402 2.39002 8.92015 2.52002Z" />
                        <path d="M10.43 9.33L14.09 10.7499C14.71 11.0599 14.86 11.8498 14.41 12.3798C14.13 12.7098 13.81 12.7399 13.4 12.7399C12.02 12.1899 10.6 11.7198 9.24001 11.1398C9.05001 11.0598 8.80002 10.98 8.66002 10.83C8.56002 10.72 8.30002 10.2698 8.28002 10.1398C8.26002 9.98982 8.3 9.70995 8.3 9.52995C8.3 8.79995 8.3 8.07 8.3 7.33C8.3 6.67 8.25 5.92996 8.3 5.28996C8.37 4.34996 9.56002 4.0199 10.16 4.7299C10.46 5.0899 10.37 5.47984 10.38 5.91984C10.38 5.96984 10.4 6.02 10.4 6.08C10.43 7.17 10.4 8.25001 10.42 9.34001L10.43 9.33Z" />
                    </svg>
                    <span>{new Date(article.published_date).toLocaleDateString(currentLocale, { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                </div>
            </div>
            <div className="articles__card__image">
                <Image src={process.env.NEXT_PUBLIC_ASSET_URL + article.hero_image} alt={article.title} fill />
            </div>
            <div className="articles__card__title_area">
                <h3>{article.title}</h3>
                <h5>{removeSpecificTags(article.lead, ['p'])}</h5>
            </div>
            <div className="articles__card__link">Read More</div>
        </Link>
    );
}

export default ArticlesCard;