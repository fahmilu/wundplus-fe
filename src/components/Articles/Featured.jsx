"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ArticlesCardLandscape from "./CardLandscape";

const Featured = ({ data }) => {
    const listRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const list = listRef.current;
        const container = containerRef.current;
        
        if (!list || !container) return;

        let isHovering = false;
        let currentX = 0;
        let animationTween = null;

        const handleMouseEnter = () => {
            isHovering = true;
        };

        const handleWheel = (e) => {
            if (!isHovering) return;

            // Only handle horizontal scroll events
            if (Math.abs(e.deltaX) === 0) return;

            e.preventDefault(); // Prevent default horizontal scroll

            const containerWidth = container.clientWidth;
            const scrollWidth = list.scrollWidth;
            const maxScroll = scrollWidth - containerWidth;
            
            if (maxScroll <= 0) return;

            // Only use horizontal scroll delta
            const scrollDelta = e.deltaX * -0.5; // Adjust sensitivity
            const newX = currentX + scrollDelta;

            // Clamp the scroll position within bounds
            const clampedX = Math.max(-maxScroll, Math.min(0, newX));
            currentX = clampedX;

            // Kill any existing animation
            if (animationTween) {
                animationTween.kill();
            }

            // Create smooth animation to new position
            animationTween = gsap.to(list, {
                x: clampedX,
                duration: 0.2,
                ease: "power2.out"
            });
        };

        const handleMouseLeave = () => {
            isHovering = false;
            
            // Kill any existing animation but keep current position
            if (animationTween) {
                animationTween.kill();
            }
        };

        container.addEventListener('mouseenter', handleMouseEnter);
        container.addEventListener('wheel', handleWheel, { passive: false });
        container.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            container.removeEventListener('mouseenter', handleMouseEnter);
            container.removeEventListener('wheel', handleWheel);
            container.removeEventListener('mouseleave', handleMouseLeave);
            
            // Clean up any running animations
            if (animationTween) {
                animationTween.kill();
            }
        };
    }, []);

    return (
        <div className="articles-featured">
            <h3 data-color="brand">Artikel Pilihan</h3>
            <div className="articles-featured__container" ref={containerRef}>
                <div className="articles-featured__list" ref={listRef}>
                    {data.map((item) => (
                        <ArticlesCardLandscape key={item.id} article={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Featured;