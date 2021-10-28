describe('main-layout', () => {
    context('<768p resolution', () => {
        beforeEach(() => {
            cy.visit('/app')
            cy.viewport('iphone-8')
        })

        it('should display mobile header', () => {    
            cy.get('.mobileHeader').should('be.visible');
            cy.get('.mobileToolbar').should('be.visible');
        })
    })

    context('>768p resolution', () => {
        beforeEach(() => {
            cy.visit('/app')
            cy.viewport(1280, 720)
        })

        it('should display desktop header', () => {    
            // cy.get('.mainTitle');
            cy.get('.fullHeader').should('be.visible');
            cy.get('.menuItemDesktop').should('be.visible');
            // cy.get('.outlet');
        })
    })
    
})