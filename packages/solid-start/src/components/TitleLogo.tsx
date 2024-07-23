import './TitleLogo.scss'

interface TitleLogoProps {
  src: string
  alt: string
  logoSize: number
  title: string
}

export default function TitleLogo(props: TitleLogoProps) {
  return (
    <div class="container">
      <div class="background">
        <img
          src={props.src}
          alt={props.alt}
          width={props.logoSize}
          height={props.logoSize}
        />
        <h1 class="title">{props.title}</h1>
      </div>
    </div>
  )
}
