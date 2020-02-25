import styled from 'styled-components/native'

import PPokeball from '../../assets/svgs/pokeball'
import Search from '../../assets/svgs/search'
import PSearchCategorie from '../../assets/components/SearchCategorie'

import { FlatList, Dimensions } from 'react-native';
import { PText, PTitle, PSecondaryTitle, ListSeparator } from '../../assets/global_styles'
import { dimens, colors} from '../../assets/values'

export const Container = styled.ScrollView`
    background-color: ${colors.background};
`;

export const Pokeball = styled(PPokeball).attrs({
    width: 270,
})`
    color: ${colors.gray};
    position: absolute;
    top: -40%;
    right: -20%;
`;

export const SearchContainer = styled.View`
    align-items: center;
    background-color: ${colors.secondary};
    padding: 74px 16px 32px 16px;
    border-bottom-left-radius: 32px;
    border-bottom-right-radius: 32px;

    shadow-opacity: 0.30;
    shadow-radius: 4.65px;
    elevation: 2;
`;

export const Title = styled(PTitle)``;

export const SearchBar = styled.View`
    width: 100%;
    height: 50px;
    flex-direction: row;
    align-items: center;
    background-color: ${colors.background};
    border-radius: 50px;
    margin-top: 16px;
    padding-left: 20px;
    padding-right: 20px;
`;

export const SearchIcon = styled(Search).attrs({
    width: 21,
    height: 21
})`
    color: ${colors.text};
`; 

export const SearchBarInput = styled.TextInput.attrs({
    numberOfLines: 1,
    placeholderTextColor: colors.textSecondary
})`
    flex: 1;
    color: ${colors.text};
    font-size: ${dimens.textH4};
    font-weight: 300;
    margin-left: 16px;
`;

export const SearchCategorie = styled(PSearchCategorie)``;

export const SearchCategoriesContainer = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 16px;
`;

export const PokemonNewsContainer = styled.View`
    margin-top: 32px;
    padding: 0 16px 32px 16px;
`;

export const SecondaryTitle = styled(PSecondaryTitle)``;

export const PokemonNewsList = styled(FlatList).attrs({
    scrollEnabled: false,
    ItemSeparatorComponent: ListSeparator
})``;

export const PokemonNewsListItemContainer = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;
`;

export const PokemonNewsListItemTextContainer = styled.View`
    width: 60%;
    margin-right: 16px;
`;

export const ListItemImage = styled.Image`
    flex: 1;
    height: 68px;
    border-radius: 24px;
`;

export const ListItemTextTitle = styled(PText)`
    font-size: ${dimens.textH3};
    font-weight: bold;
    line-height: 26px;
`;

export const ListItemTextDate = styled.Text`
    font-size: ${dimens.textH6};
    font-weight: bold;
    color: ${colors.textSecondary};
    margin-top: 4px;
`;