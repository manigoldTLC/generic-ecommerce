import React from 'react';
import { ReactComponent as SearchIcon } from '../../assets/icons/search-icon.svg';
import { ReactComponent as SettingsIcon } from '../../assets/icons/settings-icon.svg';
import {
	Container,
	SearchContainer,
	FilterContainer
} from './styles.js'

const SearchBar = () => {
	return (
		<Container>
			<SearchContainer>
				<SearchIcon />
				<input type="text" placeholder="Pesquisar..." />
			</SearchContainer>

			<FilterContainer>
				<SettingsIcon />
			</FilterContainer>
		</Container>
	)
}

export default SearchBar;