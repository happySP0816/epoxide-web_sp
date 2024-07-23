import { HttpStatusCode } from '@solidjs/start'
import './index.scss'
import './404.scss'
import { NOT_FOUND } from '@epoxide/web-constants'

export default function NotFound() {
  return (
    <>
      <HttpStatusCode code={404} />
      <h1>{NOT_FOUND.TITLE}</h1>
      <section class="links">
        <a href="/">{NOT_FOUND.GO_BACK}</a>
      </section>
    </>
  )
}
