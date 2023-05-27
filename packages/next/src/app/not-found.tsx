import Link from 'next/link'
import styles from './page.module.scss'
import { NOT_FOUND } from '@epoxide/web-constants'

export default function NotFound() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{NOT_FOUND.TITLE}</h1>
      <section className={styles.links}>
        <Link href={'/'}>{NOT_FOUND.GO_BACK}</Link>
      </section>
    </main>
  )
}
