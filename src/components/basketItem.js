import { useContext } from "react";
import { ShopContext } from "./context/context";

function BasketItem(props) {
	const { id, name, price, quantity, icon } = props
	
	const { removeFromBasket, incQuantity, decQuantity } = useContext(ShopContext);
	return (
		<li className="collection-item avatar">
			<img src={icon} alt={name} className="circle" />
			<span className="title basket_name">{name}</span>
			<div className="collection_calculator">
				<button className="btn" onClick={() => decQuantity(id)}>-</button>
				<div>{quantity}</div>
				<button className="btn" onClick={() => incQuantity(id)}>+</button>
				<div>= {price * quantity}</div> 
				</div>
			<a href="#!" className="secondary-content right" onClick={() => removeFromBasket(id)}>
				<i className="material-icons">clear</i>
			</a>
		</li>
	)
};
export default BasketItem;