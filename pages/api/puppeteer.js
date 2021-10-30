import chromium from 'chrome-aws-lambda';
import puppeteer from 'puppeteer-core'


export default async function handler(req, res) {
    const executablePath = await chromium.executablePath
    console.log(executablePath)
    // setup
    const browser = await puppeteer.launch({
      args: chromium.args,
      executablePath: '/opt/build/repo/node_modules/chromium/lib/chromium/chrome-linux/chrome',
      headless: chromium.headless,
    })

  res.status(200).json({ name: 'John Doe' })
}