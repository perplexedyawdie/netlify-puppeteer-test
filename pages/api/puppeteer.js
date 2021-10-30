import puppeteer from 'puppeteer-core'
import chromium from 'chromium'
import path from 'path'
const fs = require( 'fs' );
const log = console.log;
const folder = './opt';
export default async function handler(req, res) {
    // setup
    console.log(process.env)
    console.log(chromium.path)
    console.log(__dirname)
    // fs.readdirSync( folder ).forEach( file => {
   
    //     const extname = path.extname( file );
    //     const filename = path.basename( file, extname );
    //     const absolutePath = path.resolve( folder, file );
     
    //     log( "File : ", file );
    //     log( "filename : ", filename );
    //     log( "extname : ", extname );
    //     log( "absolutePath : ", absolutePath);
     
    //  });
    const browser = await puppeteer.launch({
      executablePath: '../../../node_modules/chromium/lib/chromium/chrome-linux/chrome',
      headless: true,
    })

  res.status(200).json({ name: 'John Doe' })
}