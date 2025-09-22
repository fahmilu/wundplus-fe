"use client";
import CTAs from "@/components/CTAs";
export default function Footer() {
    return (
        <>
            <CTAs />
            <footer>
                <div className="container">
                    <div className="footer__content">
                        <div className="footer__social-media">
                            <div className="footer__social-media__items">
                                <a href="https://www.instagram.com/wundplus" target="_blank">
                                    <img src="/imgs/IG.svg" className="w-10 h-10" alt="Instagram" />
                                    <span>@wundplus</span>
                                </a>
                                <a href="https://www.instagram.com/gws.wellness" target="_blank">
                                    <img src="/imgs/IG.svg" className="w-10 h-10" alt="Instagram" />
                                    <span>@gws.wellness</span>
                                </a>
                                <a href="https://www.tiktok.com/@wundplus" target="_blank">
                                    <img src="/imgs/TK.svg" className="w-10 h-10" alt="tiktok" />
                                    <span>@wundplus</span>
                                </a>
    
                            </div>
                        </div>
                        <div className="footer__member">
                            <span>Member of</span>
                            <img src="/imgs/sinarmas.png" alt="Sinarmas" />
                            <img src="/imgs/GWS.png" alt="GWS" />
                        </div>
                    </div>
                </div>
                <div className="footer__copyright">
                    <span>© 2025 <strong>wund+™</strong>. All rights reserved.</span>
                </div>
            </footer>
        </>

    );
}