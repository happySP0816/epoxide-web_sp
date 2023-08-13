import { expect, test } from '@playwright/test'
import { HOME, META } from '@epoxide/web-constants'

test('has title with epoxide', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(META.TITLE)
})

test('has h1 with text epoxide', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('h1')).toHaveText(HOME.TITLE)
})
