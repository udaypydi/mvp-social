import { css } from '@emotion/core';

const styles = {
  homeContainer: css`
    flex: 1;
    display: flex;
    flex-direction: column;
    margin: 0;
  `,

  containerOne: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0;
    background-image: linear-gradient(to right, #5080c3, #4975c1, #456abe, #445eba, #4752b5);
    width: 100%;
    height: ${window.screen.availHeight}px;
  `,

  containerTwo: css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    margin: 0;
    width: 100%;
    height: ${window.screen.availHeight}px;
  `,

  content1: css`
    font-size: 2.4em;
    color: #ffffff;
    letter-spacing: 0.083em;
    line-height: 1.2;
    text-shadow: 2px 3px 0px #898999;
    font-weight: 900;
    width: 70%;
  `,

  secondContainerContent1: css`
    margin-top: 120px;
    color: #000;
    text-shadow: none;
  `,

  content2: css`
    font-size: 1.725em;
    color: #ffffff;
    letter-spacing: 0.083em;
    text-shadow: 2px 3px 0px #898999;
    text-transform: uppercase;
    font-weight: 700;
  `,

  buttonStyle: css`
    font-size: 18px;
    box-shadow: 10px 10px 14px 1px rgba(00,00,00,0.2);
    &:hover {
      box-shadow: none;
    }
  `,

  description: css`
    font-size: 20px;
    font-family: Roboto;
    width: 70%;
    letter-spacing: 0.083em;
    line-height: 1.5;
  `,

  imageStyle: css`
    height: 400px;
  `,

  sectionNumber: css`
    padding: 10px;
    border-radius: 40px;
    border: 3px solid #01b5ad;
    color: #01b5ad;
    font-size: 22px;
    font-weight: bold;
    height: 40px;
    width: 40px;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
  `,

  greyGradient: css`
    background-image: linear-gradient(to right top, #f3f0f0, #f1eeee, #eeecec, #eceaea, #eae8e8);
  `,
};

export default styles;
