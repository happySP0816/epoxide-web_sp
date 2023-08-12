import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import styles from './styles.module.scss'

interface TitleLogoProps {
  src: string | StaticImageData
  alt: string
  logoSize: number
  title: string
}

export function TitleLogo({ src, alt, logoSize, title }: TitleLogoProps) {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <Image
          src={src}
          alt={alt}
          width={logoSize}
          height={logoSize}
          priority
        />
        <h1 className={styles.title}>{title}</h1>
      </div>
    </div>
  )
}
