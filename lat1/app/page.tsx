import Hero from "./component/hero";   
import RiwayatPekerjaan from "./component/riwayatpekerjaan";
import RiwayatPendidikan from "./component/riwayatpendidikan";
import "./bella-style.css";
import PersonalInfo from "./component/PersonalInfo";
import SkillsSection from "./component/skill";
import MyGallery from "./component/MyGallery";
import ContactForm from "./component/ContactForm";

export default function Gallery(){
  return(
    <section>
    <Hero/>
    <PersonalInfo/>
    <SkillsSection/>
    <MyGallery/>
    <RiwayatPendidikan/>
    <RiwayatPekerjaan/>
    <ContactForm/>
    </section>
  );
}