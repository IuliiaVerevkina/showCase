import { useEffect, useContext } from 'react';

import { ShopContext } from './context/context';

import Preloader from './preloader';
import GoodsList from './goodsList';
import Cart from './cart';
import BasketList from './basketList';
import Alert from './alert';

const _baseApi = 'https://fortniteapi.io/v1/shop?lang=en';
const _keyApi = '624cebb9-9fc066c6-553575c8-97fb5203'

function Shop() {
	const { loading, order, isBasketShow, alertName,  setGoods} = useContext(ShopContext)

	useEffect(function getGoods() {
		fetch(_baseApi, {
			headers: {
				"Authorization": _keyApi
			}
		})
			.then((res) => res.json())
			.then((data) => {
				setGoods(data.featured)
			})
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<section className="container content">
			<Cart quantity={order.length} />
			{
				loading ? <Preloader /> : <GoodsList />
			}
			{
				isBasketShow && <BasketList />
			}
			{
				alertName && <Alert />
			}
		</section>
	)
};
export default Shop;