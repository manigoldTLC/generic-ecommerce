import React from 'react';
import { Container, BtnColor } from './styles';

const ChooseColor = ({ bgColor }) => {
	return (
		<Container>
			<p className='title'>Color</p>
			<div className='container-buttons'>
				<BtnColor bgColor="#787676"></BtnColor>
				<BtnColor bgColor="#433F40"></BtnColor>
				<BtnColor></BtnColor>
			</div>
		</Container>
	);
}

export default ChooseColor;