import { step, TestSettings, Until, By, Device } from '@flood/element'
import * as assert from 'assert'

export const settings: TestSettings = {
	clearCache: false,
	disableCache: false,
	clearCookies: false,
	loopCount: -1,
	duration: -1,
	actionDelay: 2,
	stepDelay: 2,
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

		await browser.visit('https://the-internet.herokuapp.com/')
		await browser.wait(Until.elementIsVisible(By.css('#content > h1')))
		let pageTextVerify = By.visibleText('Welcome to the-internet')
		await browser.wait(Until.elementIsVisible(pageTextVerify))

	})

	step('Test: 02 - File Download', async browser => {

		let linkHref = await browser.findElement(By.css('#content > ul > li:nth-child(17) > a'))
		await linkHref.click()
		let pageTextVerify = By.visibleText('File Downloader')
		await browser.wait(Until.elementIsVisible(pageTextVerify))

	})

	step('Test: 03 - Download', async browser => {

		let Link = await browser.findElement(By.css('#content > div > a'))
		await Link.click()

	})

}