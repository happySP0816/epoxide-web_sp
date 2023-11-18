import { expect, test } from '@playwright/test'

test('has robots with index, follow, and nocache', async ({ page }) => {
  await page.goto('/')
  await expect(
    await page.locator('meta[name="robots"]').getAttribute('content'),
  ).toBe('index, follow, nocache')
})

test('has googlebot with index, follow, and nocache', async ({ page }) => {
  await page.goto('/')
  await expect(
    await page.locator('meta[name="googlebot"]').getAttribute('content'),
  ).toBe('index, follow, nocache')
})
