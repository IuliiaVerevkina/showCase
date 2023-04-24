import { useContext } from "react";
import { ShopContext } from "./context/context";

/* eslint-disable jsx-a11y/anchor-is-valid */
function GoodsItem(props) {
	const { id, name, description, price, full_background, icon,} = props;
	const { addToBasket } = useContext(ShopContext)

	return (
		<div className="card">
			<div className="card-image">
				<img src={full_background} alt={name} />
			</div>
			<div className="card-content">
				<p>{description}</p>
			</div>
			<div className="card-action">
				<button className="btn" onClick={() => addToBasket({
					id,
					name,
					price,
					icon
				})}>Shop</button>
				<span className="right">{price}&#8364;</span>
			</div>
		</div>
	)
};

export default GoodsItem;