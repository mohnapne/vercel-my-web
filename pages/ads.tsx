import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/content.module.css';
import { vids } from '../ads';
const MainLayout = React.lazy(() => import('../layouts/customLayout/CustomLayout'));

export default function Ads(): JSX.Element {
   return (
      <MainLayout>
         <div style={{ width: '80%', margin: 'auto' }} className={styles.containerGrid}>

            {/* {videos.map((link) => <Video link={link} />)} */}
            {vids.map((link) => (
               <Link key={link.id} rel="stylesheet" href={`${process.env.BASE_URL}${link.id}`}>
                  <div className={styles.gridWrapper}>

                     <div className={styles.videoContainer}>
                        <img
                           // blurDataURL={`${process.env.BASE_URL}${link.img}`}
                           // fill
                           // width={300}
                           // placeholder="blur"
                           // loading="lazy"
                           style={{ width: '100%', objectFit: "cover" }}
                           src={`${link.img}`}
                           alt=""
                        />
                        <div className={styles.textOverlay}>
                           <h1 className={styles.textTitle}>{link.title}</h1>
                        </div>
                     </div>
                  </div>
               </Link>
            ))}

         </div>
      </MainLayout>

   )
}
