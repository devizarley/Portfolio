import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Styles from "./Styles/SectionProjects.module.css";
import "swiper/css/bundle";
import "./Styles/Slide.css";
import imgCert01 from "./img/certificado-udemy-web.jpg";
import imgInstagram from "./img/instagram.gif";
import imgWhatsapp from "./img/whatsapp.gif";
import imgOrganizze from "./img/organizze.gif";
import imgAndroid from "./img/googleplay.png"
import imgWindows from "./img/windows.png"
import imgGithub from "./img/githubButton.png"

function SectionProjects() {
  return (
    <section className={Styles.sectionProjects} id="projetos">
      <div className={Styles.containerSectionProjects}>
        <h1>PROJETOS ATUAIS</h1>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          slidesPerView={1}
          navigation
          a11y={true}
          loop={true}
        >
          <SwiperSlide className={Styles.containerSwiper}>
            <img src={imgInstagram} alt="" />
            <div>
              <img src={imgAndroid} className={Styles.buttonA} alt=""/>
              <a href="https://github.com/devizarley/Projects-Mobile/tree/main/Instagram" target="_blank"><img src={imgWindows} className={Styles.buttonW} alt=""/></a>
              <a href="https://github.com/devizarley/Projects-Mobile/tree/main/Instagram" target="_blank"><img src={imgGithub} className={Styles.buttonG} alt=""/></a>
            </div>
          </SwiperSlide>
          <SwiperSlide className={Styles.containerSwiper}>
            <img src={imgWhatsapp} alt="" />
            <div>
              <img src={imgAndroid} className={Styles.buttonA} alt=""/>
              <a href="https://github.com/devizarley/Projects-Mobile/tree/main/WhatsApp" target="_blank"><img src={imgWindows} className={Styles.buttonW} alt=""/></a>
              <a href="https://github.com/devizarley/Projects-Mobile/tree/main/WhatsApp" target="_blank"><img src={imgGithub} className={Styles.buttonG} alt=""/></a>
            </div>
          </SwiperSlide>
          <SwiperSlide className={Styles.containerSwiper}>
            <img src={imgOrganizze} alt="" />
            <div>
              <img src={imgAndroid} className={Styles.buttonA} alt=""/>
              <a href="https://github.com/devizarley/Projects-Mobile/tree/main/Organizze" target="_blank"><img src={imgWindows} className={Styles.buttonW} alt=""/></a>
              <a href="https://github.com/devizarley/Projects-Mobile/tree/main/Organizze" target="_blank"><img src={imgGithub} className={Styles.buttonG} alt=""/></a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
export default SectionProjects;
