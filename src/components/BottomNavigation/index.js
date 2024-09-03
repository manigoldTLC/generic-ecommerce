import React from 'react';
import { ReactComponent as HomeIcon } from '../../assets/icons/home-icon.svg';
import { ReactComponent as BagIcon } from '../../assets/icons/bag-icon.svg';
import { ReactComponent as HeartIcon } from '../../assets/icons/heart-icon.svg';
import { ReactComponent as ProfileIcon } from '../../assets/icons/person-icon.svg';
import { Container } from './styles';

const BottomNavigation = () => {
  return (
	<Container>
		<div className='container-icon'>
			<HomeIcon />
		</div>
		<div className='container-icon'>
			<BagIcon />
		</div>
		<div className='container-icon'>
			<HeartIcon />
		</div>
		<div className='container-icon'>
			<ProfileIcon />
		</div>
	</Container>
  );
}

export default BottomNavigation;