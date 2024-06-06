import { test, expect } from '@playwright/test'

test('should navigate to the blog page', async ({ page }) => {
  await page.goto('/')
  // Find an element with the text 'Blog' and click on it
  await page.click('text=Blog')
  // The new URL should be "/blog" (baseURL is used there)
  await expect(page).toHaveURL('/blog/')
  // The new page should contain an article
  await expect(page.locator('article')).toBeDefined()
})

test('should navigate to the tags page', async ({ page }) => {
  await page.goto('/')
  // Find an element with the text 'Tags' and click on it
  await page.click('text=Tags')
  // The new URL should be "/tags" (baseURL is used there)
  await expect(page).toHaveURL('/tags/')
  // The new page should contain the Tag Heading
  await expect(page.locator('h1')).toHaveText('Tags')
})
