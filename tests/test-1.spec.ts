import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://dev-portfolio-psi-gilt.vercel.app/');
  await page.goto('https://dev-portfolio-psi-gilt.vercel.app/hello');
  // await page.getByRole('heading', { name: 'Hola a todos. Soy' }).click();
  // await page.getByRole('heading', { name: 'Lucas Baronio' }).click();
  // await page.getByRole('heading', { name: 'Ingeniero de Software' }).click();
  // await page.getByRole('button', { name: '_acerca-de-mi' }).click();
  // await page.getByRole('heading', { name: 'Un poco sobre mi' }).click();
  await page.getByRole('button', { name: '_acerca-de-mi' }).click();
  await expect(page.locator('#bio')).toContainText('Un poco sobre mi');
  await expect(page.locator('#experience')).toContainText('Mi experiencia');
  await expect(page.locator('#tech-stack')).toContainText('Mis conocimiento tecnológico');
  await expect(page.locator('#tools')).toContainText('Herramientas');
  await expect(page.locator('#education')).toContainText('Mi educación');
  await page.getByRole('button', { name: '_proyectos' }).click();
  await expect(page.getByRole('main')).toContainText('My projects');
  await expect(page.getByRole('main')).toContainText('Contribuciones en Github');
});
