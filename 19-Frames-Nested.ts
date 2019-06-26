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

  step('Test: 02 - Frames', async browser => {
  
    let linkHref = await browser.findElement(By.css('#content > ul > li:nth-child(19) > a'))
    await linkHref.click()
    let pageTextVerify = By.visibleText('Frames')
    await browser.wait(Until.elementIsVisible(pageTextVerify))

  })

  step('Test: 03 - Nested Frames', async browser => {

    let Nested = By.css('#content > div > ul > li:nth-child(1) > a')
    await browser.wait(Until.elementIsVisible(Nested))
    let NestedLink = await browser.findElement(Nested)
    await NestedLink.click()

  })

  step('Test: 04 - Frames', async browser => {

      let ArrayFrames = await browser.findElements(By.tagName('frame'))
      assert(ArrayFrames.length > 0, 'expected to find some Frames')
      await browser.switchTo().frame("frame-top")
      await browser.switchTo().defaultContent()
      await browser.switchTo().frame("frame-left")
      await browser.switchTo().defaultContent()
      await browser.switchTo().frame("frame-middle")
      await browser.switchTo().defaultContent()
      await browser.switchTo().frame("frame-right")
      await browser.switchTo().defaultContent()
      
  })

}