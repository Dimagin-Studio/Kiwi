import { Header } from "./components/Header/Header";
import { SectionAbout } from "./components/Sections/SectionAbout";
import { SectionAcceuil } from "./components/Sections/SectionAcceuil";
import { SectionApp } from "./components/Sections/SectionApp";
import { SectionEvents } from "./components/Sections/SectionEvents";
import { SectionGallery } from "./components/Sections/SectionGallery";
import { SectionTeam } from "./components/Sections/SectionTeam";
import { Footer } from "./components/Footer/Footer";
import { SectionTestimonials } from "./components/Sections/SectionTestimonials";
import { SectionCollab } from "./components/Sections/SectionCollab";

function App() {
  return (
    <>
      <Header />
      <main>
        <SectionAcceuil />
        <SectionAbout />
        <SectionApp />
        <SectionTeam />
        <SectionGallery />
        <SectionEvents />
        <SectionCollab />
        <SectionTestimonials />
      </main>
      <Footer />
    </>
  );
}

export default App;
