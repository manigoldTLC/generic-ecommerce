import React, { useState, useEffect } from 'react';
import { Container } from './styles';
import CardProductDetail from '../../components/CardProductDetail';
import ChooseSize from '../../components/ChooseSize';
import ChooseColor from '../../components/ChooseColor';
import BottomNavigationDetail from '../../components/BottomNavigationDetail';
import AddItem from '../../components/AddItem';
import { useParams } from 'react-router-dom';
import { api } from '../../utils/api';


const ProductDetail = () => {

	const { id } = useParams();
	const [product, setProduct] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	const [increment, setIncrement] = useState(1);

	// const fetchProduct = async () => {
	// 	try {
	// 		const response = await api.get(`/products/${id}`);
	// 		setProduct(response.data);
	// 		setIsLoading(false);
	// 	} catch (error) {
	// 		console.log(error);
	// 		setIsLoading(false);
	// 	}
	// };

	const fetchProduct = async () => {
		try {
			const response = await api.get('');
			const allData = response.data; // Carregar o JSON completo
			const product = allData.products.find(p => p.id === parseInt(id));
			if (product) {
				setProduct(product);
			}
			setIsLoading(false);
		} catch (error) {
			console.log(error);
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchProduct();
	}, [id]);

	const sumIncrement = () => {
		setIncrement(increment + 1);
	}

	const subtractIncrement = () => {
		if (increment > 1) {
			setIncrement(increment - 1);
		}
	}

	const handleAddItem = () => {
		let price = product.price;
		let calc = price * increment;

		return calc.toPrecision(5);
	}


	return (
		<Container>
			{isLoading && <p className='loading'>Carregando...</p>}
			<CardProductDetail image={product.image} />

			<div className='header-detail'>
				<h1 className='header-detail__title'>{product.name}</h1>
				<AddItem
					increment={increment}
					sumIncrement={sumIncrement}
					subtractIncrement={subtractIncrement}
				/>
			</div>

			<p className='middle-detail'>{product.description}</p>

			<div className='bottom-detail'>
				{product.sizes && <ChooseSize sizes={product.sizes} />}
				<ChooseColor />
			</div>

			<BottomNavigationDetail price={handleAddItem()} />
		</Container>
	);
}

export default ProductDetail;