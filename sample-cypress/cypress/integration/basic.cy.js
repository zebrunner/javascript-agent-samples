describe('Google search', () => {
  const url = 'https://www.google.com/';
  const searchValue = 'Zebrunner';

  it('Should pass', { 'owner': 'asukhodolova' }, () => {
    cy.zebrunnerTestCaseKey('ZPT-3010', 'ZPT-3679');

    cy.visit(url).contains('Google');

    console.log(`Performing search with value Zebrunner`);
    cy.xpath("//*[@name='q']").click().type(searchValue).type('{enter}');

    console.log(`Verify first search result contains search value`);
    cy.xpath("//*[@id='search']//a").should('contain.text', searchValue);
  });

  it('Should fail', () => {
    cy.zebrunnerTestCaseKey('ZPT-3011', 'ZPT-3680');

    cy.visit(url).contains('Google');

    console.log(`Performing search with value Zebrunner`);
    cy.xpath("//*[@name='q']").click().type(searchValue).type('{enter}');

    console.log(`Verify first search result contains search value`);
    cy.xpath("//*[@id='search']//a").should('contain.text', "some unexisting text");
  });
});
