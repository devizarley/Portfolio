import imgFoguete from "./img/foguete.gif";
import Styles from "./Styles/SectionContact.module.css";
import Button from "./Button/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const form = yup
  .object({
    name: yup.string().required(),
    email: yup.string().required().email(),
    message: yup.string().required(),
  })
  .required();

function SectionContact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(form),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <section className={Styles.sectionContact}>
      <div className={Styles.containerSectionContact}>
        <div className={Styles.topContainer}>
          <h1>Contate-me</h1>
          <p>Entre em contato, irei responde-lo o mais rápido possivel!</p>
        </div>
        <div className={Styles.bottomContainer}>
          <div className={Styles.leftContact}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <p>Nome completo:</p>
              <input
                type="text"
                placeholder="Nome completo"
                {...register("name")}
              />
              <span>{errors.name?.message}</span>
              <p>Email:</p>
              <input type="email" placeholder="Email" />
              <span>{errors.email?.message}</span>
              <p>Mensagem:</p>
              <textarea id={Styles.msg} placeholder="Mensagem"></textarea>
              <span>{errors.message?.message}</span>
              <Button button="Enviar" type="submit" />
            </form>
          </div>
          <div className={Styles.rightContact}>
            <img src={imgFoguete} />
          </div>
        </div>
      </div>
    </section>
  );
}
export default SectionContact;
