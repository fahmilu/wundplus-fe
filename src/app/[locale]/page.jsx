import LayoutBase from "@/components/LayoutBase";
import { getPageData } from "@/utils/pageData";
import Switcher from "@/components/Switcher";
import CTAs from "@/components/CTAs";
export default async function Home({ params }) {
  const { locale } = await params;
  const pageData = await getPageData('home', locale);

  return (
    <LayoutBase locale={locale}>
      {pageData && pageData.components.map((component) => (
        <Switcher key={component.type} type={component.type} data={component.data} />
      ))}
      <CTAs />
    </LayoutBase>
  );
}