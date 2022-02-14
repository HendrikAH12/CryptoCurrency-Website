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
    background-color: #272727;
    padding: 12px;
`;

const LineChart = () => {
    const { id } = useParams();
    const timePeriod = "7d";
    const { data: coinHistory } = useGetCryptoHistoryQuery({ id, timePeriod });

    if (!coinHistory?.data) return <Loader />;

    const coinPrice = [];
    const coinTimestamp = [];

    for (let i = coinHistory?.data?.history?.length - 1; i >= 0; i -= 1) {
        coinPrice.push(coinHistory?.data?.history[i].price);
    }

    for (let i = coinHistory?.data?.history?.length - 1; i >= 0; i -= 1) {
        coinTimestamp.push(moment.unix(coinHistory?.data?.history[i].timestamp).format("MM/DD/YY"));
    }

    const data = {
        labels: coinTimestamp,
        datasets: [
            {
                label: "Price",
                data: coinPrice,
                backgroundColor: "black",
                borderColor: "white",
                pointRadius: 1.25,
            },
        ],
    };

    return (
        <Container>
            <Line data={data} options={{}} />
        </Container>
    )
};

export default LineChart;
