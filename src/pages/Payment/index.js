import React from 'react';
import { ReactComponent as ArrowDownIcon } from '../../assets/icons/arrow-back-icon.svg';
import {
	Container,
	SummaryContainer,
	Row,
	Label,
	Value,
	Subtotal
} from './styles';
import { Link } from 'react-router-dom';
import CardPayment from '../../components/CardPayment';
import SelectPayment from '../../components/SelectPayment';
import BottomNavigationPayment from '../../components/BottomNavigationPayment';

const Payment = () => {
	return (
		<Container>
			<div className='container-icons'>
				<Link to="/product" className='container-icons__arrow'>
					<ArrowDownIcon />
				</Link>

				<p className='checkout'>Checkout</p>

				<div className='container-icons__box'></div>
			</div>

			<div className='container-cards'>
				<CardPayment />
				<CardPayment />
			</div>

			<div className='container-information'>
				<p className='container-information__title'>Shipping Information</p>
				<SelectPayment />

				<SummaryContainer>
					<Row>
						<Label>Total (5 items)</Label>
						<Value>$1,014.95</Value>
					</Row>

					<Row>
						<Label>Shipping Fee</Label>
						<Value>$.0.00</Value>
					</Row>

					<Row>
						<Label>Discount</Label>
						<Value>$.0.00</Value>
					</Row>

					<Subtotal>
						<Label>Sub Total</Label>
						<Value>$1,014.95</Value>
					</Subtotal>
				</SummaryContainer>
			</div>

			<BottomNavigationPayment />
		</Container>
	);
}

export default Payment;