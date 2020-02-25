import React from 'react';
import styled from 'styled-components/native'

import { Dimensions } from 'react-native';
import { TabView, TabBar as PTabBar } from 'react-native-tab-view'

import { getColorFromPokemonTypes } from '../../utils/utils'

import { PTextPokemonType } from '../../assets/global_styles'

import PButton from '../../assets/components/Button'
import { PText, PTitle } from '../../assets/global_styles'
import { colors, dimens } from '../../assets/values'

import HeartOutlined from '../../assets/svgs/heart_outlined'

export const StatusBar = styled.StatusBar.attrs({
    backgroundColor: 'transparent',
    barStyle: 'light-content',
    translucent: true
})``;

export const Button = styled(PButton)``;

export const FavoriteIcon = styled(HeartOutlined).attrs({
    width: 20,
    height: 20
})`
    color: ${colors.textSecondaryLight};
    margin-right: 16px;
`;

export const Background = styled.View`
    position: absolute;
    left: 0;
    top: -20%;
    width: 100%;
    height: 120%;
    background-color: ${props => getColorFromPokemonTypes(props.types, colors.secondary)};
`;

export const Container = styled.ScrollView``;

export const ContainerTitleId = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-left: 16px;
    margin-right: 16px;
`;

export const Title = styled(PTitle)`
    color: ${colors.textSecondaryLight};
    margin-top: 0;
    align-self: flex-start;
`;

export const PokemonIdText = styled.Text`
    color: ${colors.textSecondaryLight};
    font-size: ${dimens.textH5};
    font-weight: bold;
`;

export const PokemonTypeContainer = styled.View`
    width: 50%;
    flex-direction: row;
    margin-left: 16px;
`;

export const TextPokemonType = styled(PTextPokemonType)`
    margin-right: 8px;
`;

export const PokemonImage = styled.Image`
    position: absolute;
    align-self: center;
    top: 80px;

    width: 70%;
    height: 220px;
    resizeMode: contain;

    elevation: 4;
`;

export const InfoContainer = styled.View`
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-color: ${colors.secondary};
    margin-top: 200px;

    shadow-opacity: 0.30;
    shadow-radius: 5.65px;
    elevation: 3;
`;

const PageTitleText = styled.Text`
    color: ${props => props.selected ? colors.text : colors.textSecondary};
    font-size: ${dimens.textH5};
    font-weight: bold;
`;

const TabBar = styled(PTabBar).attrs({
    indicatorStyle: {
        backgroundColor: colors.text
    },
    renderLabel: ({ route, focused, color }) => <PageTitleText selected={focused}>{route.title}</PageTitleText>
})`
    background-color: transparent;
    elevation: 0;
    shadow-color: transparent;
`;

export const InfoTabView = styled(TabView).attrs({
    initialLayout: {
        width: Dimensions.get('window').width
    },
    renderTabBar: (props) => <TabBar {...props}/>,

})`
    flex: 1;
    margin-top: 42px;
`;

export const InfoPageContainer = styled.View`
    padding: 16px;
    min-height: 500px;
`;

//About page
export const AboutText = styled(PText)`
    font-size: ${dimens.textH5};
    font-weight: bold;
    line-height: 24px;
`;

export const AboutTitleText = styled(PText)`
    font-size: ${dimens.textH4};
    font-weight: bold;
    margin-top: 24px;
`;

export const AboutSubTitleText = styled.Text`
    color: ${colors.textSecondary};
    font-size: ${dimens.textH5};
    font-weight: bold;
`;

export const AboutBasicInfoContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border-radius: 20px;
    background-color: ${colors.secondary};
    padding: 16px;
    margin-top: 16px;

    shadow-opacity: 0.36;
    shadow-radius: 6.68px;
    elevation: 11;
`;

export const AboutBasicInfoSubContainer = styled.View``;

export const AboutBasicInfoText = styled(PText)`
    font-size: ${dimens.textH5};
    font-weight: bold;
    margin-top: 4px;
`;

export const AboutBreedingContainer = styled.View``;

export const AboutBreedingSubContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;
`;

export const AboutBreedingGenderInfoContainer = styled.View`
    flex: 6;
    flex-direction: row;
    align-items: center;
`;

export const AboutBreedingSubTitleText = styled(AboutSubTitleText)`
    flex: 4;
`;

export const AboutBreedingText = styled(AboutText)`
    flex: 6;
`;

export const ContainerFailure = styled.View`
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
`;

export const TryAgainText = styled(PText)`
    font-weight: 300;
    font-size: ${dimens.textH4};
`;

export const TryAgainButton = styled.TouchableOpacity`
    width: 60%;
    padding: 8px 16px 8px 16px;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background-color: ${colors.purpleLight};
    margin-top: 16px;
`;

export const TryAgainButtonText = styled.Text`
    color: ${colors.textSecondaryLight};
    font-weight: 300;
    font-size: ${dimens.textH4};
`;