import React, { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar';
import imageProfile from '../../assets/images/eu.png';
import { Container } from './styles';
import Category from '../../components/Category';
import CardHome from '../../components/CardHome';
import BottomNavigation from '../../components/BottomNavigation';
import Slider from 'react-slick';
import { api } from '../../utils/api';
import { useNavigate } from 'react-router-dom';


const Home = () => {

	const navigate = useNavigate();

	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	// const getProducts = async () => {
	// 	try {
	// 		const response = await api.get('/products');
	// 		setProducts(response.data);
	// 		setIsLoading(false);
	// 	} catch (error) {
	// 		console.error(error);
	// 		setIsLoading(false);
	// 	}
	// }

	const getProducts = async () => {
		try {
			const response = await api.get(''); // Omitir '/products' porque você está pegando o JSON inteiro
			const allData = response.data; // O JSON completo será carregado
			const products = allData.products; // Acesse os produtos dentro do JSON
			setProducts(products);
			setIsLoading(false);
		} catch (error) {
			console.error(error);
			setIsLoading(false);
		}
	}

	useEffect(() => {
		getProducts();
	}, []);

	const handleProductDetail = (id) => {
		navigate(`/product/${id}`);
	}

	const settingsCarousel = {
		dots: false,
		arrows: false,
		infinite: false,
		speed: 800,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<Container>
			<div className='header'>
				<div className='header__texts'>
					<p className='header__texts__subtitle'>Olá, bem-vindo <span role="img" aria-label="tchau">👋</span></p>
					<h1 className='header__texts__title'>Gabriel Xavier</h1>
				</div>

				<div className='header__profile'><img src={imageProfile} alt='imagem de perfil' /></div>
			</div>

			<SearchBar />

			<div className='categories'>
				<Slider {...settingsCarousel}>
					<Category
						icon="category"
						text="Todos"
					/>
					<Category
						icon="dress"
						text="Vestidos"
						borderColor="#DFDEDE"
						backgroundColor="transparent"
						textColor="#292526"
					/>
					<Category
						icon="shirt"
						text="Camisetas"
						borderColor="#DFDEDE"
						backgroundColor="transparent"
						textColor="#292526"
					/>
					<Category
						icon="pants"
						text="Calças"
						borderColor="#DFDEDE"
						backgroundColor="transparent"
						textColor="#292526"
					/>
					<Category
						icon="accessories"
						text="Acessórios"
						borderColor="#DFDEDE"
						backgroundColor="transparent"
						textColor="#292526"
					/>
				</Slider>
			</div>

			<div className='grid-cards'>
				{isLoading && <p className='loading'>Carregando...</p>}
				{products.map(products => (
					<CardHome
						onclick={() => handleProductDetail(products.id)}
						key={products.id}
						image={products.image}
						description={products.description}
						name={products.name}
						category={products.category}
						price={products.price}
					/>
				))}
			</div>

			<BottomNavigation />
		</Container>
	);
}

export default Home;