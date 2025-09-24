'use client';
import ProductsBanner from '../Products/Banner';
import About from '../Products/About';
import Advantage from '../Products/Advantage';
import FactFigure from '../Products/FactFigure';
import HowItWorks from '../Products/HowItWorks';
import HowItWorksTwo from '../Products/HowItWorksTwo';
import HowtoApply from '../Products/HowtoApply';
import Comparison from '../Products/Comparison';
const ProductsSwitcher = ({ type, dataParent, data }) => {
    switch (type) {
        case 'banner':
            return <ProductsBanner dataParent={dataParent} data={data} />;
        case 'about':
            return <About data={data} />;
        case 'advantage':
            return <Advantage data={data} />;
        case 'fact-figure':
            return <FactFigure data={data} />;
        case 'how-it-works':
            return data.theme === 'two' ? <HowItWorksTwo data={data} /> : <HowItWorks data={data} />;
        case 'how-to-apply':
            return <HowtoApply data={data} />;
        case 'comparison':
            return <Comparison data={data} />;
        default:
            return null;
    }
}

export default ProductsSwitcher;