import Head from 'next/head'
import styles from '../styles/Home.module.css'
// import About from './about.js'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Steal My Yo-Yos!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         SMYYCO. 
        </h1>
      </main>

      <footer className={styles.footer}>
           ∞²
      </footer>
    </div>
  )
}
