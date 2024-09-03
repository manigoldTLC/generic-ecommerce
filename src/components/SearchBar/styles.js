import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 1rem;
	width: 100%;
	margin: 1.5rem 0 2rem;
`;

export const SearchContainer = styled.div`
	display: flex;
	gap: .5rem;
	align-items: center;
	padding: 14px 16px;
	width: calc(100% - (48px + 1rem));
	height: 48px;
	border: 1px solid ${theme.colors.grey5};
	border-radius: 8px;

	svg {
		cursor: pointer;
	}

	input {
		width: 100%;
		height: 100%;
		background-color: transparent;
		border: none;
		color: ${theme.colors.grey13};
		font-size: 14px;
		font-weight: 400;
		outline: none;
	}
`;

export const FilterContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 48px;
	height: 48px;
	background-color: ${theme.colors.grey13};
	border-radius: 8px;
	cursor: pointer;
	transition: background-color 0.3s;
`;