import { css } from '@emotion/core';
import theme from 'src/theme';

const { colors } = theme;

const styles = {
  headerContainer: css`
    display: flex;
    flex: 1;
    height: 80px;
    width: 100%;
    position: fixed;
    top: 0;
    background-color: #ffffff;
    padding: 0px 10px 0px 10px;
    justify-content: flex-start;
    align-items: center;
  `,
  companyName: css`
    font-family: sans-serif;
    font-size: 2em;
    font-weight: 900;
    color: ${colors.primaryColor};
    letter-spacing: 0.063em;
    margin-left: 20px;
  `,

  headerElementsContainer: css`
    display: flex;
    flex: 1;
    flexx-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding-right: 2%;
  `,

  headerElement: css`
    font-family: Roboto;
    font-size: 1em;
    color: #ffffff;
    letter-spacing: 0.063em;
    margin-right: 2%;
    cursor: pointer;
    padding: 0 5px 0 5px;
    text-align: center;
    border-bottom: 5px solid transparent;
    &:hover {
      border-bottom: 5px solid #00C2D4;
    }
    transition: border-bottom .2s ease;
  `,

  raisedContainer: css`
    -webkit-box-shadow: 0px 3px 5px -2px #ccc;
    -moz-box-shadow: 0px 3px 5px -2px #ccc;
    box-shadow: 0px 3px 5px -2px #ccc;
  `,
};

export default styles;
