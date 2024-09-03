import {
	createBrowserRouter,
} from "react-router-dom";
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: '/product',
		element: <ProductDetail />,
	}
]);

export default router;