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

  it('Click on of the mini news title', () => {
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
  });
});
