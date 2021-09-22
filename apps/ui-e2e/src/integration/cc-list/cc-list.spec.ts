describe('ui: CcList component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=cclist--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to CcList!');
    });
});
