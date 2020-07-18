import styled from '@emotion/styled';
import { fonts } from 'theme';

export const H1 = styled.h1`
    font-size: 3.3125rem;
    font-family: ${fonts.primaryFont};
    font-weight: 300;
    color: ${props => props.color};
`;

export const H2 = styled.h2`
    font-size: 2.25rem;
    font-family: ${fonts.primaryFont};
    font-weight: 300;
    color: ${props => props.color};
`;

export const H3 = styled.h3`
    font-size: 1.5625rem;
    font-family: ${fonts.primaryFont};
    font-weight: 300;
    color: ${props => props.color};
`;

export const H4 = styled.h4`
    font-size: 1.125rem;
    font-family: ${fonts.primaryFont};
    font-weight: 300;
    color: ${props => props.color};
`

export const H5 = styled.h5`
    font-size: 1.0625rem;
    font-family: ${fonts.primaryFont};
    font-weight: 300;
    color: ${props => props.color};
`;

export const H6 = styled.h6`
    font-size: .75rem;
    font-family: ${fonts.primaryFont};
    font-weight: 300;
    color: ${props => props.color};
`;

export const Paragraph = styled.p`
    font-size: ${props => props.fontSize};
    font-family: ${fonts.primaryFont};
    color: ${props => props.color};
`;

export const Quote = styled.blockquote`
    margin-bottom: 1rem;
    font-size: 1.25rem;
    font-family: ${fonts.primaryFont};
`;

export const MutedText = styled.p`
    color: #6c757d!important;   
`;

