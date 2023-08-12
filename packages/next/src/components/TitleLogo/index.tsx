import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import styles from './styles.module.scss'

interface TitleLogoProps {
  src: string | StaticImageData
  alt: string
  width: number
  height: number
  title: string
}

export function TitleLogo({ src, alt, width, height, title }: TitleLogoProps) {
  return (
    <div className={styles.container}>
      <Image src={src} alt={alt} width={width} height={height} priority />
      <h1 className={styles.title}>{title}</h1>
    </div>
  )
}
