import puppeteer from 'puppeteer-core'
import chromium from 'chromium'

export default async function handler(req, res) {
    // setup
    console.log(chromium.path)
    const browser = await puppeteer.launch({
      executablePath: chromium.path,
      headless: true,
    })

  res.status(200).json({ name: 'John Doe' })
}