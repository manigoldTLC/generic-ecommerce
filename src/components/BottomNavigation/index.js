import React from 'react';
import {
	HiOutlineHome,
	HiOutlineHeart,
	HiOutlineUser,
	HiOutlineShoppingBag
} from "react-icons/hi";
import { Container } from './styles';

const BottomNavigation = () => {
  return (
	<Container>
		<div className='container-icon'>
			<HiOutlineHome size={26} color='#fff' />
		</div>
		<div className='container-icon'>
			<HiOutlineShoppingBag size={26} color='#fff' />
		</div>
		<div className='container-icon'>
			<HiOutlineHeart size={26} color='#fff' />
		</div>
		<div className='container-icon'>
			<HiOutlineUser size={26} color='#fff' />
		</div>
	</Container>
  );
}

export default BottomNavigation;