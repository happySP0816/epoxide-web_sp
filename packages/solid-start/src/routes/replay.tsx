import { REDIRECTS } from '@epoxide/web-constants'
import { redirect } from '@solidjs/router'

export function GET() {
  return redirect(REDIRECTS.KZ_REPLAY_VIEWER.REDIRECT_URL)
}
