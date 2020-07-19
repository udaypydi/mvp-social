import React from 'react';
import styled from '@emotion/styled';
import { MdPerson, MdNotifications } from 'react-icons/md';


export const HEADER_ICONS = [
    {
        name: 'Notification',
        icon: styled(MdNotifications)`
                color: ${props => props.color}; 
                font-size: ${props => props.fontSize};
                cursor: pointer;
            `,
    },
    {
        name: 'My Profile',
        icon: styled(MdPerson)`
                color: ${props => props.color}; 
                font-size: ${props => props.fontSize};
                cursor: pointer;
            `,
    }
];
