describe('Create Event', () => {

    beforeEach('', () => {
        cy.request('GET', 'http://localhost:8081/event');
        // navigate to the homepage
        cy.visit('/');

        // check that the "Create Event" link is there
        cy.getLinkByHref('/create-event').as('CreateEvent');
        expect(cy.get('@CreateEvent')).to.exist;

        // click on the "Create Event" link
        cy.get('@CreateEvent').click();

        // verify a user has been redirected to the "Create Event" page
        cy.location('pathname').should('equal', '/create-event');
        cy.contains('h2', 'Create Event').should('be.visible');
    });

    it('should create a valid new event', () => {

        cy.getById('event-name').type('Happy Music Event');
        cy.getById('event-venue').type('Some Famous Place');
        cy.getById('event-date-month').select('12');
        cy.getById('event-date-day').select('20');
        cy.getById('event-date-year').select('2023');
        cy.getById('ticket-quantity').type('60');
        cy.getById('event-notes').type('You don\'t wanna miss it');
        cy.get('input[id="event-image-2"]').click();

        // cy.getById('create-btn').click();
        cy.get('button').contains('Create').click();
        cy.contains('h2', 'Event Details').should('be.visible');
    });
});