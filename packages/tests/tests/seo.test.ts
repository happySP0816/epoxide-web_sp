import { expect, test } from '@playwright/test'

test('has meta robots with index, follow, and nocache', async ({ page }) => {
  await page.goto('/')
  await expect(
    await page.locator('meta[name="robots"]').getAttribute('content'),
  ).toBe('index, follow, nocache')
})

test('has meta googlebot with index, follow, and nocache', async ({ page }) => {
  await page.goto('/')
  await expect(
    await page.locator('meta[name="googlebot"]').getAttribute('content'),
  ).toBe('index, follow, nocache')
})

test('has robots.txt with all agents', async ({ page }) => {
  await page.goto('/robots.txt')
  await expect(await page.locator('body').innerText()).toContain(
    'User-Agent: *',
  )
})

test('has robots.txt targeting AdsBot-Google explicitly', async ({ page }) => {
  await page.goto('/robots.txt')
  await expect(await page.locator('body').innerText()).toContain(
    'User-Agent: AdsBot-Google',
  )
})

test('has robots.txt with allow all', async ({ page }) => {
  await page.goto('/robots.txt')
  await expect(await page.locator('body').innerText()).toContain('Allow: /')
})

test('has robots.txt with sitemap', async ({ page }) => {
  await page.goto('/robots.txt')
  await expect(await page.locator('body').innerText()).toContain(
    'Sitemap: https://epoxide.se/sitemap.xml',
  )
})
