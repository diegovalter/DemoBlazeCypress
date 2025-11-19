describe('Comprar Celular', () => {
  
  beforeEach(() => {
    cy.visit('/')
  })

  it('Comprar Samsung Galaxy S7', () => {

    cy.title()
      .should('eq', 'STORE')

    cy.contains('.card-title', 'Samsung galaxy s7')
      .parents('.card')
      .find('a')
      .first()
      .click()

    cy.url().should('include', '/prod.html?idp_=4')

    cy.get('[class="name"]')
      .should('have.text', 'Samsung galaxy s7')

    cy.get('[class="price-container"]')
      .should('contain.text', '$800')

    cy.get('[class="btn btn-success btn-lg"]')
      .click()

    cy.on('window:alert', (msg) => {
      expect(msg).to.equal('Product added')
    })

    cy.get('[href="cart.html"]')
      .click()

    cy.url().should('include', '/cart.html')

    cy.get('[class="col-lg-8"]')
      .should('contain.text', 'Products')

    cy.get('#totalp')
      .should('have.text', "800")

    cy.get('#tbodyid')
      .should('contain.text', 'Samsung galaxy s7')

    cy.get('[class="btn btn-success"]')
      .click()

    cy.get('#orderModal')
      .should('be.visible')

    cy.get('#name')
      .invoke('val', 'Nome Teste')
      .trigger('input')

    cy.get('#country')
      .type('Brasil')

    cy.get('#city')
      .type('São Paulo')

    cy.get('#card')
      .type('123456789012')

    cy.get('#month')
      .type('12')

    cy.get('#year')
      .type('2026')

    cy.contains('button', 'Purchase')
      .click()


  })
})