import { expect, test } from '@playwright/test'

test('has sitemap with root', async ({ page }) => {
  await page.goto('/sitemap.xml')

  const urls = await page.$$eval('url', (urls) =>
    urls.map((url) => ({
      loc: url.querySelector('loc')?.textContent,
    })),
  )

  await expect(urls[0].loc).toBe('https://epoxide.se')
})
