import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Under Construction</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
		🚧 Currently Under Construction 🚧
        </h1>

        <p className={styles.description}>
          We hope to be finished soon!
        </p>

        <div className={styles.grid}>
          <a href="https://github.com/connorpawar" className={styles.card}>
            <h3>My Github &rarr;</h3>
			<Image src="/Construction.jpg" alt="Construction Dog" width="512" height="512" />
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
          A site by Connor Pawar
      </footer>
    </div>
  )
}
