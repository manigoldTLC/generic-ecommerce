import React from 'react';
import { iconsMap } from '../../utils/category';
import { Container } from './styles';

const Category = ({
	icon,
	text,
	borderColor,
	backgroundColor,
	textColor
}) => {

	const Icon = iconsMap[icon];

	return (
		<Container
			borderColor={borderColor}
			backgroundColor={backgroundColor}
			textColor={textColor}
		>
			{icon && <Icon />}
			<p className='category-text'>{text}</p>
		</Container>
	);
}

export default Category;