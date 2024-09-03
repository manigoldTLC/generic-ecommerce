import React from 'react';
import SearchBar from '../../components/SearchBar';
import imageProfile from '../../assets/images/eu.png';
import { Container } from './styles';
import Category from '../../components/Category';
import CardHome from '../../components/CardHome';
import BottomNavigation from '../../components/BottomNavigation';

const Home = () => {
	return (
		<Container>
			<div className='header'>
				<div className='header__texts'>	
					<p className='header__texts__subtitle'>Hello, Welcome <span role="img" aria-label="tchau">👋</span></p>
					<h1 className='header__texts__title'>Gabriel Xavier</h1>
				</div>

				<div className='header__profile'><img src={imageProfile} alt='imagem de perfil' /></div>
			</div>

			<SearchBar />

			<div className='categories'>
				<Category
					icon="category"
					text="All Itens"
				/>
				<Category
					icon="dress"
					text="Dress"
					borderColor="#DFDEDE"
					backgroundColor="transparent"
					textColor="#292526"	
				/>
				<Category
					icon="shirt"
					text="Shirt"
					borderColor="#DFDEDE"
					backgroundColor="transparent"
					textColor="#292526"
				/>
				<Category
					icon="pants"
					text="Pants"
					borderColor="#DFDEDE"
					backgroundColor="transparent"
					textColor="#292526"
				/>
			</div>

			<div className='grid-cards'>
				<CardHome />
				<CardHome />
				<CardHome />
				<CardHome />
				<CardHome />
				<CardHome />
			</div>

			<BottomNavigation />
		</Container>
	);
}

export default Home;