import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
await expect.poll(async () => {
    const response = await page.request.get('https://api.example.com');
    return response.status();
  }, {
    // Custom error message, optional.
    message: 'make sure API eventually succeeds', // custom error message
    // Poll for 10 seconds; defaults to 5 seconds. Pass 0 to disable timeout.
    timeout: 10000,
  }).toBe(200);
//
  await expect.poll(async () => {
    const response = await page.request.get('https://api.example.com');
    return response.status();
  }, {
    // Probe, wait 1s, probe, wait 2s, probe, wait 10s, probe, wait 10s, probe, .... Defaults to [100, 250, 500, 1000].
    intervals: [1_000, 2_000, 10_000],
    timeout: 60_000
  }).toBe(200);
});

  /*Herhangi bir senkronize beklentiyi, wait.poll kullanarak asenkron bir yoklamaya dönüştürebilirsiniz. 
  Aşağıdaki yöntem, HTTP durumu 200'ü döndürene kadar verilen işlevi yoklayacaktır:*/ 
