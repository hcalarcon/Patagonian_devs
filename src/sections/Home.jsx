import Slider from "../components/slider";
import style from "../styles/Home.module.css";

const Home = () => {
  const slides = [
    {
      phrase: "Transforma tu negocio con una web moderna",
      ctaText: "Contáctanos",
      sectionId: "ContactUs",
    },
    {
      phrase: "Descubre nuestras soluciones a medida",
      ctaText: "Ver más",
      sectionId: "services",
    },
    {
      phrase: "Obtén una oferta especial este mes",
      ctaText: "Aprovechar oferta",
    },
  ];

  const handleClick = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={style.home} id="Home">
      <Slider slides={slides} onClick={handleClick} />
    </section>
  );
};

export default Home;
