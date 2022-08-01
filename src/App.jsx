import "./App.css";
import Particle from "./Components/Particle";
import Header from "./Components/Header";
import Main from "./Components/Main";
import SectionSkills from "./Components/SectionSkill";
import SectionProjects from "./Components/SectionProjects";
import SectionCertificates from "./Components/SectionCertificates";

function App() {
  return (
    <>
      <Particle />
      <Header />
      <Main />
      <SectionSkills />
      <SectionProjects />
      <SectionCertificates />
    </>
  );
}
export default App;
