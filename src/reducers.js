const INITIAL_STATE = {
	products: []
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'SET_PRODUCT':
			return {
				...state,
				products: [...state.products, action.product]
			};

		default:
			return state;
	}
};
