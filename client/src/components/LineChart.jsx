import { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import moment from "moment";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

import { useGetCryptoHistoryQuery } from "../services/cryptoApi";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #272727;
    padding: 12px 12px 24px 12px;
`;

const LineChart = () => {
    const { id } = useParams();
    const [timePeriod, setTimePeriod] = useState("7d");
    const { data: coinHistory } = useGetCryptoHistoryQuery({ id, timePeriod });

    if (!coinHistory?.data) return <Loader />;

    const coinPrice = [];
    const coinTimestamp = [];

    for (let i = coinHistory?.data?.history?.length - 1; i >= 0; i -= 1) {
        coinPrice.push(coinHistory?.data?.history[i].price);
    }

    for (let i = coinHistory?.data?.history?.length - 1; i >= 0; i -= 1) {
        coinTimestamp.push(moment.unix(coinHistory?.data?.history[i].timestamp).format("MM/DD/YYYY HH:MM"));
    }

    const data = {
        labels: coinTimestamp,
        datasets: [
            {
                data: coinPrice,
                backgroundColor: "black",
                borderColor: "white",
                pointRadius: 0,
            }
        ]
    };

    const options = {
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            xAxis: {
              display: false
            }
        }
    };

    const timePeriodOptions = [
        { label:'3h', value:'3h' },
        { label:'24h', value:'24h' },
        { label:'7d', value:'7d' },
        { label:'30d', value:'30d' },
        { label:'3m', value:'3m' },
        { label:'1y', value:'1y' },
        { label:'3y', value:'3y' },
        { label:'5y', value:'5y' }
    ];

    const handleChange = (event) => {
        setTimePeriod(event.target.value);
    };

    return (
        <Container>
            <div style={{display: "flex", justifyContent: "flex-end"}}>
                <select
                    value={timePeriod}
                    onChange={handleChange}
                    style={{paddingLeft: "10px"}}
                >
                    {timePeriodOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
            <Line data={data} options={options} style={{maxHeight: "575px"}}/>
        </Container>
    )
};

export default LineChart;
