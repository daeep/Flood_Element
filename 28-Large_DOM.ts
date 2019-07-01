import { step, TestSettings, Until, By, Device, Key } from '@flood/element'
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

  step('Test: 02 - Large - Deep DOM', async browser => {
  
    let linkHref = await browser.findElement(By.css('#content > ul > li:nth-child(28) > a'))
    await linkHref.click()
    let pageTextVerify = By.visibleText('Large & Deep DOM')
    await browser.wait(Until.elementIsVisible(pageTextVerify))

  })

  step('Test: 03 - Elements', async browser => {

    let Table = await browser.findElement(By.xpath("//tr[@class='row-50']/td[@class='column-50']"))
    const Text = await Table.text()
    console.log('Last column and row: ' + Text)
    assert(Text === '50.50', 'Text value is correct')

  })

}