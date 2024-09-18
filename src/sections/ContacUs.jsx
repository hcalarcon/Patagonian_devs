import ContactForm from "../components/ContactForm";
import style from "../styles/ContacUs.module.css";

const ContacUs = () => {
  return (
    <section id="ContactUs" className={style.contactUs}>
      <h2>Contacta con nosotros </h2>
      <p>Tenemos soluciones a madida para vos</p>
      <ContactForm />
    </section>
  );
};

export default ContacUs;
