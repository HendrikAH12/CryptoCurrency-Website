import styled from "styled-components";
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
    
`;

const LineChart = ({ coinHistory }) => {
    const coinPrice = [];
    const coinTimestamp = [];

    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinPrice.push(coinHistory?.data?.history[i].price);
    }

    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        let timestamp = coinHistory?.data?.history[i].timestamp.toString();

        coinTimestamp.push(timestamp.substring(0, 4));
    }

    const data = {
        labels: coinTimestamp,
        datasets: [
            {
                label: "Price",
                data: coinPrice,
                fill: true,
                backgroundColor: "white",
                borderColor: "black",
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
