import React from 'react';
import { ReactComponent as ArrowDownIcon } from '../../assets/icons/arrow-back-icon.svg';
import { ReactComponent as HeartIcon } from '../../assets/icons/heart-filled-black-icon.svg';
import { Container } from './styles';
import { Link } from 'react-router-dom';

const CardProductDetail = ({ image }) => {
	return (
		<Container>
			<div className='container-icons'>
				<Link to="/" className='container-icons__arrow'>
					<ArrowDownIcon />
				</Link>
				<div className='container-icons__heart'>
					<HeartIcon />
				</div>
			</div>
			<img src={image} alt="Product" />
		</Container>
	);
}

export default CardProductDetail;