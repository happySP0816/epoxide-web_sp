import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import { FOOTER } from '@epoxide/web-constants'
import styles from './styles.module.scss'
import { IconButton } from '../IconButton'

interface FooterProps {
  src: string | StaticImageData
}

export function Footer({ src }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.titleLogo}>
        <Image
          src={src}
          alt={FOOTER.LOGO.ALT}
          width={FOOTER.LOGO.SIZE}
          height={FOOTER.LOGO.SIZE}
        />
        <span>{FOOTER.TITLE}</span>
      </div>
      <section className={styles.socialMediaLinks}>
        {FOOTER.SOCIAL_MEDIA_LINKS.map((link) => {
          return (
            <IconButton
              href={link.URL}
              target="_blank"
              icon={link.ICON}
              key={link.ICON}
              iconLibrary="brands"
              size="xl"
            />
          )
        })}
      </section>
    </footer>
  )
}
