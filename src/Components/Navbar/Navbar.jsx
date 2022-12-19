import navstyle from "./Navbarcss.module.css";
import { NavbarMenu } from "./NavbarMenu";
import BasicMenu from "./BasicMenu";
import { NavProfile } from "./NavProfile";
import { Media } from 'react-breakpoints';
import { Home } from "../../Pages/Home";
import  About  from "../../Pages/About";
import { TechStack } from "../../Pages/TeckStack";
import { Projects } from "../../Pages/Projects";
import { Contact } from "../../Pages/Contact";
import { Skills } from "../../Pages/Skills";


export default function NavBar() {
  return (
    <div className="App">
      <header className={navstyle.nav}>
      <NavProfile/>

      <Media>
        {({ breakpoints, currentBreakpoint }) =>
          breakpoints[currentBreakpoint] > breakpoints.tablet ? (
            <NavbarMenu />
          ) : (
            <BasicMenu />
          )
        }
      </Media>
      </header>
      <section id="home"> <Home/></section>
      <section id="about"><About/></section>
      <section id="skills"><TechStack/></section>
      <section id="projects"><Projects/></section>
      <section id="contact"><Contact/></section>
    </div>
  );
}
