import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${theme.colors.grey13};
	border-radius: 44px;
	height: 60px;
	padding: 10px 16px;
	cursor: pointer;
	position: fixed;
	bottom: 20px;
	left: 50%;
	transform: translateX(-50%);
	z-index: 1000;
	width: calc(100% - 3rem);

	.container-icon {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background-color: rgba(255, 255, 255, 0.2);
	}
`;