"use client";
import { useTranslation } from "react-i18next";
import { replaceText } from "@/utils/wund";
import { TextAnimation } from "@/utils/textAnimation";
const CTAs = () => {
    const { t } = useTranslation();
    return (
        <section className="cta">
            <div className="container">
                <TextAnimation delay={0.1} start="top bottom">
                    <h3 dangerouslySetInnerHTML={{ __html: replaceText(t("cta.description")) }} />
                </TextAnimation>
                <div className="cta__btn-area">
                    <span data-aos="fade-up" data-aos-delay={100}>{t("cta.btn_text")}</span>
                    <div className="cta__btn-area__btn" data-aos="fade-up" data-aos-delay={200}>
                        <a href="https://tk.tokopedia.com/ZSANsnD9P/" target="_blank">
                            <img src="/imgs/tokopedia.png" alt="Tokopedia" />
                        </a>
                        <a href="https://www.tiktok.com/@wundplus" target="_blank">
                            <img src="/imgs/shopee.png" alt="Shopee" />
                        </a>
                        <a href="https://shopee.co.id/universal-link/wundplusindonesia" target="_blank">
                            <img src="/imgs/tiktok.png" alt="Tiktop Shop" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CTAs;