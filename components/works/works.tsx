import React, { useEffect, useState } from 'react';
import Link from 'next/link';
// import Image from "next/image";

import styles from './works.module.css';
// import { videos } from '../db';

interface Video {
   id: string;
   title: string;
   img: string;
   num?: number
   // Add other properties as needed
}

export default function Works(): JSX.Element {
   const [videos, setVideos] = useState<Video[]>([]);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      // fetch(`${process.env.BASE_URL}api/images`)
      fetch(`${process.env.BASE_URL}api/videos`)
         .then((response) => response.json())
         .then((data: Video[]) => {
            const videoElement = document.getElementById(data[0].id) as HTMLVideoElement;
            const xhr = new XMLHttpRequest();
            xhr.open('POST', data[0].img, true);
            xhr.responseType = 'blob';
            xhr.onload = function (e) {
               if (this.status == 200) {
                  const blob = this.response;
                  if (videoElement !== null) {
                     videoElement.src = URL.createObjectURL(blob);
                  }

               }
            };
            xhr.send();
            setVideos(data);
            setLoading(false); // Update the state with the fetched data
         })
   }, []);

   console.log('render');


   return (
      <>
         {/* {loading && <div className={styles.shapes} />} */}

         <div className={styles.containerGrid} >
            {videos?.length > 0 && videos?.map((video) => (

               <Link key={video?.id} href={`${process.env.BASE_URL}${video?.id}`}>
                  <div className={styles.gridWrapper}>
                     <div className={styles.videoContainer}>
                        <video id={video?.id} controls={false} style={{ width: '100%', objectFit: 'cover' }} autoPlay loop muted playsInline>
                           <source src={video?.img} type="video/mp4" />
                        </video>
                        <div className={styles.textOverlay}>
                           <h1 className={styles.textTitle}>{video?.title}</h1>
                        </div>
                     </div>
                  </div>
               </Link>

            ))
            }
         </div >
      </>
   );
}
