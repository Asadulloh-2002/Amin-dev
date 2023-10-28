import { Facebook, Instagram, Telegram, YouTube } from "../public";
import "./App.scss";
import Test from "./Test";
import { Contact, Hero, Navbar, Parallax, Services, Sidebar } from "./components";
import Portfolio from "./components/Portfolio";

const App = () => {
  return (
    <div>
      <Sidebar />
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact"><Contact /></section>
      {/* <Test /> */}
    </div>
  );
};

export default App;
