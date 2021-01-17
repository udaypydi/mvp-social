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
                color: ${(props) => props.color || colors.facebookColor};
                cursor: pointer;
                &:hover {
                    transform: scale(1.1);
                }
              `,
        api: '/api/login/facebook',
    },
    {
        name: 'Twitter',
        icon: styled(FaTwitterSquare)`
                color: ${(props) => props.color || colors.twitterColor};
                cursor: pointer;
                &:hover {
                    transform: scale(1.1);
                }
            `,
        api: '/api/login/twitter',
    },
    {
        name: 'LinkedIn',
        icon: styled(FaLinkedin)`
                color: ${(props) => props.color || colors.linkedinColorCode};
                cursor: pointer;
                &:hover {
                    transform: scale(1.1);
                }
            `,
        api: '/api/login/linkedin',
    },
]