import { redirect } from '@sveltejs/kit'
import type { PageLoad } from './$types'
import { REDIRECTS } from '@epoxide/web-constants'

export const load: PageLoad = () => {
  throw redirect(301, REDIRECTS.R2AT.REDIRECT_URL)
}
