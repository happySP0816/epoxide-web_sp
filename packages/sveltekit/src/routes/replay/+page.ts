import { redirect } from '@sveltejs/kit'
import type { PageLoad } from './$types'
import { REDIRECTS } from '@epoxide/web-constants'

export const load: PageLoad = () => {
  throw redirect(301, REDIRECTS.KZ_REPLAY_VIEWER.REDIRECT_URL)
}
