import Image from "next/image";
const FloatingWA = () => {
    return (
        <a href="https://wa.me/6281234567890" className="floating-wa" target="_blank">
            <div className="floating-wa__image">
                <Image src="/imgs/details/wa-icon.png" alt="Floating WA" fill />
            </div>
            <div className="floating-wa__text">
                contact for inquiry
            </div>
        </a>
    );
};

export default FloatingWA;