import { step, TestSettings, Until, By, Device, Key } from '@flood/element'
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
 * This script works with the Beta version 1.0.6 of Flood Element
 * @version 1.0
*/

export default () => {

	step('Test: 01 - Homepage', async browser => {

		await browser.visit('https://the-internet.herokuapp.com/')
		await browser.wait(Until.elementIsVisible(By.css('#content > h1')))
		let pageTextVerify = By.visibleText('Welcome to the-internet')
		await browser.wait(Until.elementIsVisible(pageTextVerify))

	})

	step('Test: 02 - File Upload', async browser => {

		let linkHref = await browser.findElement(By.css('#content > ul > li:nth-child(18) > a'))
		await linkHref.click()
		await browser.wait(Until.elementIsVisible(By.css('#content > div > h3')))
		let pageTextVerify = By.visibleText('File Upload')
		await browser.wait(Until.elementIsVisible(pageTextVerify))

	})

	step('Test: 03 - Choose File', async browser => {

		let fileInput = await browser.findElement('input[type="file"]')
		await fileInput.uploadFile("test.ts")

	})

	step('Test: 03 - Choose File', async browser => {

		let Submit = await browser.findElement(By.css('#file-submit'))
		await Submit.click()

	})

}