import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
} from 'chart.js';



ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
)

export function LineChart({ labels, coinId, priceData }) {

    const data = {
        labels,
        datasets: [
            {
                label: `USD price for ${coinId}`,
                data: priceData,
                fill: false,
                backgroundColor: 'rgb(255,99,132)',
                borderColor: 'rgba(255,99,132,0.2)',
            },
        ],
    };
    return <Line data={data} />
}
