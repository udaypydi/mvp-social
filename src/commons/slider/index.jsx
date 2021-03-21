import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';
import theme from 'src/theme';

const { colors } = theme;

const SliderStyled = styled(Slider)`
    width: ${props => props.width} !important;
    background-color: ${colors.containerBackground} !important;
`;

function RangeSlider({ min, max, width, value, onChange, onChangeComplete }) {
    const [sliderValue, setSliderValue] = useState(value);

    return (
        <SliderStyled
            min={0}
            max={100}
            value={sliderValue}
            onChange={(val) => {
                setSliderValue(val);
                onChange(val);
            }}
            onChangeComplete={() => {
                onChangeComplete();
            }}
            width={width}
        />
    );
}



RangeSlider.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    onChangeComplete: PropTypes.func,
    width: PropTypes.string,
};

RangeSlider.defaultProps = {
    min: 0,
    max: 100,
    value: 0,
    onChange: () => {},
    onChangeComplete: () => {},
    width: '100%'
};

export default RangeSlider;
