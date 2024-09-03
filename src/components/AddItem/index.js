import React, { useState } from 'react';
import { Container } from './styles';

const AddItem = () => {

	const [increment, setIncrement] = useState(1);

	const sumIncrement = () => {
		setIncrement(increment + 1);
	}

	const subtractIncrement = () => {
		if (increment > 1) {
			setIncrement(increment - 1);
		}
	}

	return (
		<Container>
			<button onClick={() => subtractIncrement()} className='container-button'>-</button>
			<span className='increment'>{increment}</span>
			<button onClick={() => sumIncrement()} className='container-button'>+</button>
		</Container>
	);
}

export default AddItem;