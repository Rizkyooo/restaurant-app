/* eslint-disable no-tabs */
import Config from '../../scripts/globals/config';

const createRestaurantItemTemplate = (restaurant) => `
<div class="cards_item">
    <div class="card">
    <div class="card_image">
    <p class="card_location">${restaurant.city}</p>
    <picture>
    <source media="(max-width: 600px)" data-srcset="${Config.BASE_IMAGE_URL_SMALL}/${restaurant.pictureId}">
    <source media="(max-width: 600px)" data-srcset="${Config.BASE_IMAGE_URL_SMALL}/${restaurant.pictureId}">
    <img class="lazyload" data-src=${Config.BASE_IMAGE_URL}/${restaurant.pictureId} alt="${restaurant.name}">
    </picture>
    </div>
            <div class="card_content">
            <a id="toDetail" class="title" href="/#/detail/${restaurant.id}"><h2 class="card_title">${restaurant.name}</h2></a>
            <div class="card_text">${restaurant.description}</div>
            <div class="rating">Rating: ${restaurant.rating}</div>
        </div>
    </div>
</div>
`;

const creatRestaurantDetailTemplate = (restaurant) => `
<div class="card_detail">
    <div class="card_detail_image">
        <p class="card_detail_location">${restaurant.city}</p>
    <picture>
    <source media="(max-width: 600px)" data-srcset="${Config.BASE_IMAGE_URL_SMALL}/${restaurant.pictureId}">
    <source media="(max-width: 600px)" data-srcset="${Config.BASE_IMAGE_URL_SMALL}/${restaurant.pictureId}" >
    <img class="lazyload" data-src=${Config.BASE_IMAGE_URL}/${restaurant.pictureId} alt="${restaurant.name}">
    </picture>
    </div>
    <div class="card_detail_content">
        <h2 class="card_detail_title">${restaurant.name}</h2>
        <div class="card_detail_text">${restaurant.description}</div>
        <div class="detail_rating">Rating: ${restaurant.rating}</div>
        <div class="detail_address">Rating: ${restaurant.address}</div>
    </div>
</div>

<div class="card_detail">
    <div class="card_detail_content">
        <h2 class="card_detail_title_menu">Our Menu</h2>
			<div class="menu">
				<ul><h3>Foods</h3>
        ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
        </ul>
			<ul><h3>Drinks</h3>
      ${restaurant.menus.drinks.map((food) => `<li>${food.name}</li>`).join('')}
        </ul>
				</div>
</div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
  <i class="fa-regular fa-heart" style="color: #000000;"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
  <i class="fa-solid fa-heart" style="color: #ff0000;"></i>
  </button>
`;

const createAddReview = () => `
<form class="addReview">
<h3>Add Reviews</h3>
<div class="add_review">
    <label class="name_input" for="name">Name:</label>
    <input class="name" type="text" id="name" required>
    <label class="review_input" for="review">Customer Review:</label>
    <input class="text_review" type="text" id="review" required></input><br>
    <button class="submit_review" type="submit">Submit</button>
</div>
  </form>
`;

const customerReviews = (restaurant) => `
<div class="review_item">
${restaurant.customerReviews.reverse().map((review) => `
  <div class="card_review">
  <div class="review_name">
    <p>${review.name}</p>
  </div>
  <div class="review_text">
  <p>${review.review}</p>
  </div>
  <div class="review_date">
  <div>${review.date}</div>
  </div>
  </div>
  `)}
</div>
`;

export {
  createRestaurantItemTemplate,
  creatRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createAddReview,
  customerReviews,
};
