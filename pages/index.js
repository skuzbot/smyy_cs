import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Steal My Yo-Yos!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          COMING SOON...
        </h1>
      </main>

      <footer className={styles.footer}>
           ∞²
      </footer>
    </div>
  )
}
