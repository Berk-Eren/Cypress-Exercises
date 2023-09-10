const { When, Then } = require('@badeball/cypress-cucumber-preprocessor');

When('I visit {string}', (url) => {
  cy.setCookie('PREF', 'tz=Europe.Berlin');
  cy.visit(`www.${url}?hl=en`);
  cy.getCookie('PREF').then((cookie) => {
    cy.log(cookie);
  });
});

Then('I should see a search bar', () => {
  cy.get('input[type=text]').should('have.attr', 'placeholder', 'Search');

  assert.deepEqual({}, {});
});

Then('Enter {string} into the search bar', (text) => {
  cy.get('input[type=text]').type(text).click('enter');

  assert.deepEqual({}, {});
});

Then('I should see shorts section', () => {
  cy.get('div#dismissible').as('shorts-div');
  cy.get('@shorts-div')
    .find('span#title')
    .should('have.text', 'ShortsTrending');

  assert.deepEqual({}, {});
});
