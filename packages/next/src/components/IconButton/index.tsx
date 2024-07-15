import { Icon, type IconProps } from '../Icon'
import styles from './styles.module.scss'

interface IconButtonProps extends IconProps {
  href?: string
  target?: '_blank' | '_self' | '_parent' | '_top'
  type?: 'button' | 'submit' | 'reset'
  ariaLabel?: string
}

export function IconButton({
  icon,
  iconLibrary,
  size,
  type,
  href,
  target,
  ariaLabel,
}: IconButtonProps) {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={styles.button}
        aria-label={ariaLabel}
      >
        <Icon icon={icon} iconLibrary={iconLibrary} size={size} />
      </a>
    )
  } else {
    return (
      <button type={type} className={styles.button}>
        <Icon icon={icon} iconLibrary={iconLibrary} size={size} />
      </button>
    )
  }
}
