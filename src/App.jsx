import "./App.css";
import Particle from "./Components/Particle";
import Header from "./Components/Header";
import Main from "./Components/Main";
import SectionSkills from "./Components/SectionSkill";
import SectionProjects from "./Components/SectionProjects";
import SectionCertificates from "./Components/SectionCertificates";
import SectionContact from "./Components/SectionContact";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Particle />
      <Header />
      <Main />
      <SectionSkills />
      <SectionProjects />
      <SectionCertificates />
      <SectionContact />
      <Footer />
    </>
  );
}
export default App;
