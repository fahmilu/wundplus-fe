import Switcher from '../Switcher';
const Homepage = ({ pageData }) => {
    return pageData && 
        <main>
            {pageData.components.map((component) => (
                <Switcher key={component.type} type={component.type} data={component.data} parent={pageData} />
            ))}
        </main>
}

export default Homepage;