import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.com/');
  await page.getByPlaceholder('Search Amazon').fill('legend of zelda tears of the kingdom');
  await page.getByPlaceholder('Search Amazon').press('Enter');
  await expect(page.getByRole('link', { name: 'The Legend of Zelda: Tears of the Kingdom - Nintendo Switch (US Version)' })
    .first())
    .toBeVisible();
  await page.getByRole('link', { name: 'The Legend of Zelda: Tears of the Kingdom - Nintendo Switch (US Version)' }).first().click();
  await page.getByTitle('Add to Shopping Cart').click();
  await page.getByLabel('Proceed to checkout (1 item)').click();
  await page.getByLabel('Email or mobile phone number').click();
});