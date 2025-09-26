'use client';
import HomeBanner from '../Home/Banner';
import HomeAbout from '../Home/About';
import HomeProducts from '../Home/Products';
import HomeSuitableFor from '../Home/SuitableFor';
import HomeSideImage from '../Home/SideImage';
import HomeFacts from '../Home/Facts';
import HomeArticles from '../Home/Articles';
import HomeTestimonials from '../Home/Testimonials';
import HomeTrustedBy from '../Home/TrustedBy';
import ContactForm from '../Form/Contact';
const Switcher = ({ type, data }) => {
    switch (type) {
        case 'home-banner':
            return <HomeBanner data={data} />;
        case 'home-about':
            return <HomeAbout data={data} />;
        case 'home-products':
            return <HomeProducts data={data} />;
        case 'home-usage':
            return <HomeSuitableFor data={data} />;
        case 'home-side-image':
            return <HomeSideImage data={data} />;
        case 'home-facts':
            return <HomeFacts data={data} />;
        case 'home-articles':
            return <HomeArticles data={data} />;
        case 'home-reviews':
            return <HomeTestimonials data={data} />;
        case 'home-metrics':
            return <HomeTrustedBy data={data} />;
        case 'contact-form':
            return <ContactForm title={data.title} />;
        default:
            return null;
    }
}

export default Switcher;