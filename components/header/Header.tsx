import { FC, useState } from 'react'
import cn from 'classnames'
import styles from './Header.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import BurgerMenu from '../burgerMenu/BurgerMenu'

interface IHeader { }

const Header: FC<IHeader> = ({ }) => {
   const router = useRouter();

   const [showMenu, setShowMenu] = useState(false);

   const isActive = (path: string) => {
      if (router.pathname === path) {
         return 'active'; // CSS class name for active item
      }
      return '';
   };

   const toggleMenu = () => {
      setShowMenu(!showMenu);
   };
   // const dispatch = useAppDispatch()
   return (
      <div>
         <div className={styles.navWrapper}>
            <div style={{ backgroundColor: 'white' }} />
            <nav className={styles.nav}>
               <div className={styles.rightColumn}>
                  <a style={{ display: 'none' }} href="/sitemap.xml">Sitemap</a>

                  <Link href="/"><h1 style={{ color: '#d1631a' }} className={styles.logo}>Dmitry Kuvaldin</h1>
                     <span style={{ fontSize: '10px' }}>Director of photography </span>
                  </Link>

               </div>
               <div className={styles.navMenu}>
                  {/* <Link className={cn(styles.navItem, styles.logo, isActive('/'))} href="/">Works</Link> */}
                  <Link className={cn(styles.navItem, styles.logo, isActive('/ads'))} href="/ads">Commercials</Link>
                  <Link className={cn(styles.navItem, styles.logo, isActive('/docs'))} href="/docs">Films</Link>
                  <Link className={cn(styles.navItem, styles.logo, isActive('/music'))} href="/music">Music</Link>
                  <Link className={cn(styles.navItem, styles.logo, isActive('/contacts'))} href="/contacts">Info</Link>
               </div>

               <div className={styles.burger}>
                  <svg onClick={toggleMenu} className={styles.sandwich} viewBox="0 -53 384 384" width="28px" xmlns="http://www.w3.org/2000/svg">
                     <path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
                     <path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
                     <path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
                  </svg>

                  <BurgerMenu showMenu={showMenu} />

               </div>
            </nav>
            <div style={{ backgroundColor: 'white' }} />
         </div>

      </div>
   )
}

export default Header
