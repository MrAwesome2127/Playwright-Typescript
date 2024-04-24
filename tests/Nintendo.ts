import { test, expect } from '@playwright/test';

test('Add to Cart Legend of Zelda game', async ({ page }) => {
  await page.goto('https://www.nintendo.com/us/');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('textbox', { name: 'Search games, hardware, news' }).fill('The legend of zelda: Tears of the kingdom');
  await page.getByRole('button', { name: 'The legend of zelda: Tears of the kingdom' }).click();

  await page.getByLabel("Physical The Legend of Zelda™: Tears of the Kingdom Collector's Edition").check();
  await expect(page.getByText('Quantity1Sold out')).toBeVisible();

  await page.getByLabel('Physical The Legend of Zelda™: Tears of the Kingdom $').check();
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await expect(page.getByRole('heading', { name: 'The Legend of Zelda™: Tears' }).first()).toBeVisible();
  await expect(page.getByText('$69.99', { exact: true }).first()).toBeVisible();
  await page.getByRole('link', { name: 'View cart and check out' }).click();
  await expect(page.getByText("Congratulations you've qualified for free shipping!").nth(1)).toBeVisible();


});