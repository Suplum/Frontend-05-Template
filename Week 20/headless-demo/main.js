const puppeteer = require("puppeteer");

(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto("http://localhost:3000");
	const a = await page.$("img");
	console.log(await a.asElement().boxModel());
})();