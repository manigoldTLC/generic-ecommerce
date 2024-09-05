import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;

		&__texts {
			&__subtitle {
				font-size: 12px;
				font-weight: 400;
				color: ${theme.colors.grey4};
			}

			&__title {
				font-size: 16px;
				font-weight: bold;
				color: ${theme.colors.grey10};
				margin-top: 10px;
			}
		}

		&__profile {
			img {
				width: 4rem;
				height: 4rem;
				border-radius: 50%;
				object-fit: cover;
			}
		}
	}

	.categories {
		display: flex;
		justify-content: space-between;
	}

	.grid-cards {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(155px, 1fr));
		gap: 16px;
		margin-top: 2rem;
	}

	@media (min-width: 1024px) {
		.categories {
			justify-content: flex-start;
			gap: 1rem;
		}
	}
`;