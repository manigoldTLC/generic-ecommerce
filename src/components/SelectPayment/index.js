import React, { useState } from 'react';
import { ReactComponent as ArrowDownIcon } from '../../assets/icons/arrow-down-icon.svg';
import { ReactComponent as VisaIcon } from '../../assets/icons/visa-icon.svg';
import { ReactComponent as MastercardIcon } from '../../assets/icons/mastercard-icon.svg';
import { ReactComponent as AmexIcon } from '../../assets/icons/amex-icon.svg';
import {
	CardSelectContainer,
	CardLogo,
	CardNumber,
	Dropdown,
	DropdownItem,
	ArrowIcon
} from './styles';

const SelectPayment = () => {
	const [selectedCard, setSelectedCard] = useState({
		logo: 'visa',
		number: '**** **** **** 2143',
	});
	
	const [isOpen, setIsOpen] = useState(false);

	const cards = [
		{
			logo: 'visa',
			number: '**** **** **** 2143',
		},
		{
			logo: 'mastercard',
			number: '**** **** **** 9876',
		},
		{
			logo: 'amex',
			number: '**** **** **** 5678',
		},
	];

	const getCardIcon = (logo) => {
		switch (logo) {
			case 'visa':
				return <VisaIcon />;
			case 'mastercard':
				return <MastercardIcon />;
			case 'amex':
				return <AmexIcon />;
			default:
				return null;
		}
	};

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const handleSelectCard = (card) => {
		setSelectedCard(card);
		setIsOpen(false);
	};

	return (
		<div>
			<CardSelectContainer onClick={toggleDropdown}>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<CardLogo>
						{getCardIcon(selectedCard.logo)}
					</CardLogo>
					<CardNumber>{selectedCard.number}</CardNumber>
				</div>
				<ArrowIcon open={isOpen}>
					<ArrowDownIcon />
				</ArrowIcon>
			</CardSelectContainer>

			<Dropdown open={isOpen}>
				{cards.map((card, index) => (
					<DropdownItem key={index} onClick={() => handleSelectCard(card)}>
						<CardSelectContainer>
							<CardLogo>
								{getCardIcon(card.logo)}
							</CardLogo>
							<CardNumber>{card.number}</CardNumber>
						</CardSelectContainer>
					</DropdownItem>
				))}
			</Dropdown>
		</div>
	);
};

export default SelectPayment;
