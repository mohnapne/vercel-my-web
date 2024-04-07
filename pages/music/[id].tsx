import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { motion } from "framer-motion"

import styles from "../../styles/works.module.css"
import CustomLayout from "../../layouts/customLayout/CustomLayout"
import { vids } from "../../music"
import Video from '@/components/Video'

// import Works from '../layouts/works'

// const MainLayout = React.lazy(() => import('../layouts/mainLayout'));
// const Video = React.lazy(() => import('../layouts/video'));
// const Works = React.lazy(() => import('../layouts/works'));

interface IWork {

  id: string
  num: number
  title: string
  video: string
  img: string

}

export default function Work() {
  const router = useRouter()

  const [playing, setPlaying] = useState(false)
  const [childKey, setChildKey] = useState(0)

  function getObjectLinkById(arr: IWork[], targetId: string): IWork | null {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id === targetId) {
        console.log(arr[i]);
        return arr[i]
      }
    }
    return null // Return null if the object with the specified id is not found
  }

  useEffect(() => {
    setPlaying(false)
  }, [router.query.id])

  console.log('router.query.id', router.query.id);

  const link = getObjectLinkById(vids, router.query.id as string)

  return (
    <CustomLayout>
      <div className={styles.singleVideoWrapper}>
        <div className={styles.containerCover}>
          <motion.div
            className={styles.leftControl}
            initial={{ x: 100, opacity: 0 }} // Initial position and opacity
            animate={{ x: 0, opacity: 1 }} // Final position and opacity on animation
            exit={{ x: -100, opacity: 0 }} // Animation on component exit
            transition={{ duration: 0.3 }} // Animation duration
            onClick={() => {
              if (link !== null) {
                router.push(
                  `${vids.find((obj) => {
                    let num = link?.num - 1
                    if (num === 0) {
                      num = 18
                    } else if (num === 19) {
                      num = 1
                    }
                    return obj.num === num
                  })?.id
                  }`,
                )
                setChildKey(childKey - 1)
              }
            }}
          >
            <svg
              className={styles.leftArrow}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 8 14"
            >
              <path
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
              />
            </svg>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.videoWrapper}
          >
            {/* <div className={styles.videoWrapper}> */}

            <Video
              key={childKey}
              playing={playing}
              setPlaying={setPlaying}
              title={link?.title}
              link={link?.video}
              id={router.query.id as string}
            />
            {/* </div> */}
          </motion.div>

          {/* <div style={{ marginLeft: '24px' }}>
            <p>naming</p>
          </div> */}
          <motion.div
            className={styles.rightControl}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => {
              if (link !== null) {
                router.push(
                  `${vids.find((obj) => {
                    let num = link?.num + 1
                    if (num === 0) {
                      num = 18
                    } else if (num === 19) {
                      num = 1
                    }
                    return obj.num === num
                  })?.id
                  }`,
                )
                setChildKey(childKey + 1)
              }
            }}
          >
            <svg
              className={styles.rightArrow}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 8 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
              />
            </svg>
          </motion.div>
        </div>
      </div>
      <div className={styles.hWrapper}>
        <h1 className={styles.title}>{link?.title}</h1>
      </div>
      <div style={{ width: "80%", margin: "auto" }}>
        {/* <Works id={router.query.id} /> */}
      </div>
    </CustomLayout>
  )
}
