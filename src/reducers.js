const INITIAL_STATE = {
	products: [],
	wishlist: ['platsetation'],
	users: ['miguel']
};

export default (state = INITIAL_STATE, action) => {
	console.log(state);
	switch (action.type) {
		case 'SET_PRODUCT':
			return {
				...state,
				products: [...state.products, action.product]
			};

		default:
			break;
	}
};
