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

  step('Test: 02 - Secure File Download', async browser => {
  
    let linkHref = await browser.findElement(By.css('#content > ul > li:nth-child(33) > a'))
    await linkHref.click()

  })

  step('Test: 03 - Enter credentials', async browser => {

    await browser.visit('http://admin:admin@18.208.170.2:7080/download_secure')
    let pageTextVerify = By.visibleText('Secure File Downloader')
    await browser.wait(Until.elementIsVisible(pageTextVerify))

  })

  step('Test: 04 - Secure File Downloader', async browser => {

    let File = await browser.findElement(By.css('#content > div > a'))
    await File.click()

  })

}