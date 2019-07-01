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

  step('Test: 02 - Notification Messages', async browser => {
  
    let linkHref = await browser.findElement(By.css('#content > ul > li:nth-child(31) > a'))
    await linkHref.click()
    let pageTextVerify = By.visibleText('Notification')
    await browser.wait(Until.elementIsVisible(pageTextVerify))

  })

  step('Test: 03 - Load new Message', async browser => {
  
    let Flash = await browser.findElement(By.id('flash'))
    const Text = await Flash.text()
    console.log('The Flash message says: ' + Text )

    let NewMesg = await browser.findElement(By.css('#content > div > p > a'))
    await NewMesg.click()
    let pageTextVerify = By.visibleText('successful')
    await browser.wait(Until.elementIsVisible(pageTextVerify))

  })

  step('Test: 04 - New Message', async browser => {
  
    let Flash = await browser.findElement(By.id('flash'))
    const Text = await Flash.text()
    console.log('The Flash message says: ' + Text )

  })

}