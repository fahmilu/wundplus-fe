
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import Header from "@/components/partials/Header";
import Footer from "@/components/partials/Footer";
import { ReactLenis } from "lenis/react";

const namespaces = ['default'];
export default async function LayoutBase({ children, locale }) {
    const { t, resources } = await initTranslations(locale, namespaces, null, null);

    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
            <ReactLenis root>
                <Header locale={locale} />
                <main>
                    {children}
                </main>
                <Footer />
            </ReactLenis>
        </TranslationsProvider>
    );
}