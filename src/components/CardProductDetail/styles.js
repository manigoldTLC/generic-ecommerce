import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
	width: 100%;
	height: 392px;
	position: relative;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: top;
		border-radius: 1rem;
	}

	.container-icons {
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: absolute;
		top: 1rem;
		right: 1rem;
		left: 1rem;

		.container-icons__arrow,
		.container-icons__heart {
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
	}
`;