// ServiceCard.js
import React, { useEffect, useRef } from "react";
import styles from "./styles/Cards.module.css";

const Cards = ({ service, onClick, isSelected, onClose }) => {
  const cardRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isSelected &&
        cardRef.current &&
        !cardRef.current.contains(event.target)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSelected, onClose]);

  return (
    <article
      onClick={() => onClick(service.id)}
      ref={cardRef}
      className={`${styles.card} ${isSelected ? styles.selected : ""}`}
    >
      <img src={service.image} alt={service.title} className={styles.image} />
      <h3 className={styles.title}>{service.title}</h3>
      <p className={styles.briefDescription}>{service.briefDescription}</p>
      {isSelected && (
        <>
          <button className={styles.closeButton} onClick={onClose}>
            X
          </button>
          <p className={styles.fullDescription}>{service.fullDescription}</p>
        </>
      )}
    </article>
  );
};

export default Cards;
