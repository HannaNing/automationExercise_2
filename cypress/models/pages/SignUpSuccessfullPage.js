export default class SignUpSuccessfullPage {
  getMessageAccountCreated = () => cy.get('.container .title')
  getContinueBtn = () => cy.get('[data-qa="continue-button"]')
}
