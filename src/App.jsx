import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ContacUs from "./sections/ContacUs";
import Home from "./sections/Home";
import Services from "./sections/Services";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Services />
      <ContacUs />
      <Footer />
    </>
  );
}

export default App;
