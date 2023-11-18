import { expect, test } from '@playwright/test'
import { META } from '@epoxide/web-constants'

test('has favicon', async ({ page }) => {
  await page.goto('/')
  await expect(
    await page.locator('link[rel="icon"]').getAttribute('href'),
  ).toBe('/favicon.ico')
  await expect(page.goto('/favicon.ico')).resolves.toBeTruthy()
})

test('has description', async ({ page }) => {
  await page.goto('/')
  await expect(
    await page.locator('meta[name="description"]').getAttribute('content'),
  ).toBe(META.DESCRIPTION)
})

test('has color scheme', async ({ page }) => {
  await page.goto('/')
  await expect(
    await page.locator('meta[name="color-scheme"]').getAttribute('content'),
  ).toBe(META.COLOR_SCHEME)
})

test('has theme color', async ({ page }) => {
  await page.goto('/')
  await expect(
    await page.locator('meta[name="theme-color"]').getAttribute('content'),
  ).toBe(META.THEME_COLOR)
})

test('has opengraph title', async ({ page }) => {
  await page.goto('/')
  await expect(
    await page.locator('meta[property="og:title"]').getAttribute('content'),
  ).toBe(META.TITLE)
})

test('has opengraph description', async ({ page }) => {
  await page.goto('/')
  await expect(
    await page
      .locator('meta[property="og:description"]')
      .getAttribute('content'),
  ).toBe(META.DESCRIPTION)
})

test('has opengraph url', async ({ page }) => {
  await page.goto('/')
  await expect(
    await page.locator('meta[property="og:url"]').getAttribute('content'),
  ).toBe(`${META.URL}/`)
})

test('has opengraph site name', async ({ page }) => {
  await page.goto('/')
  await expect(
    await page.locator('meta[property="og:site_name"]').getAttribute('content'),
  ).toBe(META.SITE_NAME)
})

test('has opengraph locale', async ({ page }) => {
  await page.goto('/')
  await expect(
    await page.locator('meta[property="og:locale"]').getAttribute('content'),
  ).toBe(META.LOCALE)
})

test('has opengraph image', async ({ page }) => {
  await page.goto('/')
  const ogImage = await page
    .locator('meta[property="og:image"]')
    .getAttribute('content')
  await expect(ogImage).toBe(`${META.URL}${META.OG_IMAGE}`)
  await expect(page.goto(ogImage as string)).resolves.toBeTruthy()
})

test('has opengraph type', async ({ page }) => {
  await page.goto('/')
  await expect(
    await page.locator('meta[property="og:type"]').getAttribute('content'),
  ).toBe(META.TYPE)
})

test('has twitter card', async ({ page }) => {
  await page.goto('/')
  await expect(
    await page.locator('meta[name="twitter:card"]').getAttribute('content'),
  ).toBe(META.TWITTER_CARD)
})

test('has twitter creator', async ({ page }) => {
  await page.goto('/')
  await expect(
    await page.locator('meta[name="twitter:creator"]').getAttribute('content'),
  ).toBe(META.TWITTER_CREATOR)
})

test('has twitter creator id', async ({ page }) => {
  await page.goto('/')
  await expect(
    await page
      .locator('meta[name="twitter:creator:id"]')
      .getAttribute('content'),
  ).toBe(META.TWITTER_CREATOR_ID)
})

test('has twitter title', async ({ page }) => {
  await page.goto('/')
  await expect(
    await page.locator('meta[name="twitter:title"]').getAttribute('content'),
  ).toBe(META.TITLE)
})

test('has twitter description', async ({ page }) => {
  await page.goto('/')
  await expect(
    await page
      .locator('meta[name="twitter:description"]')
      .getAttribute('content'),
  ).toBe(META.DESCRIPTION)
})

test('has twitter image', async ({ page }) => {
  await page.goto('/')
  const twitterImage = await page
    .locator('meta[name="twitter:image"]')
    .getAttribute('content')
  await expect(twitterImage).toBe(`${META.URL}${META.TWITTER_IMAGE}`)
  await expect(page.goto(twitterImage as string)).resolves.toBeTruthy()
})
