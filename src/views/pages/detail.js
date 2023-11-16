import UrlParser from '../../scripts/routes/url-parser';
import RestaurantSource from '../../scripts/data/restaurant-source';
import { creatRestaurantDetailTemplate, createAddReview, customerReviews } from '../templates/template-creator';
import likeButtonInitiator from '../../scripts/utils/like-button-initiator';

const Detail = {
  async render() {
    return `
    <div class="card_item_detail"></div>
    <div class="reviews"><h3>Customer Reviews</h3></div>
    <div id="addReviewContainer"></div>
    <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    window.scrollTo(0, 0);
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailOfRestaurant(url.id);
    const restaurantContainer = document.querySelector('.card_item_detail');
    const reviewContainer = document.querySelector('.reviews');
    const addReviewContainer = document.querySelector('#addReviewContainer');

    restaurantContainer.innerHTML = creatRestaurantDetailTemplate(restaurant);
    reviewContainer.innerHTML = customerReviews(restaurant);
    addReviewContainer.innerHTML = createAddReview();
    const submitReview = document.querySelector('.submit_review');

    submitReview.addEventListener('click', () => {
      const nameInput = document.getElementById('name');
      const reviewInput = document.getElementById('review');
      const reviewData = {
        id: restaurant.id,
        name: nameInput.value,
        review: reviewInput.value,
      };

      RestaurantSource.addReview(reviewData);
    });

    likeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        rating: restaurant.rating,
      },
    });
  },
};

export default Detail;
