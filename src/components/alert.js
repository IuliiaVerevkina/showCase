import {  useEffect, useContext } from "react";
import { ShopContext } from "./context/context";

function Alert() {
	const { alertName = '', closeAlert = Function.prototype} = useContext(ShopContext);

	useEffect(() => {
		const timerId = setTimeout(closeAlert, 3000);

		return () => {
			clearTimeout(timerId)
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [alertName])

	return (
		<div id="toast-container">
			<div className="toast">{alertName} added to cart!</div>
		</div>
	)
};
export default Alert;