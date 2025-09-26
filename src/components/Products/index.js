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
            return data.active ? <About dataParent={dataParent} data={data} /> : null;
        case 'advantage':
            return data.active ? <Advantage data={data} /> : null;
        case 'fact-figure':
            return data.active ? <FactFigure data={data} /> : null;
        case 'how-it-works':
            return data.active ? (data.theme === 'two' ? <HowItWorksTwo data={data} /> : <HowItWorks data={data} />) : null;
        case 'how-to-apply':
            return data.active ? <HowtoApply data={data} /> : null;
        case 'comparison':
            return data.active ? <Comparison data={data} /> : null;
        default:
            return null;
    }
}

export default ProductsSwitcher;