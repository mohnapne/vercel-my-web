import React from "react";
import styles from "../styles/contacts.module.css";
const MainLayout = React.lazy(() => import('../layouts/customLayout/CustomLayout'));

export default function Contacts() {
  return (
    <MainLayout>

      <div className={styles.contacts}>

        <div>

          {/* <p>kuvaldin2012@gmail.com</p> */}
          <div className={styles.me}>
            <h5 className={styles.contactsH} style={{ marginTop: 0 }}>About me:</h5>
            <p className={styles.info1} style={{ marginTop: 0 }}>I came in touch with cinematography through  the documentary filmmaking and photography.
            </p>
            <p style={{ marginTop: 0 }}>
              Studied at the Gerasimov Institute <br className={styles.br} /> of Cinematography <br className={styles.br} /> in Moscow and worked on various projects <br className={styles.br} /> with many journalists and directors such as Alexander Rastorguev, Andrew Loshak, and Philipp Remunda.
            </p>
            <p className={styles.info3} style={{ marginTop: 0 }}>
              In my works, combine the stylistics of documentary filmmaking and the aesthetics of an artistic approach in cinema. Film Documentary, Music Videos, Commercials, and Doc Fiction Advertising. Enhancing journalistic reports with cinematic visuals, I like to amplify the impact of each story, blurring the lines between reality and imagination.
            </p>
          </div>

          <h5 style={{ marginTop: 0 }} className={styles.contactsH}>Clients:</h5>
          <p className={styles.contactsP} style={{ margin: 0 }}>Adidas, Lexus, Parimatch, <br className={styles.br} /> Practicum, BBC,<br className={styles.br} /> Poison Drop,  </p>
          <p className={styles.contactsP} style={{ margin: 0 }}> Condé Nast, <br className={styles.br} /> Herbal Essences, </p>
          <p className={styles.contactsP} style={{ marginTop: 0 }}>Calvert Journal, <br className={styles.br} />   Current Time </p>
          <div className={styles.films}>
            <h5 className={styles.contactsH}>Films:</h5>
            {/* <p className={styles.contactsP} style={{ margin: 0 }}>The Builder's Day. 2015</p> */}
            <p className={styles.contactsP} style={{ margin: 0 }}>The Term. 2016</p>
            <p className={styles.contactsP} style={{ margin: 0 }}>Happy Life Sect. 2017</p>
            <p className={styles.contactsP} style={{ margin: 0 }}>Electing Russia. 2018</p>
            <p className={styles.contactsP} style={{ margin: 0 }}>I am Nobody. 2018</p>
            <p className={styles.contactsP} style={{ margin: 0 }}>InterNYET 2019</p>
            <p className={styles.contactsP} style={{ margin: 0 }}>The Life of a Man. 2020</p>
            <p className={styles.contactsP} style={{ margin: 0 }}>Kruzhok v Lohu. 2021 </p>
            <p className={styles.contactsP} style={{ marginTop: 0 }}>People first. 2022</p>
          </div>

          {/* <details style={{ fontWeight: 'bold' }}>
            <summary><span>&nbsp;</span>Equipment:</summary>
            <div style={{ fontWeight: 'normal' }}>
              <p style={{ marginBottom: 0 }}>BMPCC 4k</p>
              <p style={{ margin: 0 }}>Panasonic gh5</p>
              <p style={{ margin: 0 }}>Multiple sound devises</p>
              <p style={{ margin: 0 }}>Lighting equipment</p>
            </div>
          </details> */}

        </div>

        <div className={styles.secondColumn}>
          <img loading="lazy" src="/images/me.webp" alt="" className={styles.contactsPick} />
          <p className={styles.contactsP} style={{ marginTop: 8, marginBottom: 10 }}>Based in Berlin</p>
          {/* <p style={{ marginTop: 0, marginBottom: 7 }}>mohnapne@icloud.com</p> */}

          {/* <p style={{ marginTop: 0, marginBottom: '6px' }}>kuvaldin2012@gmail.com</p> */}

          <div>
            <a className={styles.contactsP} style={{ textDecoration: "underline", marginBottom: '6px' }} href="https://t.me/mohvosne/" target="_blank" rel="noreferrer">
              <img className={styles.socialIcon} src="/images/telegram.svg" alt="" />
            </a>
            <span>   </span>

            <a className={styles.contactsP} style={{ textDecoration: "underline" }} href="https://www.instagram.com/mohnapne/" target="_blank" rel="noreferrer">
              <img className={styles.socialIcon} src="/images/inst.svg" alt="" />
            </a>

            <span>   </span>
            <a className={styles.contactsP} style={{ textDecoration: "underline" }} href="https://vimeo.com/dmitrykuvaldin" target="_blank" rel="noreferrer">
              <img className={styles.socialIcon} src="/images/vimeo.svg" alt="" />
            </a>

          </div>

        </div>
      </div>

    </MainLayout>
  );
}
