import React from 'react';
import {SelectWrapper, TimeframeOption} from "./styles";

const TIMEFRAME_OPTIONS = [
    { value: '1', label: '1 Minute' },
    { value: '5', label: '5 Minutes' },
    { value: '60', label: '1 Hour' },
    { value: '10080', label: '1 Week' },
];

const TimeframeSelector = ({ value, onChange }) => {

    const handleTimeFrameChange = (option) => {
        onChange(option.value);
    };
    return (
        <SelectWrapper>
            {TIMEFRAME_OPTIONS.map((option) => (
                <TimeframeOption
                    key={option.value}
                    onClick={() => handleTimeFrameChange(option)}
                    isActive={value === option.value}
                >
                    {option.label}
                </TimeframeOption>
            ))}
        </SelectWrapper>
    );
};

export default TimeframeSelector;
