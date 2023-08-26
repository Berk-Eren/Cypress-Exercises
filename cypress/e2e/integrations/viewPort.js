describe('This tests some cases in IPhone-X device', () => {
  let newTitle = '';

  beforeEach(() => {
    cy.viewport('iphone-x');
    cy.visit(Cypress.env('techCrunchUrl'));
  });

  /*it('Search news related to search text', () => {
    cy.get('#tc-mobile-header svg.icon--hamburger').click();
    cy.get('input[placeholder="Search TechCrunch"]').type('Tesla{enter}');
    cy.get('.compArticleList > li h4 > a').each(($item) => {
      const title = $item.text();
      expect(title).to.match(/tesla/i);
    });
  });*/

  it('Search text and visit website', () => {
    cy.get('#tc-mobile-header svg.icon--hamburger').click();
    cy.get('input[placeholder="Search TechCrunch"]').type('Tesla{enter}');

    cy.get('.compArticleList > li h4 > a').as('listOfNews');

    cy.get('@listOfNews').then(($elems) => {
      const numberOfNews = $elems.length;
      const randomInd = Math.floor(Math.random() * numberOfNews);

      const randomElem = cy.get('@listOfNews').eq(randomInd);

      randomElem.invoke('attr', 'target', '_self');

      let url;

      randomElem.click({ force: true });
      randomElem.invoke('attr', 'href').then(($url) => {
        cy.url().should('eq', $url);
      });
    });
  });
});
