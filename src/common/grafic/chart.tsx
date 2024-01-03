import { CChart } from '@coreui/react-chartjs';
import { Box, Typography } from '@mui/material';
import { Chart, BarElement, CategoryScale, LinearScale } from 'chart.js'; // Importa Chart y BarElement desde chart.js

Chart.register(BarElement, CategoryScale, LinearScale); // Registra BarElement

const DoctorAppointmentsChart: React.FC = () => {
    return (
        <Box
            sx={{
                backgroundColor: 'white',
                width: '26.5%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                marginTop:"10px"
            }}
        >
            <Typography variant="body2" style={{ padding: '9px 0px 5px 8px' }}>
                <b>GRAFICA DE CITAS DE ESTE MES</b>
            </Typography>
            <CChart
                type="doughnut"
                data={{
                    labels: ['Asistidas', 'Canceladas', 'Proximas'],
                    datasets: [
                        {
                            backgroundColor: ['#41B883', '#E46651', '#00D8FF'],
                            data: [50, 20, 30],
                        },
                    ],
                }}
                options={{
                    plugins: {
                        legend: {
                            labels: {
                                color: '--cui-body-color',
                            },
                        },
                    },
                }}
            />
        </Box>
    );
};

export default DoctorAppointmentsChart;
