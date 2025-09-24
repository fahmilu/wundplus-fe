import DetailPageProduct from "./Product";
import DetailPageArticles from "./Articles";

const DetailPage = ({ slug, data }) => {
    if (slug === "products") return <DetailPageProduct  data={data} />;
    if (slug === "articles") return <DetailPageArticles  data={data} />;

    return false;
};

export default DetailPage;