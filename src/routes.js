import {
	createBrowserRouter,
} from "react-router-dom";
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Payment from "./pages/Payment";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: '/product/:id',
		element: <ProductDetail />,
	},
	{
		path: '/product/payment',
		element: <Payment />,
	}
]);

export default router;