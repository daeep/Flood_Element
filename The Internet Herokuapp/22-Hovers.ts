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

    step('Test: 02 - Hovers', async browser => {

        let linkHref = await browser.findElement(By.css('#content > ul > li:nth-child(22) > a'))
        await linkHref.click()
        await browser.wait(Until.elementIsVisible(By.css('#content > div > h3')))
        let pageTextVerify = By.visibleText('Hovers')
        await browser.wait(Until.elementIsVisible(pageTextVerify))

    })

    step('Test: 03 - Image 1', async browser => {

        let Image = await browser.findElement(By.css('#content > div > div:nth-child(3) > img'))
        await Image.click()
        let pageTextVerify = By.css('#content > div > div:nth-child(3) > div > a')
        await browser.wait(Until.elementIsVisible(pageTextVerify))

    })

    step('Test: 04 - Image 2', async browser => {

        let Image = await browser.findElement(By.css('#content > div > div:nth-child(4) > img'))
        await Image.click()
        let pageTextVerify = By.css('#content > div > div:nth-child(4) > div > a')
        await browser.wait(Until.elementIsVisible(pageTextVerify))

    })

    step('Test: 05 - Image 3', async browser => {

        let Image = await browser.findElement(By.css('#content > div > div:nth-child(5) > img'))
        await Image.click()
        let pageTextVerify = By.css('#content > div > div:nth-child(5) > div > a')
        await browser.wait(Until.elementIsVisible(pageTextVerify))

    })

}