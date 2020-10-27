import React from 'react';
import styled from '@emotion/styled';
import { 
    FaFacebookSquare,
    FaTwitterSquare,
    FaLinkedin,
} from 'react-icons/fa';
import theme from 'src/theme';

const { colors } = theme;


export const ACCOUNTS_LIST = [
    {
        name: 'Facebook',
        icon: styled(FaFacebookSquare)`
                color: ${(props) => props.color || colors.primaryColor};
                cursor: pointer;
                &:hover {
                    transform: scale(1.1);
                }
              `,
    },
    {
        name: 'Twitter',
        icon: styled(FaTwitterSquare)`
                color: ${(props) => props.color || colors.primaryColor};
                cursor: pointer;
                &:hover {
                    transform: scale(1.1);
                }
            `,
    },
    {
        name: 'Linkedin',
        icon: styled(FaLinkedin)`
                color: ${(props) => props.color || colors.primaryColor};
                cursor: pointer;
                &:hover {
                    transform: scale(1.1);
                }
            `,
    },
]