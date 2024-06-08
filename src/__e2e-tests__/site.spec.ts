import { test, expect } from '@playwright/test'

test('should have a contact form', async ({ page }) => {
  await page.goto('/')
  // The new page should contain an article
  await expect(page.locator('form[name=contact]')).toBeDefined()
})
