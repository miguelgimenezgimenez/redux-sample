const INITIAL_STATE = {
	wishList: [],
	products: [],
	users: []
};

export default (state = INITIAL_STATE, action) => {
	console.log(action);
	switch (action.type) {
		case 'ADD_PRODUCT':
			return {
				...state,
				products: [...state.products, action.product]
			};
		default:
			return state;
	}
};
