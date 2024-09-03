import React from 'react';
import { ReactComponent as CarIcon } from '../../assets/icons/car-icon.svg';
import { Container } from './styles';

const BottomNavigationDetail = () => {
  return (
	<Container>
		<div className='container-button'>
			<CarIcon />

			<p className='container-button__text'>Add to Cart | $162.99</p>
		</div>
	</Container>
  );
}

export default BottomNavigationDetail;