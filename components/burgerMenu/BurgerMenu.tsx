import { FC } from 'react'
import cn from 'classnames'
import styles from './BurgerMenu.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'


interface IBurgerMenu {
   showMenu: boolean
}

const BurgerMenu: FC<IBurgerMenu> = ({ showMenu }) => {
   const router = useRouter();

   // const dispatch = useAppDispatch()
   const isActive = (path: string) => {
      if (router.pathname === path) {
         return 'active'; // CSS class name for active item
      }
      return '';
   };
   return (
      <>
         {showMenu && (
            <div className={styles.menuOverlay}>
               <div className={styles.menuLayout}>
                  <div className={styles.menuOptions}>
                     {/* <Link className={cn(styles.navItem, styles.logo, isActive('/'))} href="/">
                    <h1 className={cn(styles.navItem, styles.logo)}> Works</h1>
                  </Link> */}
                     <Link className={cn(styles.navItem, styles.logo, isActive('/ads'))} href="/ads">
                        <h1 className={cn(styles.navItem, styles.logo)}>Commercials</h1>
                     </Link>

                     <Link className={cn(styles.navItem, styles.logo, isActive('/docs'))} href="/docs">
                        <h1 className={cn(styles.navItem, styles.logo)}>Films</h1>
                     </Link>

                     <Link className={cn(styles.navItem, styles.logo, isActive('/music'))} href="/music">
                        <h1 className={cn(styles.navItem, styles.logo)}>Music</h1>
                     </Link>
                     <Link className={cn(styles.navItem, styles.logo, isActive('/contacts'))} href="/contacts">
                        <h1 className={cn(styles.navItem, styles.logo)}>Info</h1>
                     </Link>

                  </div>
               </div>
            </div>
         )}
      </>
   )
}

export default BurgerMenu
