import { createContext, useReducer } from "react";
import reduser from "./reduser";

export const ShopContext = createContext();

const initialState = {
	goods: [],
	loading: true,
	order: [],
	isBasketShow: false,
	alertName: ''
}

export const ContextProvider = ({children}) => {
	const [value, dispatch] = useReducer(reduser, initialState);

	value.addToBasket =(item) => {
		dispatch({type: 'ADD_TO_BASKET', payload: item});
	};
	value.handleBasketShow = () => {
		dispatch({type: 'HANDLE_BASKET_SHOW'});
	};
	value.incQuantity = (itemID) => {
		dispatch({ type: 'INC_QUANTITY', payload: { id: itemID } });
	}
	value.decQuantity = (itemID) => {
		dispatch({ type: 'DEC_QUANTITY', payload: { id: itemID } });
	}
	value.removeFromBasket = (itemID) => {
		dispatch({ type: 'REMOVE_FROM_BASKET', payload: {id:itemID}});
	};
	value.closeAlert = () => {
		dispatch({type: 'CLOSE_ALERT'});
	};
	value.setGoods = (data) => {
		dispatch({type: 'SET_GOODS', payload: data})
	}
	return <ShopContext.Provider value={value}>
		{children}
	</ShopContext.Provider>
}