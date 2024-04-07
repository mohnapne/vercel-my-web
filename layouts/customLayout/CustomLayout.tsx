import { FC } from "react"
// import cn from 'classnames'
import styles from "./CustomLayout.module.css"
import Head from "next/head"
import Meta from "@/components/meta/Meta"
// import Footer from "../footer/Footer"
import Header from "@/components/header/Header"
import Footer from "../footer/Footer"

interface IProps {
  children: React.ReactNode
}

const CustomLayout: FC<IProps> = ({ children }) => {
  // const dispatch = useAppDispatch()
  return (
    <div className={styles.layout}>
      <Meta />
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  )
}

export default CustomLayout
