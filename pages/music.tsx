import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/content.module.css';
import { vids } from '../music';
import MainLayout from '../layouts/customLayout/CustomLayout'

export default function Music(): JSX.Element {
   console.log('env', process.env.BASE_URL);
   console.log('vids', vids);

   return (
      <MainLayout>
         <div style={{ width: '80%', margin: 'auto' }} className={styles.containerGrid}>

            {/* {videos.map((link) => <Video link={link} />)} */}
            {vids.map((link) => (
               <Link key={`${link.id}`} rel="stylesheet" href={`${process.env.BASE_URL}music/${link.id}`}>
                  <div className={styles.gridWrapper}>

                     <div className={styles.videoContainer}>
                        <Image
                           sizes={'(max-width: 1250px) 100vw, 1250px'}
                           fill
                           blurDataURL={`${link.img}`}
                           placeholder="blur"
                           loading="lazy"
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
