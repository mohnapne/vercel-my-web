import React from 'react'
import Link from 'next/link'

import Image from 'next/image';
import styles from '../styles/doc.module.css';
const MainLayout = React.lazy(() => import('../layouts/customLayout/CustomLayout'));

interface Video {
   id: number
   img: string;
   url: string,
   title: string,
}

export default function Docs(): JSX.Element {
   const vids: Video[] = [
      {
         id: 1,
         img: "/images/loh.webp",
         url: "https://www.youtube.com/watch?v=Q6R_KrVtAfQ&t=1s",
         title: "Kruzhok. The Movie"
      },
      {
         id: 2,
         img: "/images/holiwar.webp",
         url: "https://www.youtube.com/watch?v=hdngdbzayHA&list=PLFRQplrTcKj_d20omBf8dpWwd3qonfl2H",
         title: "RuNet: The Miniseries"
      },

      {
         id: 3,
         img: "/images/people-first.webp",
         url: "https://vimeo.com/manage/videos/750784380",
         title: "DENTSU. People First"
      },
      {
         id: 4,
         img: "/images/escaped.webp",
         url: "https://www.youtube.com/watch?v=j7L18FFPq8E",
         title: "When I Escaped"
      },

      {
         id: 5,
         img: "/images/elrcting-russia.webp",
         url: "https://entertainment.ie/movies/where-to-watch/electing-russia-252383/",
         title: "Electing Russia"
      },

      {
         id: 6,
         img: "/images/life-of-human.webp",
         url: "https://www.youtube.com/watch?v=B8RjcA8f0so&t=14s",
         title: "The life of Man"
      },

      {
         id: 7,
         title: "FRAM club. Kavkaz",
         url: "https://player.vimeo.com/video/687645039?h=e0e26ac2f4",
         img: "/images/fram-chechnya.webp"
      },

      {
         id: 8,
         img: "/images/the-term.webp",
         url: "https://youtu.be/V-MI6F4dxCs",
         title: "The Term"
      },

      {
         id: 9,

         title: "Proletarka. Trailer",
         url: "https://player.vimeo.com/video/188592418?h=a77a0c97a9",
         img: "/images/proletarka.webp"
      },

      {
         id: 10,
         title: "Day of the Builder. Documentary",
         url: "https://player.vimeo.com/video/313009169?h=ee4dad40e7",
         img: "/images/den-stroitelya.webp"
      },

   ]
   return (
      <MainLayout>
         <div style={{ width: '80%', margin: 'auto' }} className={styles.containerGrid}>

            {vids.map((link) => (
               <Link key={link.id} href={link.url} target="_blank">
                  <div className={styles.videoWrapper}>
                     <div key={link.title} className={styles.videoContainer}>

                        {/* <img className={styles.blurBackground} src={`${link.img}`} alt="" /> */}
                        <div className={styles.imgDarkWrapper}>

                           <Image
                              fill
                              sizes={'(max-width: 1250px) 100vw, 1250px'}
                              blurDataURL={`${process.env.BASE_URL}${link.img}`}
                              placeholder="blur"
                              loading="lazy"
                              className={styles.imgDark}
                              src={`${link.img}`}
                              alt=""
                           />
                        </div>
                        <img className={styles.imgLight} style={{ width: '100%', zIndex: '20', objectFit: 'contain', }} src={`${link.img}`} alt="" />

                        <h1 className={styles.textOverlay}>{link.title}</h1>
                     </div>
                  </div>

               </Link>
            ))}

         </div>
      </MainLayout>
   )
}
