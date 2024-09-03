import React from 'react';
import { Container } from './styles';

const ChooseSize = () => {
	return (
		<Container>
			<p className='title'>Choose Size</p>
			<div className='container-buttons'>
				<button className='container-buttons__btn'>S</button>
				<button className='container-buttons__btn'>M</button>
				<button className='container-buttons__btn selected'>L</button>
				<button className='container-buttons__btn'>XL</button>
			</div>
		</Container>
	);
}

export default ChooseSize;