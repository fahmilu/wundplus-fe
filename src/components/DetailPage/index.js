import DetailPageProduct from "./Product";
import DetailPageArticles from "./Articles";

const DetailPage = ({ slug, data, articlesData }) => {
    if (slug === "products") return <DetailPageProduct  data={data} />;
    if (slug === "articles") return <DetailPageArticles  data={data} articlesData={articlesData} />;

    return false;
};

export default DetailPage;