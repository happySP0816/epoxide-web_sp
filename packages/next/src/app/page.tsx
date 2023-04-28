import Link from 'next/link'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>epoxide</h1>
      <section className={styles.links}>
        <Link href="https://old.epoxide.se/R2AT">
          R²AT - Radial Reliability Analysis Tool
        </Link>
        <Link href="https://old.epoxide.se/stats">Tottes KZ - Stats</Link>
        <Link href="https://old.epoxide.se/replay">KZ Replay Viewer</Link>
      </section>
    </main>
  )
}
