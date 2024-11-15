import React, { useState, useEffect } from 'react'
import useScrollHandling from '@/hooks/useScrollHandling';

const useTranslateImage = () => {
    const [translateXPosition, setTranslateXPosition] = useState(90);
    const { scrollDirection, scrollPosition } = useScrollHandling();

    const handleTranslateX = () => {
        if (scrollDirection === "down" && scrollPosition >= 1500) {
            setTranslateXPosition(
                translateXPosition <= 65 ? 65 : translateXPosition - 5
            );
        } else if (scrollDirection === "up") {
            setTranslateXPosition(
                translateXPosition >= 90 ? 90 : translateXPosition + 5
            );
        }
    };

    useEffect(() => {
        handleTranslateX();
    }, [scrollPosition]);

    return {
        translateXPosition
    }
}

export default useTranslateImage;