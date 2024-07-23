import { Show } from 'solid-js'
import Icon, { type IconProps } from '~/components/Icon'
import './IconButton.scss'

interface IconButtonProps extends IconProps {
  href?: string
  target?: '_blank' | '_self' | '_parent' | '_top'
  type?: 'button' | 'submit' | 'reset'
  ariaLabel?: string
}

export default function IconButton(props: IconButtonProps) {
  return (
    <Show
      when={props.href}
      fallback={
        <button type={props.type} class="button">
          <Icon
            icon={props.icon}
            iconLibrary={props.iconLibrary}
            size={props.size}
          />
        </button>
      }
    >
      <a
        href={props.href}
        target={props.target}
        class="button"
        aria-label={props.ariaLabel}
      >
        <Icon
          icon={props.icon}
          iconLibrary={props.iconLibrary}
          size={props.size}
        />
      </a>
    </Show>
  )
}
