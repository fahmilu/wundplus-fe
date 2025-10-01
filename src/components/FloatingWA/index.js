import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";

const FloatingWA = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });
    const [hasMoved, setHasMoved] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        // Set initial position to bottom-right corner
        const updatePosition = () => {
            if (elementRef.current) {
                const rect = elementRef.current.getBoundingClientRect();
                const x = window.innerWidth - rect.width - 20; // 20px from right edge
                const y = window.innerHeight - rect.height - 20; // 20px from bottom
                setPosition({ x, y });
            }
        };

        updatePosition();
        window.addEventListener('resize', updatePosition);
        return () => window.removeEventListener('resize', updatePosition);
    }, []);

    const handleStart = (clientX, clientY) => {
        setIsDragging(true);
        setHasMoved(false);
        setDragStart({ x: clientX, y: clientY });
        setInitialPosition(position);
    };

    const handleMove = useCallback((clientX, clientY) => {
        if (!isDragging) return;

        const deltaX = clientX - dragStart.x;
        const deltaY = clientY - dragStart.y;
        
        // Check if movement exceeds threshold (5px) to consider it a drag
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        if (distance > 5) {
            setHasMoved(true);
        }
        
        let newX = initialPosition.x + deltaX;
        let newY = initialPosition.y + deltaY;

        // Boundary constraints
        if (elementRef.current) {
            const rect = elementRef.current.getBoundingClientRect();
            const maxX = window.innerWidth - rect.width;
            const maxY = window.innerHeight - rect.height;

            newX = Math.max(0, Math.min(newX, maxX));
            newY = Math.max(0, Math.min(newY, maxY));
        }

        setPosition({ x: newX, y: newY });
    }, [isDragging, dragStart, initialPosition]);

    const handleEnd = () => {
        setIsDragging(false);
    };

    // Mouse events
    const handleMouseDown = (e) => {
        e.preventDefault();
        e.stopPropagation();
        handleStart(e.clientX, e.clientY);
    };

    const handleMouseMove = useCallback((e) => {
        handleMove(e.clientX, e.clientY);
    }, [handleMove]);

    // Touch events
    const handleTouchStart = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const touch = e.touches[0];
        handleStart(touch.clientX, touch.clientY);
    };

    const handleTouchMove = useCallback((e) => {
        e.preventDefault();
        const touch = e.touches[0];
        handleMove(touch.clientX, touch.clientY);
    }, [handleMove]);

    // Add global event listeners when dragging
    useEffect(() => {
        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleEnd);
            document.addEventListener('touchmove', handleTouchMove, { passive: false });
            document.addEventListener('touchend', handleEnd);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleEnd);
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleEnd);
        };
    }, [isDragging, handleMouseMove, handleTouchMove]);

    const handleClick = (e) => {
        // Prevent navigation if user was dragging
        if (hasMoved || isDragging) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
    };

    return (
        <a 
            href="https://wa.me/+6288290405456" 
            className={`floating-wa ${isDragging ? 'dragging' : ''}`}
            target="_blank"
            ref={elementRef}
            style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
                cursor: isDragging ? 'grabbing' : 'grab',
                transition: isDragging ? 'none' : 'transform 0.2s ease'
            }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            onClick={handleClick}
            onMouseUp={(e) => {
                if (hasMoved) {
                    e.preventDefault();
                    e.stopPropagation();
                }
            }}
            onTouchEnd={(e) => {
                if (hasMoved) {
                    e.preventDefault();
                    e.stopPropagation();
                }
            }}
        >
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