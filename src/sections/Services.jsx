import ServiceList from "../components/ServicesList";
import styles from "../styles/Services.module.css";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Diseño y Desarrollo Web",
      briefDescription: "Creación de sitios web modernos y responsivos.",
      fullDescription:
        "Ofrecemos servicios completos de desarrollo web, desde la planificación hasta la implementación, utilizando las últimas tecnologías y mejores prácticas para asegurar que su sitio web sea rápido, seguro y atractivo.",
      image: "./desarrollo.jpeg",
    },
    {
      id: 2,
      title: "Mantenimiento y Mejoras a tu web",
      briefDescription: "Mejora continua y mantenimiento de sitios web.",
      fullDescription:
        "Nos encargamos de la optimización, actualizaciones de seguridad y mejoras de rendimiento para asegurar que su sitio web esté siempre actualizado y funcionando de manera eficiente.",
      image: "./mantenimiento.jpeg",
    },
    {
      id: 3,
      title: "Gestión de Hosting y Dominios",
      briefDescription: "Administración integral de hosting y dominios.",
      fullDescription:
        "Ofrecemos gestión completa de servidores de hosting y registro de dominios, asegurando que su sitio web esté siempre disponible y bien configurado.",
      image: "./desarrollo.jpeg",
    },
    {
      id: 4,
      title: "Desarrollo de Aplicaciones Móviles",
      briefDescription: "Creación de apps para Android e iOS.",
      fullDescription:
        "Diseñamos y desarrollamos aplicaciones móviles personalizadas para Android e iOS, enfocadas en una excelente experiencia de usuario y alto rendimiento.",
      image: "./app.jpeg",
    },
  ];

  return (
    <section id="services" className={styles.Services}>
      <h2>Conoce nuestros servicios</h2>
      <ServiceList services={services} />
    </section>
  );
};

export default Services;
