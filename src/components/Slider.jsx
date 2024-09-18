import React, { useState, useEffect } from "react";
import styles from "./styles/Slider.module.css";

const Slider = ({ slides, onClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = slides.length;

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalItems - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className={styles.slider} aria-label="Slider de promociones">
      <nav>
        <button
          onClick={goToPrevious}
          className={styles.navButton}
          aria-label="Anterior slide"
        >
          &#10094;
        </button>

        <button
          onClick={goToNext}
          className={styles.navButton}
          aria-label="Siguiente slide"
        >
          &#10095;
        </button>
      </nav>

      <div className={styles.slideContainer}>
        {slides.map((slide, index) => (
          <article
            className={`${styles.slide} ${
              index === currentIndex ? styles.active : ""
            }`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            key={index}
            aria-hidden={index !== currentIndex}
          >
            <h2 className={styles.phrase}>{slide.phrase}</h2>
            <button
              className={styles.ctaButton}
              onClick={() => onClick(slide.sectionId)}
            >
              {slide.ctaText}
            </button>
          </article>
        ))}
      </div>

      {/* Indicadores */}
      <div className={styles.indicators}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              index === currentIndex ? styles.activeDot : ""
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Ir al slide ${index + 1}`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Slider;
