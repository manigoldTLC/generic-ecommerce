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
	}
`;

export const BtnColor = styled.div`
	width: 26px;
	height: 26px;
	border-radius: 50%;
	border: 1px solid ${({ bgColor }) => bgColor || theme.colors.grey13};
	background-color: ${({ bgColor }) => bgColor || theme.colors.grey13};
`;