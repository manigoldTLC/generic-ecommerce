import React from 'react';
import { ReactComponent as CarIcon } from '../../assets/icons/car-icon.svg';
import { Container } from './styles';
import { Link } from 'react-router-dom';

const BottomNavigationDetail = () => {
  return (
	<Container>
		<Link to='/product/payment'>
			<div className='container-button'>
				<CarIcon />

				<p className='container-button__text'>Add to Cart | $162.99</p>
			</div>
		</Link>
	</Container>
  );
}

export default BottomNavigationDetail;