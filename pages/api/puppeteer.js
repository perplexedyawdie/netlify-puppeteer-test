import puppeteer from 'puppeteer-core'


export default async function handler(req, res) {
    // setup
    const browser = await puppeteer.launch({
      executablePath: '../../node_modules/chromium/lib/chromium/chrome-linux/chrome',
      headless: true,
    })

  res.status(200).json({ name: 'John Doe' })
}