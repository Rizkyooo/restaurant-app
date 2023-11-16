import RestaurantSource from '../../scripts/data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const ListRestaurant = {
  async render() {
    return `
    <div id="hero" class="hero-container"> 
  <div class="hero-text">
    <h2>The Resto</h2>
    <p>Find Your Best Restaurant Here</p>
    <form class="form-search" id="search-form" onsubmit="event.preventDefault();" role="search">
      <label class="label_search" for="search">Search for stuff</label>
      <input class="search_input" id="search" type="search" placeholder="Search Restaurant..." autofocus required tabindex="0" />
      <button class="btn_search" type="submit">Search</button>    
    </form>
  </div>
  <picture class="hero-image">
        <source media="(max-width: 768px)" srcset="/images/heros/hero-image_4-small.jpg" alt="Hero Image" class="hero-source">
        <img src='/images/heros/hero-image_4.jpg' 
        alt="Hero Image">
  </picture>
</div>
<div id="restos" class="all-resto">
  <h2>Explore All Resto in Indonesia</h2>
</div>
<div class="cards"></div>
    `;
  },

  async afterRender() {
    const restoContainer = document.querySelector('.cards');
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search');
    const img = document.querySelector('img');

    searchForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      console.log(img);
      const query = searchInput.value;
      const searchResults = await RestaurantSource.searchRestaurant(query);

      if (searchResults.length === 0) {
        restoContainer.innerHTML = '<p>No matching restaurants found.</p>';
      } else {
        restoContainer.innerHTML = '';
        searchResults.forEach((resto) => {
          restoContainer.innerHTML += createRestaurantItemTemplate(resto);
        });
        restoContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });

    const restos = await RestaurantSource.listOfRestaurants();
    restos.forEach((resto) => {
      restoContainer.innerHTML += createRestaurantItemTemplate(resto);
    });
  },

};

export default ListRestaurant;
