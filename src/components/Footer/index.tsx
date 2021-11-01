import styles from "./styles.module.scss";

import TeiaFooter from '../../assets/TeiaFooter.svg'
import maoFooter from '../../assets/maoFooter.png'

export function Footer(){
  return(
    <footer className={styles.footer}>
     <img src={TeiaFooter} alt="Teia" />
      <div className={styles.text}>
     <p>The Trick or Treat Pawrty will occur on the 31st of october at our petcare center at Random St #745, Mostaganem Algeria</p>
     <p>Costumes are obligatory</p>
     </div>
     <img src={maoFooter} alt="mao" className={styles.mao} />
    </footer>
  )
}