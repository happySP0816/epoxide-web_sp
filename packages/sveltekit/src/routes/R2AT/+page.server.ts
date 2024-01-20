import { redirect } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'
import { REDIRECTS } from '@epoxide/web-constants'

export const prerender = true

export const load: PageServerLoad = () => {
  throw redirect(301, REDIRECTS.R2AT.REDIRECT_URL)
}
