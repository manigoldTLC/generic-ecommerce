import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	cursor: pointer;
	margin-bottom: 1rem;

	.header-card {
		width: 100%;
		height: 265px;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			border-radius: 16px;
		}
	}

	.bottom-card {
		margin-top: 1rem;

		&__title {
			font-size: 14px;
			font-weight: 700;
			color: ${theme.colors.grey10};
		}

		&__subtitle {
			margin-top: 8px;
			font-size: 10px;
			font-weight: 400;
			color: ${theme.colors.grey4};
		}

		&__price {
			margin-top: 16px;
			font-size: 14px;
			font-weight: 700;
			color: ${theme.colors.grey13};
		}
	}
`;