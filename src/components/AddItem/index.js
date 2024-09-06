import React, { useState } from 'react';
import { Container } from './styles';

const AddItem = ({ increment, sumIncrement, subtractIncrement }) => {

	return (
		<Container>
			<button onClick={() => subtractIncrement()} className='container-button'>-</button>
			<span className='increment'>{increment}</span>
			<button onClick={() => sumIncrement()} className='container-button'>+</button>
		</Container>
	);
}

export default AddItem;