import { expect, test } from '@playwright/test'
import { FOOTER } from '@epoxide/web-constants'

test('has logo', async ({ page }) => {
  await page.goto('/')
  await expect(
    page.locator('footer').locator('img').getByAltText(FOOTER.LOGO.ALT),
  ).toBeTruthy()
})

test('has epoxide text', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('footer').getByText(FOOTER.TITLE)).toBeTruthy()
})

test('has social media buttons in footer', async ({ page }) => {
  await page.goto('/')
  await expect(
    page.locator('footer').locator('section').locator('a'),
  ).toBeTruthy()
})

test('social media buttons links correctly', async ({ context, page }) => {
  await page.goto('/')

  const socialMediaLinks = await page
    .locator('footer')
    .locator('section')
    .locator('a')
    .all()

  for (let index = 0; index < socialMediaLinks.length; index++) {
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      socialMediaLinks[index].click(),
    ])

    await expect(newPage.url()).toBe(FOOTER.SOCIAL_MEDIA_LINKS[index].URL)
  }
})
