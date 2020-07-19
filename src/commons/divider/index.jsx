import styled from '@emotion/styled';

const Divider = styled.div`
    display: flex;
    flex: 1;
    content: "";
    position: absolute;
    bottom: 0;
    right: 15px;
    height: 1px;
    width: calc(100% - 30px);
    background-color: hsla(0,0%,71%,.3);
`;

export default Divider;
