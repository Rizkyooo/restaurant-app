import FavoriteRestaurantDb from '../../scripts/utils/favorite-db';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <div id="restos" class="all-resto">
    <h2>Explore All Resto in Indonesia</h2>
    </div>
    <div class="cards"></div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantDb.getAllRestaurant();
    const restaurantContainer = document.querySelector('.cards');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
