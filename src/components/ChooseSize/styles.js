import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	.title {
		font-size: 12px;
		font-weight: bold;
	}

	.container-buttons {
		display: flex;
		justify-content: flex-start;
		gap: 8px;

		&__btn {
			width: 26px;
			height: 26px;
			border-radius: 50%;
			border: 1px solid ${theme.colors.grey5};
			background-color: transparent;

			font-size: 12px;
			font-weight: 400;
			color: ${theme.colors.grey13};
		}

		.selected {
			background-color: ${theme.colors.grey13};
			border: 1px solid ${theme.colors.grey13};

			font-weight: bold;
			color: ${theme.colors.grey2};
		}
	}
`;