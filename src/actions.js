export const addProduct = (product) => {
	console.log('action', product);
	return {
		type: 'ADD_PRODUCT',
		product
	};
};
