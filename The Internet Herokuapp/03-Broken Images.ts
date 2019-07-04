import { step, TestSettings, Until, By, Device } from '@flood/element'
import * as assert from 'assert'

export const settings: TestSettings = {
  clearCache: false,
  disableCache: false,
  clearCookies: false,
  loopCount: 1,
  duration: -1,
  actionDelay: 1.5,
  stepDelay: 3,
  waitTimeout: 60,
  screenshotOnFailure: true,
  DOMSnapshotOnFailure: true
}

/**
 * Author: Antonio Jimenez : antonio@flood.io
 * The Heroku App
 * @version 1.0
*/

export default () => {

  step('Test: 01 - Homepage', async browser => {

    await browser.visit('http://18.208.170.2:7080/')
    await browser.wait(Until.elementIsVisible(By.css('#content > h1')))
    let pageTextVerify = By.visibleText('Welcome to the-internet')
    await browser.wait(Until.elementIsVisible(pageTextVerify))

  })

  step('Test: 02 - Basic Auth', async browser => {

    let linkHref = await browser.findElement(By.css('#content > ul > li:nth-child(3) > a'))
    await linkHref.click()
    await browser.wait(Until.elementIsVisible(By.css('#content > div > h3')))

  })

  step('Test: 03 - Images', async browser => {

    let ArrayImg = await browser.findElements(By.tagName('img'))
    assert(ArrayImg.length > 0, 'expected to find some images')
    console.log('Number of images found: ' + ArrayImg.length)
    for (let Image of ArrayImg) {
        const Src = await Image.getAttribute("src")
        console.log('Image Source: ' + Src)
    }

  })

}