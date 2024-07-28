import { expect, test } from '@playwright/test'
import { HOME, META } from '@epoxide/web-constants'

test('has logo', async ({ page }) => {
  await page.goto('/')
  await expect(
    page.locator('main').locator('img').getByAltText(HOME.LOGO.ALT),
  ).toBeTruthy()
})

test('has title with epoxide', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(META.TITLE)
})

test('has h1 with text epoxide', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('h1')).toHaveText(HOME.TITLE)
})

test('has section with links', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('section').locator('a')).toBeTruthy()
})

test('matches snapshot', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveScreenshot('../snapshots/home.test.ts.png', {
    maxDiffPixelRatio: 0.1,
  })
})
