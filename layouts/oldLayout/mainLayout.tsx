import Link from "next/link"
import React, { useState, ReactNode, FC } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import cn from "classnames"
import styles from "./mainLayout.module.css"
import Footer from "../footer/Footer"

interface ILayoutProps {
   children: ReactNode
}

const MainLayout: FC<ILayoutProps> = ({ children }): JSX.Element => {
   const router = useRouter()

   const isActive = (path: string) => {
      if (router.pathname === path) {
         return "active" // CSS class name for active item
      }
      return ""
   }

   const [showMenu, setShowMenu] = useState(false)

   const toggleMenu = () => {
      setShowMenu(!showMenu)
   }

   return (
      <div className={styles.layout}>
         <Head>
            <title>Kuvaldin.de</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta
               property="og:title"
               content="Dmitry Kuvaldin | Director of photography"
            />
            <meta
               property="og:description"
               content="Dmitry Kuvaldin | Cinematographer"
            />
            <meta property="og:image" content="/images/me.webp" />
            <meta
               name="description"
               content="Director of photography and documentary filmmaker. Commercials, Music videos, Docufiction. Berlin | Worldwide 🌿"
            />
            <meta
               name="google-site-verification"
               content="5lXtcouYmj5oZ8NinxFHnQSe1J3LtQ6DTmMga5SqYTg"
            />
            <link rel="icon" href="/favicon.ico" />
            <link rel="icon" type="image/png" href="/favicon.png" />
            <link
               href="images/favicon.png"
               rel="apple-touch-icon"
               type="image/png"
               sizes="144x144"
            />
         </Head>
         <div className={styles.navWrapper}>
            <div style={{ backgroundColor: "white" }} />
            <nav className={styles.nav}>
               <div className={styles.rightColumn}>
                  <a style={{ display: "none" }} href="/sitemap.xml">
                     Sitemap
                  </a>

                  <Link href="/">
                     <h1 style={{ color: "#d1631a" }} className={styles.logo}>
                        Dmitry Kuvaldin
                     </h1>
                     <span style={{ fontSize: "10px" }}>Director of photography </span>
                  </Link>
               </div>
               <div className={styles.navMenu}>
                  {/* <Link className={cn(styles.navItem, styles.logo, isActive('/'))} href="/">Works</Link> */}
                  <Link
                     className={cn(styles.navItem, styles.logo, isActive("/ads"))}
                     href="/ads"
                  >
                     Commercials
                  </Link>
                  <Link
                     className={cn(styles.navItem, styles.logo, isActive("/docs"))}
                     href="/docs"
                  >
                     Films
                  </Link>
                  <Link
                     className={cn(styles.navItem, styles.logo, isActive("/music"))}
                     href="/music"
                  >
                     Music
                  </Link>
                  <Link
                     className={cn(styles.navItem, styles.logo, isActive("/contacts"))}
                     href="/contacts"
                  >
                     Info
                  </Link>
               </div>

               <div className={styles.burger}>
                  <svg
                     onClick={toggleMenu}
                     className={styles.sandwich}
                     viewBox="0 -53 384 384"
                     width="28px"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
                     <path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
                     <path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
                  </svg>
               </div>
            </nav>
            <div style={{ backgroundColor: "white" }} />
         </div>
         <div className={styles.container}>
            <main className={styles.main}>
               {showMenu && (
                  <div className={styles.menuOverlay}>
                     <div className={styles.menuLayout}>
                        <div className={styles.menuOptions}>
                           {/* <Link className={cn(styles.navItem, styles.logo, isActive('/'))} href="/">
                    <h1 className={cn(styles.navItem, styles.logo)}> Works</h1>
                  </Link> */}
                           <Link
                              className={cn(
                                 styles.navItem,
                                 styles.logo,
                                 isActive("/ads"),
                              )}
                              href="/ads"
                           >
                              <h1 className={cn(styles.navItem, styles.logo)}>
                                 Commercials
                              </h1>
                           </Link>

                           <Link
                              className={cn(
                                 styles.navItem,
                                 styles.logo,
                                 isActive("/docs"),
                              )}
                              href="/docs"
                           >
                              <h1 className={cn(styles.navItem, styles.logo)}>Films</h1>
                           </Link>

                           <Link
                              className={cn(
                                 styles.navItem,
                                 styles.logo,
                                 isActive("/music"),
                              )}
                              href="/music"
                           >
                              <h1 className={cn(styles.navItem, styles.logo)}>Music</h1>
                           </Link>
                           <Link
                              className={cn(
                                 styles.navItem,
                                 styles.logo,
                                 isActive("/contacts"),
                              )}
                              href="/contacts"
                           >
                              <h1 className={cn(styles.navItem, styles.logo)}>Info</h1>
                           </Link>
                        </div>
                     </div>
                  </div>
               )}

               {children}
            </main>
         </div>
         <Footer />
      </div>
   )
}

export default MainLayout
