import styled from 'styled-components/native'
import PPokeball from '../../../assets/svgs/pokeball'
import { colors, dimens } from '../../../assets/values'

export const SearchCategorieButton = styled.TouchableOpacity`
    width: 45%;
    height: 70px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${props => props.color ? props.color : 'purple'};
    border-radius: 20px;
    margin-bottom: 15px;
    margin-left: 4px;
    margin-right: 4px;
    overflow: hidden;

    shadow-color: ${props => props.color ? props.color : 'purple'};
    shadow-opacity: 0.30;
    shadow-radius: 4.65px;
    elevation: 8;
`;

export const SearchCategorieText = styled.Text`
    flex: 1;
    color: ${colors.textSecondaryLight};
    font-size: ${dimens.textH4};
    font-weight: bold;
    margin-left: 16px;
`;

export const PokeballLeft = styled(PPokeball).attrs({
    width: '70%',
    height: '150%'
})`
    position: absolute;
    left: -50%;
    top: -90%;
`;

export const PokeballRight = styled(PPokeball).attrs({
    width: '65%',
    height: '150%'
})`
    position: absolute;
    right: -20%;
`;