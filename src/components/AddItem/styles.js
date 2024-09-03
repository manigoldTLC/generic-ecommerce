import styled from "styled-components";
import theme from '../../styles/theme';

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 12px;
	width: fit-content;

	.container-button {
		width: 32px;
		height: 32px;
		border-radius: 50%;
		border: 1px solid ${theme.colors.grey5};
		background-color: transparent;
		color: ${theme.colors.grey13};
		font-weight: bold;
		font-size: 18px;
	}

	.increment {
		font-weight: bold;
		font-size: 16px;
		color: ${theme.colors.grey13};
	}
`;