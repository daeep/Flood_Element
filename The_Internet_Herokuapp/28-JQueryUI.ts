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

	step('Test: 02 - JQueryUI', async browser => {

		let linkHref = await browser.findElement(By.css('#content > ul > li:nth-child(28) > a'))
		await linkHref.click()
		let pageTextVerify = By.visibleText('JQueryUI')
		await browser.wait(Until.elementIsVisible(pageTextVerify))

	})

	step('Test: 03 - Menu', async browser => {

		let Menu = await browser.findElement(By.css('#ui-id-3'))
		await Menu.focus()
		await Menu.click()

	})

	step('Test: 04 - SubMenu', async browser => {

		let SubMenu = await browser.findElement(By.css('#ui-id-4'))
		await SubMenu.focus()
		await SubMenu.click()

	})

	step('Test: 05 - PDF', async browser => {

		let PDF = await browser.findElement(By.css('#ui-id-5'))
		await PDF.focus()
		await PDF.click()

	})

}