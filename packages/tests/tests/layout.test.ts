import { expect, test } from '@playwright/test'

test('has main', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('main')).toBeTruthy()
})

test('has footer', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('footer')).toBeTruthy()
})
