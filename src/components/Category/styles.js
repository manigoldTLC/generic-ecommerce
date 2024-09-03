import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 4px;
	padding: 8px 12px;
	border-radius: 8px;
	width: fit-content;
	cursor: pointer;
	transition: 0.3s;
	border: 1px solid ${({ borderColor }) => borderColor || theme.colors.grey13};
	background-color: ${({ backgroundColor }) => backgroundColor || theme.colors.grey13};

	&:hover {
		transform: scale(1.05);
	}

	.category-text {
		font-weight: 600;
		font-size: 12px;
		line-height: 150%;
		color: ${({ textColor }) => textColor || theme.colors.grey2};
	}
`;