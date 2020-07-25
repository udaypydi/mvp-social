import React from 'react';
import styled from '@emotion/styled';
import theme from 'src/theme';
import { H3 } from 'src/commons/text';
import Button from 'src/uielements/button/button.component';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'

const { colors } = theme;

const Container = styled.div`
    display: flex;
    flex: 1;
    justify-content: ${props => props.justify || 'center'};
    align-items: ${props => props.align || 'center'};
    flex-direction: ${props => props.flexDirection || 'column'};
    height: ${props => props.height || 'auto'}
`;

const CustomButton = styled(Button)`
    background: ${colors.primaryColor} !important;
    color: #ffffff;
    &:hover {
        box-shadow: 0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(65,126,235,.4);
    }

    &:focus {
        outline: none;
    }
`;

function Dashboard(props) {
    return (
        <Container>
            <Container 
                justify="center" 
                align="center" flexDirection="row"
            >
                <FaFacebook 
                    size="4em" 
                    color={colors.primaryColor} 
                    style={{ margin: 10 }}
                />
                <FaTwitter 
                    size="4em" 
                    color={colors.primaryColor} 
                    style={{ margin: 10 }}
                />
                <FaLinkedin 
                    size="4em" 
                    color={colors.primaryColor}
                    style={{ margin: 10 }} 
                />
            </Container>
            <H3 
                weight="500"
                margin="10px 0px 10px 0px"
            >Create your social content with ease.</H3>
            <CustomButton buttonText="Get Started!" />
        </Container>
    );
}

export default Dashboard;
