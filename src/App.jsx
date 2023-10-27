import { Facebook, Instagram, Telegram, YouTube } from "../public";
import "./App.scss";
import Test from "./Test";
import { Hero, Navbar, Parallax, Services, Sidebar } from "./components";

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
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id="Contact">Contact</section>
      {/* <Test /> */}
    </div>
  );
};

export default App;
