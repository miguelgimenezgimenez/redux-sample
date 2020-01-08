const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST'

const INITIAL_STATE = {
	products: [],
	wishList: ['satisfyer']
};

const addToWhislist = (state, action) => {
	return { ...state, wishList: [...state.wishList, action.wish] }
}

export default (state = INITIAL_STATE, action) => {

	switch (action.type) {
		case ADD_TO_WISHLIST:
			return addToWhislist(state, action)
		default:
			return state;
	}
};
