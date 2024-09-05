import React from 'react';
import { ReactComponent as CarIcon } from '../../assets/icons/car-icon.svg';
import { Container } from './styles';

const BottomNavigationPayment = () => {
  return (
	<Container>
		<div className='container-button'>
			<p className='container-button__text'>Pay</p>
		</div>
	</Container>
  );
}

export default BottomNavigationPayment;