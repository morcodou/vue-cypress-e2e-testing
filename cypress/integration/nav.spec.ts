describe('Navigation', () => {

  beforeEach('', () => {
    // navigate to the homepage
    cy.visit('/');
  });

  it('should have a list events link that navigates to the list events view', () => {

    // // check that the "List Events" link is there
    cy.getLinkByHref('/list-events').as('ListEvents');

    expect(cy.get('@ListEvents')).to.exist;

    // click on the "List Events" link
    cy.get('@ListEvents').click();

    // verify a user has been redirected to the "List Events" page
    cy.location('pathname').should('equal', '/list-events');
    cy.contains('h2', 'Event List').should('be.visible');
  });
});