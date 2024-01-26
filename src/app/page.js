import About from "./components/AboutComp/About";
import Form from "./components/Form/Form";
import HomeComp from "./components/HomeComp/Homecomp";
import Portfolio from "./components/Portfolio/Portfolio";
import MySKills from "./components/Skills/mySkill";
import Footer from "./components/footer/Footer";


export default function Home() {
  return (
    <>
    <HomeComp />
    <About />
    <MySKills />
    <Portfolio />
    <Form />
    <Footer />
    </>
  );
}
