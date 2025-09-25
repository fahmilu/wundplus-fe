'use client';
import ContentsSwitcher from '../Articles/Contents';
import Banner from '../Articles/Contents/Banner';
import Share from '../Articles/Share';
const DetailPageArticles = ({ data }) => {
    console.log(data);
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
        </>
    );
}

export default DetailPageArticles;