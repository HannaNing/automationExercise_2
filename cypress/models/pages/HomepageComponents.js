export default class HomepageComponents {
  getBanner = () => cy.get('.carousel-inner')
  getSearchTxb = () => cy.get('#search_product')
  getSearchBtn = () => cy.get('#submit_search')

  getProductsList = () => cy.get('.features_items')
  getEachItemInList = () => cy.get('.features_items .col-sm-4')
  getViewProductBtn = () => cy.get('.choose')
  getProductName = () => cy.get('.productinfo p')

  getFooter = () => cy.get('.row')
  getSubscription = () => cy.get('.single-widget h2')

  goToProductDetailPage = () => {
    this.getEachItemInList()
      .eq(0)
      .within(() => {
        this.getViewProductBtn().click()
      })
  }

  getSearchProductName(productName) {
    if (this.getProductsList().should('be.visible')) {
      this.getEachItemInList().each(() => {
        this.getProductName().invoke('text').should('include', productName)
      })
    } else if (this.getEachItemInList().should('not.be.visible')) {
      this.getProductName().should('not.be.visible')
    }
  }
}
