import styled from 'styled-components/native'
import { FlatList } from 'react-native';
import Menu from '../../assets/svgs/menu'
import PPokeball from '../../assets/svgs/pokeball'
import Sliders from '../../assets/svgs/sliders'
import { colors, dimens } from '../../assets/values'

import { 
    PTitle 
} from '../../assets/global_styles'

export const StatusBar = styled.StatusBar.attrs({
    backgroundColor: 'transparent',
    barStyle: 'dark-content',
    translucent: true
})``;

export const MenuIcon = styled(Menu).attrs({
    width: 20,
    height: 20
})`
    margin-right: 32px;
`;

export const Background = styled.View`
    position: absolute;
    left: 0;
    top: -20%;
    width: 120%;
    height: 100%;
    background-color: ${colors.secondary};
`;

export const Container = styled.View`
    height: 100%;
    padding: 0 16px 16px 16px;
`;

export const Pokeball = styled(PPokeball).attrs({
    width: 270
})`
    color: ${colors.gray};
    position: absolute;
    top: -212px;
    right: -90px;
`;

export const Title = styled(PTitle)``;

export const PokemonsList = styled(FlatList).attrs({
    numColumns: 2,
    columnWrapperStyle: {
        flex: 1,
        justifyContent: 'space-around'
    }
})`
    margin-top: 16px;
`;

export const PokemonsListItem = styled.TouchableOpacity`
    width: 45%;
    height: 115px;
    border-radius: 20px;
    background-color: ${props => {
        return (
            props.types ?
                props.types.includes('Grass') ?
                    colors.green
                : props.types.includes('Fire') ?
                    colors.red
                : props.types.includes('Water') ?
                    colors.blue
                : props.types.includes('Electric') ?
                    colors.yellow
                : null
            :
                null
        )
    }};
    padding: 12px;
    margin-top: 12px;
    overflow: hidden;
`;

export const ListItemTextName = styled.Text`
    font-size: ${dimens.textH4};
    font-weight: bold;
    color: ${colors.textSecondaryLight};
`;

export const PokemonInfoArea = styled.View`
    flex-direction: row;
`;

export const ListItemTypeContainer = styled.View`
    margin-top: 4px;
`;

export const ListItemTextType = styled.Text.attrs({
    numberOfLines: 1
})`
    width: 40%;
    color: ${colors.textSecondaryLight};
    text-align: center;
    font-size: ${dimens.textH6};
    background-color: #FAFAFA44;
    padding: 2px 8px 2px 8px;
    border-radius: 50px;
    margin-top: 4px;
`;

export const ListItemImage = styled.Image`
    width: 60%;
    height: 75%;
    resizeMode: contain;
    position: absolute;
    bottom: 8px;
    right: 8px;
`;

export const ListItemPokeball = styled(PPokeball).attrs({
    width: '100%',
    height: '100%'
})`
    color: ${colors.gray};
    position: absolute;
    right: -20%;
    bottom: -15%;
`;

export const FilterButton = styled.TouchableOpacity`
    position: absolute;
    right: 20px;
    bottom: 32px;

    border-radius: 50px;
    padding: 12px;
    background-color: ${colors.purpleLight};

    shadow-color: #000;
    shadow-opacity: 0.51;
    shadow-radius: 13.16px;

    elevation: 20;
`;

export const FilterIcon = styled(Sliders).attrs({
    width: 20,
    height: 20
})``;