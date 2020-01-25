const puppeteer = require('puppeteer');
const pageUrl = 'http://127.0.0.1:8081/';

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://example.com');
    await page.screenshot({path: 'example.png'});
  
    await browser.close();
  })();