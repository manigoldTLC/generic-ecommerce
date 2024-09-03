import styled from "styled-components";

export const Container = styled.div`
	padding: 2rem 1.5rem;

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;

		&__texts {
			&__subtitle {
				font-size: 1rem;
				color: #292526;
				margin-left: 5px;
			}

			&__title {
				font-size: 2rem;
				font-weight: 600;
				color: #292526;
				margin-top: 1rem;
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
		width: 65%;
		margin: 0 auto;

		.categories {
			justify-content: flex-start;
			gap: 1rem;
		}
	}
`;