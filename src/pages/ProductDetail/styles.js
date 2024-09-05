import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`

	.header-detail {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 1.5rem;

		.header-detail__title {
			font-size: 24px;
			font-weight: 600;
			color: ${theme.colors.grey10};
		}
	}

	.middle-detail {
		margin-top: 1.5rem;
		font-size: 12px;
		font-weight: 400;
		color: ${theme.colors.grey4};
		line-height: 150%;
		border-bottom: 1px solid ${theme.colors.grey3};
		padding-bottom: 1rem;
	}

	.bottom-detail {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 1rem;
	}
`;