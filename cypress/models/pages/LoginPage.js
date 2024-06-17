import HeaderComponents from '../components/HeaderComponents'
import HomepageComponents from '../pages/HomepageComponents'

let homepageComponents = new HomepageComponents()
let headerComponents = new HeaderComponents()

export default class LoginPage {
  getNewUserSignUp = () => cy.get('.signup-form h2')
  getSignUpName = () => cy.get('[data-qa="signup-name"]')
  getSignUpEmail = () => cy.get('[data-qa="signup-email"]')
  getSignUpBtn = () => cy.get('[data-qa="signup-button"]')

  getTitleLogin = () => cy.get('.login-form h2')
  getSignInEmailAdress = () => cy.get('[data-qa="login-email"]')
  getSignInPassword = () => cy.get('[data-qa="login-password"]')
  getLoginBtn = () => cy.get('[data-qa="login-button"]')
  getErrorMessage = () => cy.get('.login-form p')
  getSignUpErrorMessage = () => cy.get('[action="/signup"] p')

  goToLoginPage = () => {
    homepageComponents.getBanner().should('be.visible')
    headerComponents.getLoginSignUpBtn().click()
    this.getTitleLogin().should('be.visible')
  }

  login = (username, password) => {
    this.getSignInEmailAdress().type(`${username}`, {
      force: true,
      waitForAnimations: true,
    })
    this.getSignInPassword().type(`${password}`, {
      force: true,
      waitForAnimations: true,
    })
    this.getLoginBtn().click({ force: true })
  }

  signup = (nameOfUser, password) => {
    this.getSignUpName().type(nameOfUser)
    this.getSignUpEmail().type(password)
    this.getSignUpBtn().click()
  }
}
