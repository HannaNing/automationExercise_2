export default class ContactUsPage {
  getTitleGetInTouch = () => cy.get('.contact-form .title')
  getContactName = () => cy.get('[name="name"]')
  getContactEmail = () => cy.get('[name="email"]')
  getContactSubject = () => cy.get('[name="subject"]')
  getContactMessage = () => cy.get('#message')
  getUploadBtn = () => cy.get('[name="upload_file"]')
  getSubmitBtn = () => cy.get('[data-qa="submit-button"]')
  getSubmitContactStatus = () => cy.get('.contact-form .status')
}
