import React from 'react';
import img1 from '../../assets/images/img1.png';
import { ReactComponent as OptionsIcon } from '../../assets/icons/options-icon.svg';
import { Container } from './styles';
import AddItem from '../AddItem';

const CardPayment = () => {
	return (
		<Container>
			<div className='container-card'>	
				<div className='left-card'>
					<div className='left-card__image'>
						<img src={img1} alt='imagem produto' />
					</div>

					<div className='left-card__texts'>
						<p className='left-card__texts__title'>Modern light clothes</p>
						<p className='left-card__texts__item'>Dress modern</p>
						<p className='left-card__texts__price'>$212.99</p>
					</div>
				</div>


				<div className='right-card'>
					<button className='right-card__btn'>
						<OptionsIcon />
					</button>

					<div className='right-card__add-item'>
						<AddItem />
					</div>
				</div>
			</div>
		</Container>
	);
}

export default CardPayment;