import type { IconProps } from '@/components/Icon'
import { Icon } from '@/components/Icon'
import styles from './styles.module.scss'

interface IconButtonProps extends IconProps {
  href?: string
  target?: '_blank' | '_self' | '_parent' | '_top'
  type?: 'button' | 'submit' | 'reset'
}

export function IconButton({
  icon,
  iconLibrary,
  size,
  type,
  href,
  target,
}: IconButtonProps) {
  if (href) {
    return (
      <a href={href} target={target ?? undefined} className={styles.button}>
        <Icon icon={icon} iconLibrary={iconLibrary} size={size} />
      </a>
    )
  } else {
    return (
      <button type={type ?? undefined} className={styles.button}>
        <Icon icon={icon} iconLibrary={iconLibrary} size={size} />
      </button>
    )
  }
}
