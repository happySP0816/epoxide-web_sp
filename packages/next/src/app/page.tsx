import Link from 'next/link'
import styles from './page.module.scss'
import { HOME } from '@epoxide/web-constants'
import { TitleLogo } from '@/components/TitleLogo'
import epoxideLogo from '../../public/epoxide-logo-circle.svg'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <TitleLogo
          src={epoxideLogo}
          alt={HOME.LOGO.ALT}
          logoSize={HOME.LOGO.SIZE}
          title={HOME.TITLE}
        />
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
      <Footer src={epoxideLogo} />
    </>
  )
}
