import React from 'react';
import { Container } from './styles';

const ChooseSize = ({ sizes }) => {
	return (
		<Container>
			<p className='title'>Escolha o tamanho</p>
			<div className='container-buttons'>
				{sizes.map((size) => (
					<button key={size} className='container-buttons__btn'>{size}</button>
				))}
			</div>
		</Container>
	);
}

export default ChooseSize;