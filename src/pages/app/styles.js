import styled from 'styled-components/native'
import { FlatList } from 'react-native';
import { PText, PTitle, PSecondaryTitle } from '../../assets/global_styles'
import { dimens, colors} from '../../assets/values'

export const Container = styled.ScrollView`
    background-color: ${colors.background};
`;

export const SearchContainer = styled.View`
    align-items: center;
    background-color: ${colors.secondary};
    padding: 32px 16px 32px 16px;
    border-bottom-left-radius: 32px;
    border-bottom-right-radius: 32px;

    shadow-opacity: 0.30;
    shadow-radius: 4.65px;
    elevation: 2;
`;

export const Title = styled(PTitle)`
    align-self: flex-start;
    margin-top: 16px;
`;

export const SearchBar = styled.View`
    width: 100%;
    height: 50px;
    flex-direction: row;
    align-items: center;
    background-color: ${colors.background};
    border-radius: 50px;
    margin-top: 16px;
`;

export const SearchIcon = styled.View`
    width: 30px;
    height: 30px;
    background-color: red;
    margin-left: 24px;
`; 

export const SearchBarInput = styled.TextInput.attrs({
    numberOfLines: 1,
    placeholderTextColor: colors.textSecondary
})`
    flex: 1;
    color: ${colors.text};
    font-size: ${dimens.textH4};
    font-weight: 300;
    margin-left: 24px;
    margin-right: 24px;
`;

export const SearchCategoriesContainer = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 16px;
`;

export const SearchCategorie = styled.TouchableOpacity`
    width: 45%;
    height: 70px;
    flex-direction: row;
    align-items: center;
    background-color: ${props => props.color ? props.color : 'purple'};
    border-radius: 20px;
    margin-bottom: 15px;
    margin-left: 4px;
    margin-right: 4px;

    shadow-color: ${props => props.color ? props.color : 'purple'};
    shadow-opacity: 0.30;
    shadow-radius: 4.65px;
    elevation: 8;
`;

export const SearchCategorieText = styled.Text`
    color: ${colors.textSecondary};
    font-size: ${dimens.textH4};
    font-weight: bold;
    margin-left: 16px;
`;

export const PokemonNewsContainer = styled.View`
    margin-top: 32px;
    padding: 0 16px 32px 16px;
`;

export const SecondaryTitle = styled(PSecondaryTitle)``;

const PokemonNewsListSeparator = styled.View`
    border-width: 1px;
    border-color: #F1F1F1;
    border-radius: 50px;
    margin-top: 16px;
`;

export const PokemonNewsList = styled(FlatList).attrs({
    scrollEnabled: false,
    ItemSeparatorComponent: PokemonNewsListSeparator
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