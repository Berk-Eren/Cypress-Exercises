describe('The news has the same title with the main page', () => {
  let newTitle = '';

  beforeEach(() => {
    cy.visit(Cypress.env('techCrunchUrl'));
  });

  /*it('Click on the main new title', () => {
    cy.get('.feature-island-main-block').as('mainBlock');
    cy.get('@mainBlock')
      .find('.fi-main-block__title > .post-block__title__link')
      .as('titleLink');
    cy.get('@titleLink').then(($val) => {
      newTitle = $val.text();
      cy.get('@titleLink').click();

      cy.get('h1.article__title').should('have.text', newTitle);
    });
  });*/

  /*it('Click on of the mini news title', () => {
    cy.get('.mini-view')
      .find('.mini-view__item > h3 > a')
      .then(($elems) => {
        let numberOfElements = $elems.length;
        cy.log(
          `There are ${numberOfElements} elements inside of the mini view`
        );

        for (let elem of $elems) {
          //let index = Math.floor(Math.random() * numberOfElements);

          let title = elem.textContent;
          cy.wrap(elem).click();

          cy.get('.article__title').should('have.text', title);
          cy.go('back');
        }
      });

    cy.url().should('be.lte', Cypress.env('techCrunchUrl'));
  });*/

  /*it('Click on latest section', () => {
    'post-block post-block--featured post-block--unread';

    cy.get('div > h2')
      .contains('The Latest')
      .next()
      .find('div > article.post-block')
      .then(($elems) => {
        let numberOfElements = $elems.length;
        cy.log(
          `There are ${numberOfElements} elements inside of latest section`
        );

        const randomIndex = Math.floor(Math.random() * numberOfElements);
        cy.wrap($elems[randomIndex]).as('selectedElement');
        cy.log(cy.get('@selectedElement'));

        cy.get('@selectedElement')
          .find('.post-block__title__link')
          .then(($a) => {
            const title = $a.text();

            cy.log(`Clicking on the ${randomIndex}. element.`);
            cy.get('@selectedElement').click();

            cy.get('div > .article__title').should('have.text', title);
          });
      });

  });*/

  it('Search for a specific topic', () => {
    cy.get('#tc-mobile-header > svg').click();
    cy.get('div>label').contains('search').click();
    cy.get('div.search-box>form input');
  });
});
