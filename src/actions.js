	const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST'

export const addProduct = (product) => {

	return {
		type: 'SET_PRODUCT',
		product
	};
};
export const addToWishlistAction = (wish) => {

	return {
		type: ADD_TO_WISHLIST,
		wish: wish
	};
};
