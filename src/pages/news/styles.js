import styled from 'styled-components/native'
import { Dimensions } from 'react-native';
import { colors, dimens } from '../../assets/values'
import { PTitle, PText } from '../../assets/global_styles'

export const Background = styled.View`
    position: absolute;
    left: 0;
    top: -20%;
    width: 100%;
    height: 120%;
    background-color: ${colors.secondary};
`;

export const Container = styled.ScrollView.attrs({
    contentContainerStyle: {
        paddingStart: 16
    }
})``;

export const Image = styled.Image`
    width: ${Dimensions.get('window').width - 16}px;
    height: 200px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    margin-top: 16px;
`;

export const Title = styled(PTitle)`
    margin-right: 16px;
`;

export const DateText = styled.Text`
    font-size: ${dimens.textH6};
    font-weight: bold;
    color: ${colors.textSecondary};
    margin-top: 8px;
`;

export const NewsContainer = styled.View`
    margin: 16px 16px 0 0;
    padding-bottom: 16px;
`;

export const NewsText = styled.Text`
    color: ${colors.textSecondary};
    font-size: ${dimens.textH6};
    line-height: 24px;
    font-weight: bold;
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
    height: 80px;
    background-color: ${colors.purpleLight};
`;