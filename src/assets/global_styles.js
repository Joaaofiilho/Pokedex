import styled from 'styled-components/native'
import { dimens, colors } from './values'

export const PText = styled.Text`
    color: ${colors.text};
`;

export const PTitle = styled(PText)`
    width: 80%;
    font-size: ${dimens.textH1};
    align-self: flex-start;
    font-weight: bold;
    letter-spacing: 0.5px;
    line-height: 42px;
    margin-top: 16px;
`;

export const PSecondaryTitle = styled(PTitle)`
    font-size: ${dimens.textH2};
`;

export const PTextPokemonType = styled.Text.attrs({
    numberOfLines: 1
})`
    max-width: 50%;
    align-self: flex-start;
    color: ${colors.textSecondaryLight};
    text-align: center;
    font-size: ${dimens.textH6};
    font-weight: bold;
    background-color: #FAFAFA44;
    padding: 4px 12px 4px 12px;
    border-radius: 50px;
    margin-top: 4px;
`;

