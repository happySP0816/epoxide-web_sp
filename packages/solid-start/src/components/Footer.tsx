import { For } from 'solid-js'
import { FOOTER } from '@epoxide/web-constants'
import './Footer.scss'
import IconButton from '~/components/IconButton'

interface FooterProps {
  src: string
}

export default function Footer(props: FooterProps) {
  return (
    <footer>
      <div class="title-logo">
        <img
          src={props.src}
          alt={FOOTER.LOGO.ALT}
          width={FOOTER.LOGO.SIZE}
          height={FOOTER.LOGO.SIZE}
        />
        <span>{FOOTER.TITLE}</span>
      </div>
      <section class="social-media-links">
        <For each={FOOTER.SOCIAL_MEDIA_LINKS}>
          {(link) => {
            return (
              <IconButton
                href={link.URL}
                target="_blank"
                icon={link.ICON}
                iconLibrary="brands"
                size="xl"
                ariaLabel={link.ARIA_LABEL}
              />
            )
          }}
        </For>
      </section>
    </footer>
  )
}
