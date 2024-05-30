export default class HeaderComponents {
  getLoginSignUpBtn = () => cy.get('[href="/login"]')
  getHeaderLoginName = () => cy.get('ul li a')
  getDeleteAccountBtn = () => cy.get('[href="/delete_account"]')
  getLogoutBtn = () => cy.get('[href="/logout"]')
  getContactUs = () => cy.get('[href="/contact_us"]')

  //   headerMenuItemList = () => cy.get('.nav navbar-nav')

  //   getMenuDetails() {
  //     let menuDetails = []

  //     this.headerMenuItemList().each(($item) => {
  //       const style = $item.attr('style')
  //       if (style === undefined || !style.includes('display:none')) {
  //         menuDetails.push({
  //           text: $item.text(),
  //           href: $item.attr('href'),
  //         })
  //       }
  //     })

  //     return new Cypress.Promise((resolve) => {
  //       cy.wrap('').then(() => resolve(menuDetails))
  //     })
  //   }
}
