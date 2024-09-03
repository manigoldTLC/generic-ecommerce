import React from 'react';
import { Container } from './styles';
import CardProductDetail from '../../components/CardProductDetail';
import ChooseSize from '../../components/ChooseSize';
import ChooseColor from '../../components/ChooseColor';
import BottomNavigationDetail from '../../components/BottomNavigationDetail';
import AddItem from '../../components/AddItem';

const ProductDetail = () => {
	return (
		<Container>
			<CardProductDetail />

			<div className='header-detail'>
				<h1 className='header-detail__title'>Modern Light Clothes</h1>
				<AddItem />
			</div>

			<p className='middle-detail'>
				Its simple and elegant shape makes it perfect for
				those of you who like you who want minimalist
				clothes. Its simple and elegant shape makes it perfect for
				those of you who like you who want minimalist
				clothes.
			</p>

			<div className='bottom-detail'>
				<ChooseSize />
				<ChooseColor />
			</div>

			<BottomNavigationDetail />
		</Container>
	);
}

export default ProductDetail;