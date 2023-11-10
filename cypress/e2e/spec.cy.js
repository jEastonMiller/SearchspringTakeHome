describe('template spec', () => {
  it('passes', () => {
    cy.visit('localhost:3000/')
  })
})

describe('Search Functionality', () => {
  it('should search for products by clicking button', () => {
    cy.visit('localhost:3000/');

    // Type a search query in the input field
    cy.get('[data-cy=searchInput]').type('jeans');

    // Click the search button
    cy.get('[data-cy=searchButton]').click();

    // Assert that the product display shows results
    cy.get('[data-cy=product]').should('exist');

    cy.visit('localhost:3000/');
    cy.get('[data-cy=searchInput]').type('shirt{enter}');
    cy.get('[data-cy=product]').should('exist');
  });
});

describe('Search Functionality', () => {
  it('should search for products by pressing the "Enter" key', () => {
    cy.visit('localhost:3000/');

    cy.get('[data-cy=searchInput]').type('shirt{enter}');
    cy.get('[data-cy=product]').should('exist');
  });
});

describe('Initial API call', () => {
  it('search for trends and confirm trends render', () => {
    cy.visit('localhost:3000/');
    // Type a search query in the input field
    cy.get('[data-cy=trend]').should('exist');
  });
});

describe('pageNav', () => {
  it('should appropriate nav buttons disabled', () => {
    cy.visit('localhost:3000/');
    cy.get('[data-cy=searchInput]').type(' ');
    cy.get('[data-cy=searchButton]').click();
    cy.get('[data-cy=currentSelection]').should('have.text','11');
    cy.get('[data-cy=previousPageButton]').should('be.disabled');
    cy.get('[data-cy=skipForwardButton]').first().click();
    cy.get('[data-cy=currentSelection]').should('have.text','186186');
    cy.get('[data-cy=nextPageButton]').should('be.disabled');
  });
});

describe('Product Display', () => {
  it('should add products to the cart', () => {
    cy.visit('localhost:3000/');
    cy.get('[data-cy=searchInput]').type('jeans');
    cy.get('[data-cy=searchButton]').click();
    cy.get('[data-cy=product]').first().within(() => {
      cy.get('[data-cy=add-to-cart]').click();
    });
    cy.get('[data-cy=cartCount]').should('have.text', '1');
    cy.get('[data-cy=product]').first().within(() => {
      cy.get('[data-cy=add-to-cart]').click();
    });
    cy.get('[data-cy=cartCount]').should('have.text', '2');
  });
});