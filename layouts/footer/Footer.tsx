import { FC } from "react"
// import cn from 'classnames'
import styles from './Footer.module.css'

interface IFooter {}

const Footer: FC<IFooter> = ({}) => {
  // const dispatch = useAppDispatch()
  return (
    <div>
      <footer className={styles.footerMain}>
        <div className={styles.footerWrapper}>
          <p className={styles.contactsP} style={{ color: "#d1631a" }}>
            © 2023 Dmitriy Kuvaldin
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
