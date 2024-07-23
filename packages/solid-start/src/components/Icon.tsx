export interface IconProps {
  icon: string
  iconLibrary: 'brands' | 'solid'
  size?: '2xs' | 'xs' | 'sm' | 'lg' | 'xl' | '2xl'
}

export default function Icon(props: IconProps) {
  return (
    <i
      class={`fa-${props.iconLibrary} fa-${props.icon}${props.size ? ` fa-${props.size}` : ''}`}
    />
  )
}
