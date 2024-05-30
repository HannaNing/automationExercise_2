export default class SignUpPage {
  getEnterAccountInformationTitle = () => cy.get('.login-form h2')
  getGenderMr = () => cy.get('#id_gender1')
  getSignUpPassword = () => cy.get('#password')
  getDayOfBirth = () => cy.get('#days')
  getMonthOfBirth = () => cy.get('#months')
  getYearOfBirth = () => cy.get('#years')
  getSignUpNewsLetter = () => cy.get('#newsletter')
  getReceiveSpecialOfferFromParner = () => cy.get('#optin')

  getAddressFirstname = () => cy.get('#first_name')
  getAddressLastname = () => cy.get('#last_name')
  getAddressCompany = () => cy.get('#company')
  getAddress1 = () => cy.get('#address1')
  getAddress2 = () => cy.get('#address2')
  getAddressCountry = () => cy.get('#country')
  getAddressState = () => cy.get('#state')
  getAddressCity = () => cy.get('#city')
  getAddressZipcode = () => cy.get('#zipcode')
  getAddressMobileNumber = () => cy.get('#mobile_number')

  getCreateAccountBtn = () => cy.get('[data-qa="create-account"]')

  fillInSignUpForm = (
    signUppassword,
    fName,
    lName,
    company,
    address1,
    address2,
    state,
    city,
    zipcode,
    mobileNumber
  ) => {
    this.getEnterAccountInformationTitle().should('be.visible')
    this.getGenderMr().click({ force: true })
    this.getSignUpPassword().type(signUppassword)
    this.getDayOfBirth().select('1', { force: true })
    this.getMonthOfBirth().select('May', { force: true })
    this.getYearOfBirth().select('1994', { force: true })
    this.getSignUpNewsLetter().click({ force: true })
    this.getReceiveSpecialOfferFromParner().click({ force: true })

    this.getAddressFirstname().type(fName)
    this.getAddressLastname().type(lName)
    this.getAddressCompany().type(company)
    this.getAddress1().type(address1)
    this.getAddress2().type(address2)
    this.getAddressCountry().select('United States', { force: true })
    this.getAddressState().type(state)
    this.getAddressCity().type(city)
    this.getAddressZipcode().type(zipcode)
    this.getAddressMobileNumber().type(mobileNumber)
  }
}
