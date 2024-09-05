import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
	.container-icons {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 16px 0 48px;

		&__box {
			width: 40px;
		}

		.container-icons__arrow {
			width: 2.5rem;
			height: 2.5rem;
			background-color: ${theme.colors.grey2};
			border-radius: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
			box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
			cursor: pointer;
		}

		.checkout {
			font-size: 16px;
			font-weight: 600;
			color: ${theme.colors.grey10};
		}
	}

	.container-cards {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.container-information {
		margin-top: 4rem;

		&__title {
			font-size: 14px;
			font-weight: 600;
			color: ${theme.colors.grey10};
			margin-bottom: 1.5rem;
		}
	}
`;

export const SummaryContainer = styled.div`
	width: 100%;
	max-width: 400px;
	margin: 2rem auto;
`;

export const Row = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 10px 0;
	font-size: 16px;
	color: #333;
`;

export const Label = styled.span`
  	color: ${theme.colors.grey13};
	  font-weight: 400;
	  font-size: 14px;
`;

export const Value = styled.span`
  	color: ${theme.colors.grey13};
	font-weight: 600;
	font-size: 14px;
`;

export const Subtotal = styled(Row)`
	border-top: 1px solid #f2f2f2;
	padding-top: 22px;
	margin-top: 12px;
`;