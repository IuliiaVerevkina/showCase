import { useContext } from "react";
import { ShopContext } from "./context/context";

import BasketItem from "./basketItem";

function BasketList(props) {
	const { order = [], handleBasketShow = Function.prototype, } = useContext(ShopContext);

	const total = order.reduce((acc, el) => (acc + el.price * el.quantity), 0);

	return (
		<div className="collection faded">
			<div className="collection-header cyan darken-1 white-text">
				Basket
				<a href="#!" className="secondary-content right white-text">
					<i className="material-icons" onClick={handleBasketShow}>close</i>
				</a>
			</div>
			<ul className="collection_list">
				{
					order.length ? order.map(item => (
						<BasketItem key={item.id}{...item} />
					)) : <li className="collection-item">No item in cart</li>
				}
			</ul>
			<div className="collection-item cyan darken-1 ">
				<span className="title white-text">Total: {total}&#8364;</span>
				<button className="secondary-content btn btn_buy">buy</button>
			</div>
		</div>
	)

};
export default BasketList;