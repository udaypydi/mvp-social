import { css } from '@emotion/core';

const styles = {
    container: css`
        margin-top: 100px;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        padding-left: 40px;
    `,

    card: css`
        margin: 10px;
        transition: box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1);
        will-change: box-shadow,transform;
        &:hover{
            border: 1px solid transparent;
            box-shadow: 0 14px 26px -12px rgba(65, 126, 235, .4), 0 4px 23px 0 rgba(65, 126, 235, .4), 0 8px 10px -5px rgba(65, 126, 235, .4);
        }
    ` 
};

export default styles;
