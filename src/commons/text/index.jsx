import styled from '@emotion/styled';
import theme from 'src/theme';

const { fonts } = theme;

export const H1 = styled.h1`
    font-size: 3.3125rem;
    font-family: ${fonts.primaryFont};
    font-weight: 300;
    color: ${(props) => props.color};
    margin: ${(props) => props.margin || 0};
`;

export const H2 = styled.h2`
    font-size: 2.25rem;
    font-family: ${fonts.primaryFont};
    font-weight: 300;
    color: ${(props) => props.color};
    margin: ${(props) => props.margin || 0};
`;

export const H3 = styled.h3`
    font-size: 1.5625rem;
    font-family: ${fonts.primaryFont};
    font-weight: ${(props) => props.weight || '300'};
    color: ${(props) => props.color};
    margin: ${(props) => props.margin || 0};
`;

export const H4 = styled.h4`
    font-size: 1.125rem;
    font-family: ${fonts.primaryFont};
    font-weight: ${props => props.fontWeight || 300};
    color: ${(props) => props.color};
    margin: ${(props) => props.margin || 0};
`;

export const H5 = styled.h5`
    font-size: 1.0625rem;
    font-family: ${fonts.primaryFont};
    font-weight: 300;
    color: ${(props) => props.color};
    margin: ${(props) => props.margin || 0};
`;

export const H6 = styled.h6`
    font-size: .75rem;
    font-family: ${fonts.primaryFont};
    font-weight: ${(props) => props.weight || 300};
    color: ${(props) => props.color};
    margin: ${(props) => props.margin || 0};
`;

export const Paragraph = styled.p`
    font-size: ${(props) => props.fontSize};
    font-family: ${fonts.primaryFont};
    color: ${(props) => props.color};
    font-weight: ${(props) => props.weight || 300};
`;

export const Quote = styled.blockquote`
    margin-bottom: 1rem;
    font-size: 1.25rem;
    font-family: ${fonts.primaryFont};
`;

export const MutedText = styled.p`
    color: #6c757d!important;   
`;
