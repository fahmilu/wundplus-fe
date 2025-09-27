import LayoutBase from "@/components/LayoutBase";
import { getPageData } from "@/utils/pageData";
import Switcher from "@/components/Switcher";
import CTAs from "@/components/CTAs";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const title = locale === 'id' ? 'wund+™' : 'wund+™';
  const description = locale === 'id' ? 'Solusi Tepat untuk pemulihan lebih cepat' : 'The Right Solution for Faster Recovery';
  return {
    title: `${title} | ${description}`,
    description: `${description}`,
  };
}

export default async function Home({ params }) {
  const { locale } = await params;
  const pageData = await getPageData('homepage', locale);

  // console.log(pageData);
  return (
    <LayoutBase locale={locale}>
      {pageData && pageData.components.map((component) => (
        <Switcher key={component.type} type={component.type} data={component.data} />
      ))}
      <CTAs />
    </LayoutBase>
  );
}