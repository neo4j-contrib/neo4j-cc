describe('feature-twin4j: FeatureTwin4j component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=featuretwin4j--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to FeatureTwin4j!');
    });
});
