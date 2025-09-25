"use client";
import Image from "next/image";
import { replaceText } from "@/utils/wund";
import Featured from "./Featured";
const ArticlesHeader = ({ data, featuredArticles }) => {
    return (
        <section className="articles-header">
            <Image src={data.image} alt={data.title} fill />
            <div className="container">
                <div className="articles-header__content">
                    <h1 dangerouslySetInnerHTML={{ __html: replaceText(data.title) }} />
                    <p dangerouslySetInnerHTML={{ __html: replaceText(data.description) }} />
                </div>
                <Featured data={featuredArticles} />
            </div>
        </section>
    );
}

export default ArticlesHeader;