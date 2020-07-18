import React from 'react';
import styled from '@emotion/styled';
import { colors } from 'theme';
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaInstagram, FaPinterestSquare } from 'react-icons/fa';

export const SOCIAL_ACCOUNTS = [
    {
        name: 'Facebook Group',
        icon: styled(FaFacebookSquare)`color: ${colors.primaryColor}; font-size: ${props => props.fontSize};`,
    },
    {
        name: 'Facebook Page',
        icon: styled(FaFacebookSquare)`color: ${colors.primaryColor};font-size: ${props => props.fontSize};`,
    },
    {
        name: 'Twitter',
        icon: styled(FaTwitterSquare)`color: ${colors.primaryColor};font-size: ${props => props.fontSize};`,
    },
    {
        name: 'LinkedIn Page',
        icon: styled(FaLinkedin)`color: ${colors.primaryColor};font-size: ${props => props.fontSize};`,
    },
    {
        name: 'LinkedIn Profile',
        icon: styled(FaLinkedin)`color: ${colors.primaryColor};font-size: ${props => props.fontSize};`,
    },
    {
        name: 'Instagram',
        icon: styled(FaInstagram)`color: ${colors.primaryColor};font-size: ${props => props.fontSize};`,
    },
    {
        name: 'Pinterest',
        icon: styled(FaPinterestSquare)`color: ${colors.primaryColor};font-size: ${props => props.fontSize};`,
    }
];
