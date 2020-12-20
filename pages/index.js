import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Under Construction</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
		<h1 className={styles.title}>🚧</h1>
        <h1 className={styles.title}>Currently Under Construction</h1>
		<h1 className={styles.title}>🚧</h1>

        <p className={styles.description}>
          We hope to be finished soon!
        </p>
          <a href="https://github.com/connorpawar" className={styles.card}>
            <h3>My Github &rarr;</h3>
	    <img src="/Construction.jpg" alt="Construction Dog" width="256" height="256" />
          </a>
      </main>

      <footer className={styles.footer}>
          A site by Connor Pawar
      </footer>
    </div>
  )
}
