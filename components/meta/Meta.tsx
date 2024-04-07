import Head from 'next/head'
import { FC } from 'react'
// import cn from 'classnames'
// import styles from './Meta.module.css'

interface IMeta { }

const Meta: FC<IMeta> = ({ }) => {
  // const dispatch = useAppDispatch()
  return (
    <>
       <Head>
        <title>Kuvaldin.de</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Dmitry Kuvaldin | Director of photography" />
        <meta property="og:description" content="Dmitry Kuvaldin | Cinematographer" />
        <meta property="og:image" content="/images/me.webp" />
        <meta
          name="description"
          content="Director of photography and documentary filmmaker. Commercials, Music videos, Docufiction. Berlin | Worldwide 🌿"
        />
        <meta name="google-site-verification" content="5lXtcouYmj5oZ8NinxFHnQSe1J3LtQ6DTmMga5SqYTg" />
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="icon" type="image/png" href="/favicon.png" /> */}
        <link href="images/favicon.png" rel="apple-touch-icon" type="image/png" sizes="144x144" />
      </Head>
    </>
  )
}

export default Meta
