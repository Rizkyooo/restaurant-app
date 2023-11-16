import likeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import FavoriteRestaurantDb from '../src/scripts/utils/favorite-db';

// eslint-disable-next-line no-undef
describe('Liking A Resto', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });
  // eslint-disable-next-line no-undef
  it('should show the like button when resto has not been liked before', async () => {
    // eslint-disable-next-line no-unused-expressions
    await likeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    });

    // eslint-disable-next-line no-undef
    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy();
  });

  it('should not show the unlike button when the resto has not been liked before', async () => {
    await likeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    });
    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
  });

  it('should be able to like the resto', async () => {
    await likeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const resto = await FavoriteRestaurantDb.getRestaurant(1);
    expect(resto).toEqual({ id: 1 });

    await FavoriteRestaurantDb.deleteRestaurant(1);
  });

  it('should not add a resto again when its already liked', async () => {
    await likeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    });
    await FavoriteRestaurantDb.putRestaurant({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantDb.getAllRestaurant()).toEqual([{ id: 1 }]);
    await FavoriteRestaurantDb.deleteRestaurant(1);
  });

  it('should not add a resto when it has no id', async () => {
    await likeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {},
    });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantDb.getAllRestaurant()).toEqual([]);
  });
});
