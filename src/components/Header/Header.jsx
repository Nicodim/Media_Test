import React, {useEffect, useMemo, useState} from 'react';
import {
    ContentContainer,
    HeaderContainer,
    Subtitle,
    Title,
    ValueContainer, ValueSubtitle,
    ValueSubtitleContainer,
    ValueTitle
} from "./styles";
import {formatDate} from "../../utils/formatDate";


const Header = ( ) => {
    const [data, setData] = useState({});

    useEffect(() => {
        const ws = new WebSocket('wss://wstest.fxempire.com?token=btctothemoon');

        ws.onopen = () => {
            const subscribeMsg = { type: 'SUBSCRIBE', instruments: ['s-aapl'] };
            ws.send(JSON.stringify(subscribeMsg));
        };

        ws.onmessage = (event) => {
            const message = JSON.parse(event.data);

            if (message) {
                setData({
                    last: message['s-aapl'].last,
                    change: message['s-aapl'].change,
                    percentChange: message['s-aapl'].percentChange,
                    lastUpdate: new Date(message['s-aapl'].lastUpdate).toLocaleString(),
                });
            }
        };

        return () => {
            const unsubscribeMsg = { type: 'UNSUBSCRIBE', instruments: ['s-aapl'] };
            ws.send(JSON.stringify(unsubscribeMsg));
            ws.close();
        };
    }, []);

    const formattedLastUpdate = useMemo(() => formatDate(data.lastUpdate), [data.lastUpdate]);

    return (
        <HeaderContainer>
            {data ? (
                <ContentContainer>
                    <div>
                        <Title>Apple Inc</Title>
                        <Subtitle> {formattedLastUpdate}</Subtitle>
                    </div>
                    <ValueContainer>
                        <ValueTitle isPositive={data.change && data.percentChange}>{ data.last}</ValueTitle>
                        <ValueSubtitleContainer>
                            <ValueSubtitle isPositive={data.change && data.percentChange}>{data.change}</ValueSubtitle>
                            <ValueSubtitle isPositive={data.change && data.percentChange}>({data.percentChange}%)</ValueSubtitle>
                        </ValueSubtitleContainer>
                    </ValueContainer>
                </ContentContainer>
            ) : (
                <div>Loading...</div>
            )}

        </HeaderContainer>
    );
};

export default Header;
