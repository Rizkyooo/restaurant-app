// Feature('Unliking Resto');

// Before(({ I }) => {
//   I.amOnPage('/#/favorite');
// });

// const assert = require('assert');

// Scenario('unliking a liked restaurant', async ({ I }) => {
//   I.seeElement('.cards_item');
//   pause();
//   const likedResto = locate('.card_content a').first();
//   const likedRestoTitle = await I.grabTextFrom(likedResto);
//   I.click(likedResto);

//   I.seeElement('#likeButton');
//   I.click('#likeButton');

//   I.amOnPage('/#/favorite');
//   I.seeElement('.cards_item');

//   const unlikedRestoTitle = await I.grabTextFrom('.card_content a');

//   assert.strictEqual(likedRestoTitle, unlikedRestoTitle);
// });
