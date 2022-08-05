import "./App.css";
import Particle from "./Components/Particle";
import Header from "./Components/Header";
import Main from "./Components/Main";
import SectionSkills from "./Components/SectionSkill";
import SectionProjects from "./Components/SectionProjects";
import SectionCertificates from "./Components/SectionCertificates";
import SectionContact from "./Components/SectionContact";
import Footer from "./Components/Footer";
import Networks from "./Components/Networks";

function App() {
  return (
    <>
      <Particle />
      <Header />
      <Networks />
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
