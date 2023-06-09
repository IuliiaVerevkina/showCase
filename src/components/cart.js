import { useContext } from "react";
import { ShopContext } from "./context/context";

function Cart() {
	const { order, handleBasketShow = Function.prototype} = useContext(ShopContext);

	const quantity = order.length;

	return <div className="cart_quantity" onClick={handleBasketShow}>
		<i className="material-icons">shopping_cart</i>
		{quantity ? <span>{quantity}</span> : null}
	</div>

};
export default Cart;