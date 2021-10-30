import puppeteer from 'puppeteer-core'
import chromium from 'chromium'
import path from 'path'
export default async function handler(req, res) {
    // setup
    console.log(process.env.CHROME_PATH)
    console.log(__dirname)
    const browser = await puppeteer.launch({
      executablePath: '/opt/build/repo/node_modules/chromium/lib/chromium/chrome-linux/chrome',
      headless: true,
    })

  res.status(200).json({ name: 'John Doe' })
}