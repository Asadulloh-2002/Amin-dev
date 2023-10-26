import { Facebook, Instagram, Telegram, YouTube } from '../public';
import './App.scss'
import Test from './Test';
import { Navbar } from './components';
import Hero from './components/Hero/Hero';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
  return <div>
    <Sidebar />
    <section id='Home'>
      <Navbar />
      <Hero />
    </section>
    <section id='Services'>Parallax</section>
    <section>Services</section>
    <section id='Portfolio'>Parallax</section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id='Contact'>Contact</section>
    {/* <Test /> */}
  </div>;
};

export default App;
