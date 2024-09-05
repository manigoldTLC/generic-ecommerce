import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
	padding-bottom: 1.5rem;
	border-bottom: 1px solid ${theme.colors.grey3};

	.container-card {
		display: flex;
		justify-content: space-between;
		height: 70px;

		.left-card {
			display: flex;
			align-items: flex-start;
			gap: 15px;
	
			&__image {
				width: 70px;
				height: 70px;
	
				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
					object-position: top;
					border-radius: 14px;
				}
			}
	
			&__texts {
				&__title,
				&__price {
					font-size: 14px;
					font-weight: 600;
				}
	
				&__item {
					font-size: 10px;
					font-weight: 400;
					color: ${theme.colors.grey4};
					margin-top: 10px;
				}
	
				&__price {
					margin-top: 22px;
				}
			}
		}

		.right-card {
			display: flex;
			flex-direction: column;
			align-items: flex-end;

			&__btn {
				background: none;
				border: none;
				cursor: pointer;
			}

			&__add-item {
				margin-top: 14px;
			}
		}
	}

`;