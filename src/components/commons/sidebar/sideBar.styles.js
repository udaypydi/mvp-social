import { css } from '@emotion/core';
import { colors } from 'theme';

const styles = {
  container: css`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
    width: 260px;
    background: #fff;
    box-shadow: 0 16px 38px -12px rgba(0,0,0,.56), 0 4px 25px 0 rgba(0,0,0,.12), 0 8px 10px -5px rgba(0,0,0,.2);
  `,

  sidebarWrapper: css`
    position: relative;
    height: calc(100vh - 75px);
    overflow: auto;
    width: 260px;
    z-index: 4;
    padding-bottom: 30px;
  `,

  logo: css`
    padding: 15px 0;
    margin: 0;
    display: block;
    position: relative;
    z-index: 4;
  `,

  logoText: css`
    text-transform: uppercase;
    padding: 5px 0;
    display: inline-block;
    font-size: 18px;
    color: #3c4858;
    white-space: nowrap;
    font-weight: 400;
    line-height: 30px;
    overflow: hidden;
    text-align: center;
    display: block;
  `,

  navigationBar: css`
    margin-top: 20px;
    display: block;
  `,

  navigationItem: css`
    margin: 10px 15px 0;
    border-radius: 3px;
    color: #3c4858;
    padding-left: 10px;
    padding-right: 10px;
    text-transform: capitalize;
    font-size: 13px;
    padding: 10px 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: all .15s ease-in;
    &:hover{
      background-color: hsla(0,0%,78%,.2);
      color: #3c4858;
      box-shadow: none;  
    }
  `,

  navigationElementText: css`
    margin: 0;
    line-height: 30px;
    font-size: 14px;
    position: relative;
    display: block;
    height: auto;
    white-space: nowrap;
    transition: all .3s linear;
  `,

  iconContainer: css`
    font-size: 24px;
    float: left;
    margin-right: 15px;
    line-height: 30px;
    width: 30px;
    text-align: center;
    color: #a9afbb;
  `,

  activeIcon: css`
    color: #ffffff;
  `,

  active: css`
    background-color: ${colors.primaryColor};
    box-shadow: 0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(65, 126, 235, .4);
    color: #ffffff;
    &:hover{
      background-color: ${colors.primaryColor};
      box-shadow: 0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(65, 126, 235, .4);
      color: #ffffff;
    }
  `
};


export default styles;
