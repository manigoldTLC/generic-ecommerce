import React from 'react';
import img1 from '../../assets/images/img1.png';
import { Container } from './styles';
import { Link } from 'react-router-dom';

const CardHome = () => {
	return (
		<Link to="/product">
			<Container>
				<div className='header-card'>
					<img src={img1} alt="T-Shirt" />
				</div>

				<div className='bottom-card'>	
					<h3 className='bottom-card__title'>Modern Light Clothes</h3>
					<p className='bottom-card__subtitle'>T-Shirt</p>
					<p className='bottom-card__price'>$212.99</p>
				</div>
			</Container>
		</Link>
	);
}

export default CardHome;