import { useState, useEffect, useMemo } from 'react';

export const useStockData = (timeFrame) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const apiUrl = useMemo(() => {
        return `https://test.fxempire.com/api/v1/en/stocks/chart/candles?Identifier=AAPL.XNAS&IdentifierType=Symbol&AdjustmentMethod=All&IncludeExtended=False&period=${timeFrame}&Precision=Minutes&StartTime=02/22/2023&EndTime=03/01/2023%2023:59&_fields=ChartBars.StartDate,ChartBars.High,ChartBars.Low,ChartBars.StartTime,ChartBars.Open,ChartBars.Close,ChartBars.Volume`;
    }, [timeFrame]);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            const response = await fetch(apiUrl);
            const data = await response.json();

            setData(data);
            setIsLoading(false);
        };

        fetchData();
    }, [apiUrl]);

    return { data, isLoading };
};
