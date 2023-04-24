import React, {memo, useState} from 'react';
import {useStockData} from "../../hooks/useStockData";
import TimeFrameSelector from "../TimeFrameSelector";
import {Table, Td, Th} from "./styles";
import {historyFormatDate} from "../../utils/formatDate";

const HistoryTub = memo(() => {
    const [timeFrame, setTimeFrame] = useState('1');
    const {data, isLoading} = useStockData(timeFrame);

    // Function that will be called when the selected timeframe changes
    const handleTimeFrameChange = (value) => {
        setTimeFrame(value);
    };

    return (
        <div className="history">
            <TimeFrameSelector value={timeFrame} onChange={handleTimeFrameChange}/>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <Table>
                    <thead>
                    <tr>
                        <Th date>Date</Th>
                        <Th>Open</Th>
                        <Th>High</Th>
                        <Th>Low</Th>
                        <Th>Close</Th>
                        <Th>% Change</Th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.slice(0, 20).map((row) => (
                        <tr key={row.StartDate}>
                            <Td date>{historyFormatDate(row.StartDate)}</Td>
                            <Td>{row.Open}</Td>
                            <Td>{row.High}</Td>
                            <Td>{row.Low}</Td>
                            <Td>{row.Close}</Td>
                            <Td change={(row.Close - row.Open) / row.Open * 100}>{((row.Close - row.Open) / row.Open * 100).toFixed(2)}%</Td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            )}
        </div>
    );
});

export default HistoryTub