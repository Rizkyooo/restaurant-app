/* eslint-disable no-param-reassign */
import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async listOfRestaurants() {
    const response = await fetch(API_ENDPOINT.LIST_RESTAURANT);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailOfRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL_RESTAURANT(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async restaurantReview() {
    const response = await fetch(API_ENDPOINT.REVIEW);
    const responseJson = await response.json();
    return responseJson.customerReviews;
  }

  static async searchRestaurant(query) {
    const response = await fetch(API_ENDPOINT.SEARCH_RESTAURANT(query));
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async addReview(inputData) {
    const response = await fetch(API_ENDPOINT.REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputData),
    });
    const responseJson = await response.json();
    console.log(responseJson);
  }
}

export default RestaurantSource;
