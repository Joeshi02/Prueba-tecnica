import React, { useState, useEffect } from "react";

const CarruselImagenes = () => {
    const [images, setImages] = useState([
        "https://firebasestorage.googleapis.com/v0/b/limitnext-29360.appspot.com/o/momo-indy.png?alt=media&token=e1ade7aa-8cb5-4f8a-aa7a-07badd207b8a",
        "https://firebasestorage.googleapis.com/v0/b/limitnext-29360.appspot.com/o/momo-indy.png?alt=media&token=e1ade7aa-8cb5-4f8a-aa7a-07badd207b8a",
        "https://firebasestorage.googleapis.com/v0/b/limitnext-29360.appspot.com/o/momo-mod-80.png?alt=media&token=b319883d-6c6d-463e-8acd-bbe81d806474",
        "https://firebasestorage.googleapis.com/v0/b/limitnext-29360.appspot.com/o/momo-mod-88.png?alt=media&token=69b61277-4020-48a2-b6b0-667cd992762b",
    ]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isPaused) {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }
        }, 2000);

        return () => clearInterval(interval);
    }, [isPaused, images.length]);

    const handleMouseEnter = () => {
        setIsPaused(true);
    };

    const handleMouseLeave = () => {
        setIsPaused(false);
    };

    return (
        <div className="carrusel bgImg" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {images.map((url, index) => (
                <img
                    key={index}
                    src={url}
                    alt={`Imagen ${index + 1}`}
                    className={index === currentIndex ? "center-image" : "small-image"}
                />
            ))}
        </div>
    );
};

export default CarruselImagenes;
