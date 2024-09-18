// ServiceList.js
import React, { useState } from "react";
import Cards from "./Cards";
import styles from "./styles/ServicesList.module.css";

const ServiceList = ({ services }) => {
  const [selectedService, setSelectedService] = useState(null);

  const handleSelectService = (serviceId) => {
    setSelectedService(serviceId);
  };

  const handleCloseService = () => {
    setSelectedService(null);
  };

  return (
    <>
      {selectedService && (
        <div className={styles.overlay} onClick={handleCloseService}></div>
      )}
      <section className={styles.cardContainer}>
        {services.map((service) => (
          <Cards
            key={service.id}
            service={service}
            isSelected={service.id === selectedService}
            onClick={handleSelectService}
            onClose={handleCloseService}
          />
        ))}
      </section>
    </>
  );
};

export default ServiceList;
