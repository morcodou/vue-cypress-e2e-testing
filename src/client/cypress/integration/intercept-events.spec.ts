describe('Navigation', () => {

  beforeEach('', () => {
    // navigate to the homepage
    cy.intercept('GET', 'http://localhost:8081/event', { fixture: "events.json" }).as("events");;
    cy.intercept('POST', 'http://localhost:8081/event', { fixture: "event.json" }).as("create-event");;
  });

  it('should have a list events link that navigates to the list events view', () => {

    cy.visit('/');
    cy.wait('@events', { timeout: 10000 });
  });

  it('should create an event by the store', () => {

    cy.visit('/');

    cy.window().then((win : any) => {
      cy.fixture('event.json').then(fixt => {
        win.__app__.$store.dispatch('createEvent', fixt);
      })
    });
    
    cy.wait('@create-event');

  });

});