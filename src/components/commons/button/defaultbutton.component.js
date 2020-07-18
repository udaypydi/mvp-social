import styled from '@emotion/styled';
import { colors } from 'theme';

const Button = styled.button`
    position: relative;
    padding: 12px 30px;
    margin: .3125rem 1px;
    font-size: .75rem;
    font-weight: 400;
    line-height: 1.428571;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0;
    cursor: pointer;
    border: 0;
    border-radius: .2rem;
    background-color: ${colors.primaryColor};
    color: #fff;
    cursor: pointer;
    border-color: ${colors.primaryColor};
    box-shadow: 0 2px 2px 0 rgba(65, 126, 235, .4), 0 3px 1px -2px rgba(65, 126, 235, .4), 0 1px 5px 0 rgba(65, 126, 235, .4);
    transition: box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1);
    will-change: box-shadow,transform;
    &:hover{
        box-shadow: 0 14px 26px -12px rgba(65, 126, 235, .4), 0 4px 23px 0 rgba(65, 126, 235, .4), 0 8px 10px -5px rgba(65, 126, 235, .4);
    }
`

export default Button;
