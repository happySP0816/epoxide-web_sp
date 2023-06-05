import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.scss'
import { HOME } from '@epoxide/web-constants'
import epoxideLogo from '../../public/epoxide-logo-circle.svg'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.titleContainer}>
        <Image
          src={epoxideLogo}
          alt={HOME.LOGO.ALT}
          width={HOME.LOGO.SIZE}
          height={HOME.LOGO.SIZE}
        />
        <h1 className={styles.title}>{HOME.TITLE}</h1>
      </div>
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
