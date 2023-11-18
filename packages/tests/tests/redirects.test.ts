import { expect, test } from '@playwright/test'
import { HOME } from '@epoxide/web-constants'

test('redirects to old', async ({ page }) => {
  await page.goto('/R2AT')
  await expect(page.url()).toBe(`${HOME.LINKS.R2AT.URL}/`)
  await page.goto('/stats')
  await expect(page.url()).toBe(`${HOME.LINKS.TOTTES_KZ.URL}/`)
  await page.goto('/replay')
  await expect(page.url()).toBe(`${HOME.LINKS.KZ_REPLAY_VIEWER.URL}/`)
})
