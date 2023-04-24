import Header from "./components/header";
import Shop from "./components/shop";
import Footer from "./components/footer";
import { ContextProvider } from "./components/context/context";

function App() {
	return (
		<>
			<Header />
			<ContextProvider>
				<Shop />
			</ContextProvider>
			<Footer />
		</>
	);
}

export default App;
