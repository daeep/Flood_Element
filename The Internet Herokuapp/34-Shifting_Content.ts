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

    step('Test: 02 - Shifting Content', async browser => {
    
        let linkHref = await browser.findElement(By.css('#content > ul > li:nth-child(34) > a'))
        await linkHref.click()
        await browser.wait(Until.elementIsVisible(By.css('#content > div > h3')))
        let pageTextVerify = By.visibleText('Shifting Content')
        await browser.wait(Until.elementIsVisible(pageTextVerify))

    })

    step('Test: 03 - Shifting Content: Image', async browser => {

        let linkHref = await browser.findElement(By.css('#content > div > a:nth-child(6)'))
        await linkHref.click()
        await browser.wait(Until.elementIsVisible(By.css('#content > div > img')))
        let pageTextVerify = By.visibleText('Shifting Content: Image')
        await browser.wait(Until.elementIsVisible(pageTextVerify))

    })

    step('Test: 04 - Randomly', async browser => {

        let linkHref = await browser.findElement(By.css('#content > div > p:nth-child(3) > a'))
        await linkHref.click()
        await browser.wait(Until.elementIsVisible(By.css('#content > div > img')))
        let pageTextVerify = By.visibleText('Shifting Content: Image')
        await browser.wait(Until.elementIsVisible(pageTextVerify))

    })

    step('Test: 05 - 100px Shifting', async browser => {

        let linkHref = await browser.findElement(By.css('#content > div > p:nth-child(4) > a'))
        await linkHref.click()
        await browser.wait(Until.elementIsVisible(By.css('#content > div > img')))
        let pageTextVerify = By.visibleText('Shifting Content: Image')
        await browser.wait(Until.elementIsVisible(pageTextVerify))

    })

    step('Test: 06 - 100px Shifting + Randomly', async browser => {

        let linkHref = await browser.findElement(By.css('#content > div > p:nth-child(5) > a'))
        await linkHref.click()
        await browser.wait(Until.elementIsVisible(By.css('#content > div > img')))
        let pageTextVerify = By.visibleText('Shifting Content: Image')
        await browser.wait(Until.elementIsVisible(pageTextVerify))

    })

    step('Test: 07 - 100px Shifting + Randomly', async browser => {

        let linkHref = await browser.findElement(By.css('#content > div > p:nth-child(6) > a'))
        await linkHref.click()
        await browser.wait(Until.elementIsVisible(By.css('#content > div > img')))
        let pageTextVerify = By.visibleText('Shifting Content: Image')
        await browser.wait(Until.elementIsVisible(pageTextVerify))

    })

}