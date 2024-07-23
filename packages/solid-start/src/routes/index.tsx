import { HOME } from '@epoxide/web-constants'
import TitleLogo from '~/components/TitleLogo'
import './index.scss'

export default function Home() {
  return (
    <>
      <TitleLogo
        src="/images/epoxide-logo-circle.svg"
        alt={HOME.LOGO.ALT}
        logoSize={HOME.LOGO.SIZE}
        title={HOME.TITLE}
      />
      <section class="links">
        <a href={HOME.LINKS.R2AT.URL} target="_blank">
          {HOME.LINKS.R2AT.TEXT}
        </a>
        <a href={HOME.LINKS.TOTTES_KZ.URL} target="_blank">
          {HOME.LINKS.TOTTES_KZ.TEXT}
        </a>
        <a href={HOME.LINKS.KZ_REPLAY_VIEWER.URL} target="_blank">
          {HOME.LINKS.KZ_REPLAY_VIEWER.TEXT}
        </a>
      </section>
    </>
  )
}
