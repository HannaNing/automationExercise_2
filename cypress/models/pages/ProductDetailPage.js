export default class ProductDetailPage {
  getProductInformation = () => cy.get('.product-information')
  getProductName = () => cy.get('.product-information h2')
  getProductCategory = () => cy.xpath('//p[contains(text(), "Category")]')
  getProductPrice = () => cy.get('.product-information span span')
  getProductAvailability = () =>
    cy.xpath('//b[contains(text(), "Availability")]')
  getProductCondition = () => cy.xpath('//b[contains(text(), "Condition")]')
  getProductBrand = () => cy.xpath('//b[contains(text(), "Brand")]')

  verifyProductInformation() {
    this.getProductName().should('be.visible')
    this.getProductCategory().should('be.visible')
    this.getProductPrice().should('be.visible')
    this.getProductAvailability().should('be.visible')
    this.getProductCondition().should('be.visible')
    this.getProductBrand().should('be.visible')
  }
}
