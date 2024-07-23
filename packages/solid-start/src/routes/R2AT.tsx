import { REDIRECTS } from '@epoxide/web-constants'
import { redirect } from '@solidjs/router'

export function GET() {
  return redirect(REDIRECTS.R2AT.REDIRECT_URL)
}
