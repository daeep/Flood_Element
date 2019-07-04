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

  step('Test: 02 - Form Authentication', async browser => {

    let linkHref = await browser.findElement(By.css('#content > ul > li:nth-child(18) > a'))
    await linkHref.click()
    let pageTextVerify = By.visibleText('Login Page')
    await browser.wait(Until.elementIsVisible(pageTextVerify))

  })

  step('Test: 03 - Enter credentials', async browser => {

    let Username = By.css('#username')
    await browser.wait(Until.elementIsVisible(Username))
    let UsernameBox = await browser.findElement(Username)
    await UsernameBox.click()
    await browser.type(UsernameBox, "tomsmith")

    let Password = By.css('#password')
    await browser.wait(Until.elementIsVisible(Password))
    let PasswordBox = await browser.findElement(Password)
    await PasswordBox.click()
    await browser.type(PasswordBox, "SuperSecretPassword!")

    let Login = By.css('#login > button > i')
    await browser.wait(Until.elementIsVisible(Login))
    let LoginButton = await browser.findElement(Login)
    await LoginButton.click()

  })

  step('Test: 04 - Landing Page', async browser => {

    let pageTextVerify = By.visibleText('Secure Area')
    await browser.wait(Until.elementIsVisible(pageTextVerify))

    let Logout = By.css('#content > div > a')
    await browser.wait(Until.elementIsVisible(Logout))
    let LogoutButton = await browser.findElement(Logout)
    await LogoutButton.click()

  })

  step('Test: 05 - Login Page', async browser => {

    let pageTextVerify = By.visibleText('Login Page')
    await browser.wait(Until.elementIsVisible(pageTextVerify))

    let Username = By.css('#username')
    await browser.wait(Until.elementIsVisible(Username))

  })

}