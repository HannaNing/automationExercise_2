import HeaderComponents from '../models/components/HeaderComponents'
import HomepageComponents from '../models/pages/HomepageComponents'
import LoginPage from '../models/pages/LoginPage'
import { getRandomEmail } from '../utils'
import SignUpPage from '../models/pages/SignUpPage'
import SignUpSuccessfullPage from '../models/pages/SignUpSuccessfullPage'
import DeleteAccountPage from '../models/pages/DeleteAccountPage'
import ContactUsPage from '../models/pages/ContactUsPage'
import ProductDetailPage from '../models/pages/ProductDetailPage'
import { getRandomSearchProductName } from '../utils'

describe('Automation Exercise Flow Test Cases', () => {
  let registerData
  let signUpEmail = getRandomEmail()
  let searchProductNameInput = getRandomSearchProductName()

  let headerComponents = new HeaderComponents()
  let homepageComponents = new HomepageComponents()
  let loginPage = new LoginPage()
  let signUpPage = new SignUpPage()
  let signUpSuccessfullPage = new SignUpSuccessfullPage()
  let deleteAccountPage = new DeleteAccountPage()
  let contactUsPage = new ContactUsPage()
  let productDetailPage = new ProductDetailPage()

  const LOGIN_CRED = {
    username: signUpEmail,
    password: '123123',
  }

  beforeEach(() => {
    cy.visit('/')
    cy.fixture('SignUpData.json').then((data) => {
      registerData = data
    })
  })

  it('Test case 1: Register user', () => {
    loginPage.goToLoginPage()
    loginPage.getNewUserSignUp().should('be.visible')
    loginPage.signup(registerData.name, LOGIN_CRED.username)
    signUpPage.fillInSignUpForm(
      registerData.passwordSignUp,
      registerData.firstName,
      registerData.lastName,
      registerData.company,
      registerData.address1,
      registerData.address2,
      registerData.state,
      registerData.city,
      registerData.zipcode,
      registerData.mobileNumber
    )
    signUpPage.getCreateAccountBtn().click()
    signUpSuccessfullPage
      .getMessageAccountCreated()
      .should('have.text', 'Account Created!')

    signUpSuccessfullPage.getContinueBtn().click()
    headerComponents
      .getHeaderLoginName()
      .contains('Logged in as ' + registerData.name)
      .should('be.visible')
  })

  it('Test Case 2: Login User with correct email and password', () => {
    loginPage.goToLoginPage()
    loginPage.login(LOGIN_CRED.username, LOGIN_CRED.password)
    headerComponents
      .getHeaderLoginName()
      .contains('Logged in as ' + registerData.name)
      .should('be.visible')
  })

  it('Test Case 3: Login User with incorrect email and password', () => {
    loginPage.goToLoginPage()
    loginPage.login(LOGIN_CRED.username, LOGIN_CRED.password + '_WRONG')
    loginPage
      .getErrorMessage()
      .should('have.text', 'Your email or password is incorrect!')
  })

  it('Test Case 4: Logout User', () => {
    loginPage.goToLoginPage()
    loginPage.login(LOGIN_CRED.username, LOGIN_CRED.password)
    headerComponents
      .getHeaderLoginName()
      .contains('Logged in as ' + registerData.name)
      .should('be.visible')
    headerComponents.getLogoutBtn().click()
    cy.url().should('include', '/login')
  })

  it('Test Case 5: Register User with existing email', () => {
    loginPage.goToLoginPage()
    loginPage.getNewUserSignUp().should('be.visible')
    loginPage.signup(registerData.name, LOGIN_CRED.username)

    loginPage
      .getSignUpErrorMessage()
      .should('have.text', 'Email Address already exist!')
  })

  it('Test Case 6: Contact Us Form', () => {
    console.log('test case 6, nthoa12')
    homepageComponents.getBanner().should('be.visible')
    headerComponents.getContactUs().click()
    contactUsPage.getTitleGetInTouch().should('be.visible')
    contactUsPage.getContactName().type(registerData.name)
    contactUsPage.getContactEmail().type(signUpEmail)
    contactUsPage.getContactSubject().type('Test Subject')
    contactUsPage.getContactMessage().type('Test message')
    cy.fixture('dummies.pdf').then((fileContent) => {
      // Use the cy.get() command to select the file input element
      contactUsPage.getUploadBtn().selectFile('cypress/fixtures/dummies.pdf')
    })
    contactUsPage.getSubmitBtn().click()
    contactUsPage
      .getSubmitContactStatus()
      .should(
        'have.text',
        'Success! Your details have been submitted successfully.'
      )
  })

  it('Test Case 7: Verify Test Cases Page', () => {
    homepageComponents.getBanner().should('be.visible')
    headerComponents.getTestCases().click()
    cy.url().should('include', '/test_cases')
  })

  it('Test Case 8: Verify All Products and product detail page', () => {
    homepageComponents.getBanner().should('be.visible')
    headerComponents.getProducts().click()
    cy.url().should('include', '/products')
    homepageComponents.getProductsList().should('be.visible')
    homepageComponents.goToProductDetailPage()
    cy.url().should('include', '/product_details/1')
    productDetailPage.verifyProductInformation()
  })

  it('Test Case 9: Search Product', () => {
    homepageComponents.getBanner().should('be.visible')
    headerComponents.getProducts().click()
    cy.url().should('include', '/products')
    homepageComponents.getSearchTxb().type(searchProductNameInput)
    homepageComponents.getSearchBtn().click()
    homepageComponents.getSearchProductName(searchProductNameInput)
  })

  it('Test Case 10: Verify Subscription in home page', () => {
    homepageComponents.getBanner().should('be.visible')
    homepageComponents.getSubscription().scrollIntoView()
    homepageComponents
      .getSubscription()
      .invoke('text')
      .should('eq', 'Subscription')
  })
})
