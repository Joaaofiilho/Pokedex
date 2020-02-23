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
    font-size: ${dimens.textH2}
`;