import React, {memo, useState} from 'react';
import { Line, XAxis, YAxis, Tooltip, Legend, Label} from 'recharts';
import TimeFrameSelector from "../TimeFrameSelector";
import {useStockData} from "../../hooks/useStockData";
import {StyledLineChart} from "./styles";

const CustomLabel = ({x, y, value}) => {
    return <text x={x} y={y} visibility="hidden">{value}</text>
}

const Overview = memo(() => {
    const [timeFrame, setTimeFrame] = useState('1');
    const {data, isLoading} = useStockData(timeFrame);


    const handleTimeFrameChange = (value) => {
        setTimeFrame(value);
    };

    const formatXAxis = (dateStr) => {
        const date = new Date(dateStr);
        const day = date.getDate();
        const month = date.toLocaleString('default', {month: 'short'});
        return day + ' ' + month;
    }

    return (
        <div>
            <TimeFrameSelector value={timeFrame} onChange={handleTimeFrameChange}/>
            {isLoading ? (
                    <div>Loading...</div>
                ) :
                <StyledLineChart width={900} height={600} data={data}>
                    <XAxis dataKey="StartDate" tickFormatter={formatXAxis}/>
                    <YAxis yAxisId="left" orientation="left"/>
                    <YAxis yAxisId="right" orientation="right"/>
                    <Tooltip/>
                    <Legend/>
                    <Line type="monotone" dataKey="Close" stroke="#8884d8" yAxisId="left" dot={false}>
                        <Label content={<CustomLabel/>}/>
                    </Line>
                    <Line type="monotone" dataKey="Volume" stroke="#82ca9d" yAxisId="right" dot={false}>
                        <Label content={<CustomLabel/>}/>
                    </Line>
                </StyledLineChart>
            }
        </div>
    );
});

export default memo(Overview);
