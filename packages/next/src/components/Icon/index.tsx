export interface IconProps {
  icon: string
  iconLibrary: 'brands' | 'solid'
  size?: '2xs' | 'xs' | 'sm' | 'lg' | 'xl' | '2xl'
}

export function Icon({ iconLibrary, icon, size }: IconProps) {
  return (
    <i className={`fa-${iconLibrary} fa-${icon}${size ? ` fa-${size}` : ''}`} />
  )
}
