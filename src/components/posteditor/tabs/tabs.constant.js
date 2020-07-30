import React from 'react';
import styled from '@emotion/styled';
import theme from 'src/theme';
import { MdDashboard, MdCropSquare, MdTitle, } from 'react-icons/md';

const { colors } = theme;

export const TABS = [
    {
        name: 'Templates',
        key: 'TEMPLATES',
        icon: styled(MdDashboard)`
                color: ${(props) => props.color};
                font-size: 2em;
                &:hover {
                    color: ${colors.primaryColor}!important;
                }
            `,
    },
    {
        name: 'Background',
        key: 'BACKGROUND',
        icon: styled(MdCropSquare)`
                color: ${(props) => props.color};
                font-size: 2em;
                &:hover {
                    color: ${colors.primaryColor} !important;
                }
            `,
    },
    {
        name: 'Text',
        key: 'TEXT',
        icon: styled(MdTitle)`
                color: ${(props) => props.color};
                font-size: 2em;
                &:hover {
                    color: ${colors.primaryColor}!important;
                }
            `,
    },
];
