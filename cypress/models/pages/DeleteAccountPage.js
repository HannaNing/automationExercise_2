export default class DeleteAccountPage {
  getTitleDeleteAccount = () => cy.get('[data-qa="account-deleted"]')
  getContinueBtn = () => cy.get('[data-qa="continue-button"]')
}
