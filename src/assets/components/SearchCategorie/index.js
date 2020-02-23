import React from 'react';
import PropTypes from 'prop-types'

import {
  PokeballLeft,
  PokeballRight,
  SearchCategorieButton,
  SearchCategorieText
} from './styles'

export default function SearchCategorie({text, color, ...rest}) {
    return (
      <SearchCategorieButton color={color} {...rest}>
        <PokeballLeft/>
        <SearchCategorieText>{text}</SearchCategorieText>
        <PokeballRight/>
      </SearchCategorieButton>
    );
}

SearchCategorie.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
}