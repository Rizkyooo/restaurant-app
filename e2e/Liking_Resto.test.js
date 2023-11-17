Feature('Liking Resto');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

const assert = require('assert');

Scenario('showing empty liked restos', async ({ I }) => {
  I.seeElement('.cards');
  I.amOnPage('/');

  I.seeElement('.card_content a');
  const firstResto = locate('.card_content a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.cards_item');

  const likedRestoTitle = await I.grabTextFrom('.card_content a');
  assert.strictEqual(firstRestoTitle, likedRestoTitle);

  I.seeElement('.card_content a');
  I.click(locate('.card_content a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.dontSeeElement('.cards_item');

});