import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Styles from "./Styles/SectionProjects.module.css";
import "swiper/css/bundle";
import "./Styles/Slide.css";
import imgCert01 from "./img/certificado-udemy-web.jpg";
import imgLoading from "./img/loading.png";

function SectionProjects() {
  return (
    <section className={Styles.sectionProjects}>
      <div className={Styles.containerSectionProjects}>
        <h1>PROJETOS ATUAIS</h1>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          a11y={true}
          loop={true}
        >
          <SwiperSlide>
            <img src={imgLoading} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={imgLoading} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={imgLoading} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
export default SectionProjects;
