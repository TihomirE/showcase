describe('main-layout', () => {
    beforeEach(() => cy.visit('/app'));

    it('should display main layout', () => {
        // how to check for different values on one element (because of i18n)
        // const runout = ['English', 'Deutsch']
        // const regex = new RegExp(`${runout.join('|')}`, 'g')
        // cy.get('p[id="testString"]').contains(regex);

        cy.get('p[id="testString"]').should('contain', 'Deutsch');
    });
});