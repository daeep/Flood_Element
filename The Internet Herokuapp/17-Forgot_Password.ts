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

  step('Test: 02 - Forgot Password', async browser => {
  
    let linkHref = await browser.findElement(By.css('#content > ul > li:nth-child(17) > a'))
    await linkHref.click()
    let pageTextVerify = By.visibleText('Forgot Password')
    await browser.wait(Until.elementIsVisible(pageTextVerify))

  })

  step('Test: 03 - Enter email', async browser => {

    let Email = By.css('#email')
    await browser.wait(Until.elementIsVisible(Email))
    let EmailBox = await browser.findElement(Email)
    await EmailBox.click()
    await browser.type(EmailBox, "antonio@flood.io")

    let Retrieve = By.css('#form_submit')
    await browser.wait(Until.elementIsVisible(Retrieve))
    let RetrieveButton = await browser.findElement(Retrieve)
    await RetrieveButton.click()

  })

}