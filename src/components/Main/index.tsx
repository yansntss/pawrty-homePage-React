import styles from "./styles.module.scss";

import bala from "../../assets/bala.png";
import abobora from "../../assets/abobora.png";
import imagemFrente from "../../assets/imagemFrente.png";
import imagemFundo from "../../assets/imagemFundo.png";
 
export function Main() {
  return (
    <main className={styles.main}>
      <section className={styles.groupLeft}>
        <section className={styles.txtImgs}>
          <div className={styles.text}>
            <p>
              Trick
              <br />
              <span>or</span>
              <br />
              Treat
            </p>
          </div>

          <div className={styles.imgs}>
            <img src={abobora} alt="" className={styles.aboboraImg} />
            <img src={bala} alt="" className={styles.balaImg} />
          </div>
        </section>

        <article className={styles.article}>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>

          <button>Reserva</button>
          <p>
            PSST! We actually care more about your pets so just bring them and
            leave.
          </p>
        </article>
      </section>

      <section className={styles.groupRigth}>
        <img src={imagemFundo} alt="" className={styles.imagemFundo}/>

        <img src={imagemFrente} alt="" className={styles.imagemFrente}/>

        <p>Let’s  <span>PAWRTY </span> </p>
        
      </section>
    </main>
  );
}
