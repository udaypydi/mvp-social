import React from 'react';
import styled from '@emotion/styled';
import {
  MdPerson, MdDashboard, MdTrendingUp, MdEventNote,
} from 'react-icons/md';
import { FaChartArea } from 'react-icons/fa';
import { IoIosRocket } from 'react-icons/io';

export const SIDEBAR_ELEMENTS = [
  {
    title: 'Dashboard',
    route: '/dashboard',
    icon: styled(MdDashboard)`color: ${(props) => props.color}`,
  },
  {
    title: `What's Trending?`,
    route: '/aggregate',
    icon: styled(MdTrendingUp)`color: ${(props) => props.color}`,
  },
  {
    title: 'Analyze Accounts',
    route: '/dashboard',
    icon: styled(FaChartArea)`color: ${(props) => props.color}`,
  },
  {
    title: 'Manage Accounts',
    route: '/manage-accounts',
    icon: styled(MdEventNote)`color: ${(props) => props.color}`,
  },
];
