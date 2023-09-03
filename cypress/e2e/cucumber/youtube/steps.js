const { When, Then } = require('@badeball/cypress-cucumber-preprocessor');

When('I visit {string}', (url) => {
  cy.visit(`www.${url}`);
});

Then('I should see a search bar', () => {
  cy.get('input[type=text]').should(
    'have.attr',
    'placeholder',
    'Search the web without being tracked'
  );

  assert.deepEqual({}, {});
});
