import chromium from 'chrome-aws-lambda';
import puppeteer from 'puppeteer-core'


export default async function handler(req, res) {
    const executablePath = await chromium.executablePath
    console.log(executablePath)
    // setup
    const browser = await puppeteer.launch({
      executablePath: '../../node_modules/chromium/lib/chromium/chrome-linux/chrome',
      headless: true,
    })

  res.status(200).json({ name: 'John Doe' })
}