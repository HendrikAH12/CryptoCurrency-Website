import styled from "styled-components";
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

    for (let i = coinHistory?.data?.history?.length - 1; i > 0; i -= 1) {
        coinPrice.push(coinHistory?.data?.history[i].price);
    }

    for (let i = coinHistory?.data?.history?.length - 1; i > 0; i -= 1) {
        coinTimestamp.push(moment.unix(coinHistory?.data?.history[i].timestamp).format("DD/MM"));
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
