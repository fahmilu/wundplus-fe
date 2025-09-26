'use client';
import ContentsSwitcher from '../Articles/Contents';
import Banner from '../Articles/Contents/Banner';
import Share from '../Articles/Share';
import Controls from '../Articles/Controls';
import Featured from '../Articles/Featured';
import { useTranslation } from 'react-i18next';
import ContactForm from '../Form/Contact';
import CTAs from '../CTAs';
const DetailPageArticles = ({ data, articlesData }) => {
    const { i18n } = useTranslation();
    const currentLocale = i18n.language;
    return (
        <>
            <Banner data={data} />
            <div className="content__lists container relative">
                {data.content && data.content.map((content, index) => {
                    return <ContentsSwitcher key={index} type={content.type} data={content} />;
                })}
            </div>
            <div className="article__bottom">
                <div className="container">
                    <Share article={data} />
                </div>
            </div>
            <Controls data={data} articlesData={articlesData} />
            <section className="overflow-hidden">
                <div className="container md:pt-[120px] pt-[60px] md:pb-[120px] pb-[60px]">
                    <Featured data={articlesData.articles.slice(0, 3)} isLandscape={false} title={currentLocale === 'id' ? 'Artikel Terkait' : 'Related Articles'} />
                </div>
            </section>
            <ContactForm title={currentLocale === 'id' ? 'Tinggalkan Masukan Tentang Ini' : 'Leave Feedback About This'} articleId={data.id} />
            <CTAs />
        </>
    );
}

export default DetailPageArticles;