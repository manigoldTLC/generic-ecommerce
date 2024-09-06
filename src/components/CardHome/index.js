import React from 'react';
import img1 from '../../assets/images/img1.png';
import { Container } from './styles';


const CardHome = ({ name, category, price, image, description, onclick }) => {
	return (
		<Container onClick={onclick}>
			<div className='header-card'>
				<img src={image} alt={description} />
			</div>

			<div className='bottom-card'>
				<h3 className='bottom-card__title'>{name}</h3>
				<p className='bottom-card__subtitle'>{category}</p>
				<p className='bottom-card__price'>R$ {price}</p>
			</div>
		</Container>
	);
}

export default CardHome;