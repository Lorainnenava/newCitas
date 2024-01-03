import { Box } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import { Chart, BarElement, CategoryScale, LinearScale } from 'chart.js'; // Importa Chart y BarElement desde chart.js

Chart.register(BarElement, CategoryScale, LinearScale); // Registra BarElement

const SalesChart = () => {
    const data = {
        labels: [
            'Enero',
            'Febrero',
            'Marzo',
            'Abril',
            'Mayo',
            'Junio',
            'Julio',
            'Agosto',
            'Septiembre',
            'Octubre',
            'Noviembre',
            'Diciembre',
        ],
        datasets: [
            {
                label: 'Ventas',
                data: [12, 19, 3, 5, 2, 3, 7, 8, 6, 5, 4, 7], // Aquí debes poner los datos reales
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
            },
        ],
    };

    return (
        <Box
            sx={{
                width: '63%',
                backgroundColor: 'white',
                marginTop: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
            }}
        >
            <Bar data={data} />
        </Box>
    );
};

export default SalesChart;
