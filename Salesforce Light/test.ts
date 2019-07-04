import { step, TestSettings, Until, By, Device } from '@flood/element'
import * as assert from 'assert'

export const settings: TestSettings = {
  clearCache: false,
  disableCache: false,
  clearCookies: false,
  loopCount: 1,
  duration: -1,
  actionDelay: 5,
  stepDelay: 5,
  waitTimeout: 60,
  screenshotOnFailure: true,
  DOMSnapshotOnFailure: true
}

/**
 * Saleforce
 * @version 1.0
 */

const username = "account@flood.io"
const password = "account123"
const account = "Test123"
const contactFN = "Test123"
const contactLN = "Floodio"
const opportunity = "Floodio123"

export default () => {

	step('Test: 01 - Homepage', async browser => {

		await browser.visit('https://login.salesforce.com/')
		await browser.wait(Until.elementIsVisible(By.css('#username')))
		await browser.wait(Until.elementIsVisible(By.css('#password')))
		await browser.wait(Until.elementIsVisible(By.css('#Login')))
		await browser.takeScreenshot()

	})

	step('Test: 02 - Login', async browser => {
	
		await browser.type(By.css('#username'), username)
		await browser.type(By.css('#password'), password)
		let buttonLogin = await browser.findElement(By.css('#Login'))
		await buttonLogin.click()
		await browser.takeScreenshot()

	})

	step('Test: 03 - Home',  { waitTimeout: 90 },async browser => {

		await browser.wait(Until.elementIsVisible(By.css('#oneHeader > div.slds-global-header.slds-grid.slds-grid--align-spread')))
		await browser.takeScreenshot()

	})

	step('Test: 04 - Accounts', async browser => {
	
		let linkAccounts = await browser.findElement(By.css('#oneHeader > div.bBottom > one-appnav > div > one-app-nav-bar > nav > div > one-app-nav-bar-item-root:nth-child(6) > a'))
		await linkAccounts.click()
		await browser.wait(Until.elementIsVisible(By.xpath('//*[@id="brandBand_1"]/div/div[1]/div[2]/div/div/div[1]/div[1]/div[2]/ul/li[1]/a')))
		await browser.takeScreenshot()

	})

	step('Test: 05 - New Account', async browser => {
	
		let linkNewAccount = await browser.findElement(By.xpath('//*[@id="brandBand_1"]/div/div[1]/div[2]/div/div/div[1]/div[1]/div[2]/ul/li[1]/a'))
		await linkNewAccount.click()
		await browser.wait(Until.elementIsVisible(By.xpath('/html/body/div[5]/div[2]/div/div[2]/div/div[3]/div/button[3]/span')))
		await browser.takeScreenshot()

	})

	step('Test: 06 - Fill New Account', async browser => {
	
		await browser.type(By.xpath('//*[@id="90:4449;a"]'), account)
		await browser.type(By.xpath('//*[@id="115:3831;a"]'), "9612338892")
		await browser.type(By.xpath('//*[@id="4:3831;a"]/div/div[3]/div[1]/div/div/div/div/div/div[2]/div/ul/li[1]/a/span[2]'), "Antonio")
		await browser.selectByText(By.xpath('//*[@id="311:3831;a"]/div/div/a'), "Prospect")
		await browser.selectByText(By.xpath('//*[@id="357:3831;a"]/div/div/a'), "Public")
		await browser.selectByText(By.xpath('//*[@id="407:3831;a"]/div/div/a'), "Other")
		let linkSaveccount = await browser.findElement(By.xpath('/html/body/div[5]/div[2]/div[2]/div[2]/div/div[3]/div/button[3]'))
		await linkSaveccount.click()
		await browser.takeScreenshot()

	})

	step('Test: XY - Close New Account', async browser => {
	
		let linkNewAccountClose = await browser.findElement(By.xpath('/html/body/div[5]/div[2]/div/div[2]/div/div[1]/button'))
		await linkNewAccountClose.click()
		await browser.wait(Until.elementIsVisible(By.css('#oneHeader > div.slds-global-header.slds-grid.slds-grid--align-spread')))
		await browser.takeScreenshot()

	})

	step('Test: XX - Logout', async browser => {
	
		let linkAccount = await browser.findElement(By.xpath('//*[@id="oneHeader"]/div[2]/span/ul/li[8]/span/button/div/span[1]/div/span'))
		await linkAccount.click()
		await browser.wait(Until.elementIsVisible(By.xpath('//*[@id="107:1688;a"]/div[1]/div[1]/div/div[2]')))
		let linkLogout = await browser.findElement(By.xpath('//*[@id="107:1688;a"]/div[1]/div[1]/div/div[2]/div/a[2]'))
		await linkLogout.click()
		await browser.wait(Until.elementIsVisible(By.css('#signup')))
		await browser.takeScreenshot()

	})

}
