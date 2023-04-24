const reduser = (state, { type, payload }) => {
	switch (type) {
		case 'ADD_TO_BASKET': {
			const itemIndex = state.order.findIndex(orderItem => orderItem.id === payload.id);
			let newOrder = null;
			if (itemIndex < 0) {
				const newItem = {
					...payload,
					quantity: 1
				}
				newOrder = [...state.order, newItem];
			} else {
				newOrder = state.order.map((orderItem, index) => {
					if (index === itemIndex) {
						return {
							...orderItem,
							quantity: orderItem.quantity + 1
						}
					} else {
						return orderItem;
					}
				});
			}
			return {
				...state,
				order: newOrder,
				alertName: payload.name
			}
		}
		case 'HANDLE_BASKET_SHOW': {
			if (!state.isBasketShow) {
				document.querySelector('body').classList.add('colection_modal')
			} else {
				document.querySelector('body').classList.remove('colection_modal')
			}
			return {
				...state,
				isBasketShow: !state.isBasketShow
			}
		}
		case 'INC_QUANTITY': {
			const increase = state.order.map(orderItem => {
				if (orderItem.id === payload.id) {
					return {
						...orderItem,
						quantity: orderItem.quantity + 1
					}
				} else {
					return orderItem;
				}
			});
			return {
				...state,
				order: increase
			}
		}
		case 'DEC_QUANTITY': {
			const decrease = state.order.map(orderItem => {
				if (orderItem.id === payload.id) {
					return {
						...orderItem,
						quantity: orderItem.quantity > 1 ? orderItem.quantity - 1 : 1
					}
				} else {
					return orderItem;
				}
			});
			return {
				...state,
				order: decrease
			}
		}
		case 'REMOVE_FROM_BASKET':
			return {
				...state,
				order: state.order.filter(orderItem => orderItem.id !== payload.id)
			}
		case 'CLOSE_ALERT':
			return {
				...state,
				alertName: ''
			}
		case 'SET_GOODS':
			return {
				...state,
				goods: payload || [],
				loading: false
			}
		default:
			return state;
	}
}
export default reduser;