describe('Basic reporting test', () => {
  const url = 'https://www.google.com/';

  it('Google search should be passed', () => {
    const searchValue = 'Zebrunner';
    performGoogleSearch(searchValue);

    console.log(`Verify first search result contains search value`);
    cy.xpath("//*[@id='search']//a").should('contain.text', searchValue);
  });

  it('Google search should be failed', () => {
    const searchValue = 'Cypress';
    performGoogleSearch(searchValue);

    console.log(`Verify first search result equals to search value`);
    cy.xpath("//*[@id='search']//a").should('have.text', searchValue);
  });

  function performGoogleSearch(searchValue) {
    cy.visit(url).contains('Google');

    console.log(`Performing search with value Zebrunner`);
    cy.xpath("//*[@name='q']").click().type(searchValue).type('{enter}');
  }

});
