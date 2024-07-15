import { expect, test } from '@playwright/test'
import { HOME, REDIRECTS } from '@epoxide/web-constants'

test('redirects to old', async ({ page }) => {
  await page.goto(REDIRECTS.R2AT.PATH)
  await page.waitForURL(`${HOME.LINKS.R2AT.URL}/`)
  await expect(page.url()).toBe(`${HOME.LINKS.R2AT.URL}/`)
  await page.goto(REDIRECTS.TOTTES_KZ.PATH)
  await page.waitForURL(`${HOME.LINKS.TOTTES_KZ.URL}/`)
  await expect(page.url()).toBe(`${HOME.LINKS.TOTTES_KZ.URL}/`)
  await page.goto(REDIRECTS.KZ_REPLAY_VIEWER.PATH)
  await page.waitForURL(`${HOME.LINKS.KZ_REPLAY_VIEWER.URL}/`)
  await expect(page.url()).toBe(`${HOME.LINKS.KZ_REPLAY_VIEWER.URL}/`)
})
