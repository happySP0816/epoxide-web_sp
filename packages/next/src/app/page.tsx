import Link from 'next/link'
import styles from './page.module.scss'
import { HOME } from '@epoxide/web-constants'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{HOME.TITLE}</h1>
      <section className={styles.links}>
        <Link href={HOME.LINKS.R2AT.URL} target="_blank">
          {HOME.LINKS.R2AT.TEXT}
        </Link>
        <Link href={HOME.LINKS.TOTTES_KZ.URL} target="_blank">
          {HOME.LINKS.TOTTES_KZ.TEXT}
        </Link>
        <Link href={HOME.LINKS.KZ_REPLAY_VIEWER.URL} target="_blank">
          {HOME.LINKS.KZ_REPLAY_VIEWER.TEXT}
        </Link>
      </section>
    </main>
  )
}
