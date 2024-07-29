import { expect, test } from '@playwright/test'
import { NOT_FOUND } from '@epoxide/web-constants'

test('has h1 with not found text', async ({ page }) => {
  await page.goto('/non-existing-route')
  await expect(page.locator('h1')).toHaveText(NOT_FOUND.TITLE)
})

test('has link to home', async ({ page }) => {
  await page.goto('/non-existing-route')
  await page.getByText(NOT_FOUND.GO_BACK).click()
  await expect(page).toHaveURL('/')
})

test('uses layout', async ({ page }) => {
  await page.goto('/non-existing-route')
  await expect(page.locator('footer')).toBeTruthy()
})

test('matches desktop snapshot', async ({ page }) => {
  await page.goto('/non-existing-route')
  await page.setViewportSize({ width: 1920, height: 1080 })
  await expect(page).toHaveScreenshot(
    '../snapshots/404.test.ts.matches-desktop-snapshot.png',
    {
      maxDiffPixelRatio: 0.01,
    },
  )
})

test('matches mobile snapshot', async ({ page }) => {
  await page.goto('/non-existing-route')
  await page.setViewportSize({ width: 393, height: 852 })
  await expect(page).toHaveScreenshot(
    '../snapshots/404.test.ts.matches-mobile-snapshot.png',
    {
      maxDiffPixelRatio: 0.01,
    },
  )
})
