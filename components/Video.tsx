import styles from "../styles/works.module.css"
import { FC } from 'react'

interface IVideoProps {
  link: string | undefined
  id: string | undefined
  title: string | undefined
  playing: boolean
  setPlaying: (t: boolean) => void

}

const Video: FC<IVideoProps> = ({ link, id, title, playing, setPlaying }) => {
  const handlePlayClick = () => {
    setPlaying(true)
  }

  return (
    <div className={styles.videoContainer}>
      {!playing && link !== undefined && (
        <div className={styles.videoContainer} onClick={handlePlayClick}>
          <div className={styles.textOverlay}>{title}</div>
          <img
            style={{ width: "100%" }}
            src={`/images/${id}.webp`}
            alt="Play Video"
            className={styles.playButton}
          />
        </div>
      )}

      {playing && link !== undefined && (
        <iframe
          title="vimeo-player"
          src={`${link}`}
          frameBorder="0"
          allowFullScreen
          allow="autoplay"
        />
      )}
    </div>
  )
}

export default Video

