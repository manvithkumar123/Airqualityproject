import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const mockLabels = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00',
  '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00',
  '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];

const mockPM25Data = [10.2, 9.8, 8.5, 7.2, 6.8, 8.1, 12.5, 15.7,
  18.2, 16.9, 14.5, 13.8, 15.2, 16.7, 18.9, 17.5,
  15.8, 14.2, 13.5, 12.8, 11.5, 10.2, 9.5, 8.7];

const mockPM10Data = [25.6, 23.4, 21.8, 19.5, 18.2, 22.4, 28.6, 35.2,
  42.5, 38.7, 32.5, 29.8, 34.5, 37.2, 43.6, 40.2,
  35.8, 31.5, 28.6, 26.5, 24.8, 22.5, 20.8, 19.6];

const mockCO2Data = [410, 405, 402, 398, 395, 399, 405, 412,
  418, 422, 425, 423, 420, 418, 415, 412,
  410, 407, 405, 403, 400, 398, 395, 392];

const mockNOData = [15, 12, 10, 8, 7, 10, 18, 25,
  30, 28, 25, 22, 24, 26, 28, 25,
  22, 20, 18, 16, 14, 12, 10, 8];

const mockAQIData = [42, 38, 35, 30, 28, 34, 48, 60,
  68, 65, 58, 55, 60, 65, 70, 65,
  58, 52, 48, 45, 42, 38, 35, 32];

// Prepare chart data
const chartData = {
  labels: mockLabels,
  datasets: [
    {
      label: 'PM2.5',
      data: mockPM25Data,
      borderColor: '#8884d8',
      backgroundColor: '#8884d8',
      fill: false,
      tension: 0.1,
    },
    {
      label: 'PM10',
      data: mockPM10Data,
      borderColor: '#82ca9d',
      backgroundColor: '#82ca9d',
      fill: false,
      tension: 0.1,
    },
    {
      label: 'CO2',
      data: mockCO2Data,
      borderColor: '#ff7300',
      backgroundColor: '#ff7300',
      fill: false,
      tension: 0.1,
    },
    {
      label: 'NO',
      data: mockNOData,
      borderColor: '#ff0000',
      backgroundColor: '#ff0000',
      fill: false,
      tension: 0.1,
    },
    {
      label: 'AQI',
      data: mockAQIData,
      backgroundColor: '#000000',
      fill: true,
      borderWidth: 0,
    }
  ],
};

const AirQualityChart = ({ type }) => {
  if (type === 'pm') {
    return (
      <div style={{ width: '100%', height: 300 }}>
        <h3>PM2.5 & PM10</h3>
        <Line
          data={{
            labels: mockLabels,
            datasets: [
              {
                label: 'PM2.5',
                data: mockPM25Data,
                borderColor: '#8884d8',
                backgroundColor: '#8884d8',
                fill: false,
                tension: 0.1,
              },
              {
                label: 'PM10',
                data: mockPM10Data,
                borderColor: '#82ca9d',
                backgroundColor: '#82ca9d',
                fill: false,
                tension: 0.1,
              },
            ],
          }}
        />
      </div>
    );
  }

  if (type === 'co2no') {
    return (
      <div style={{ width: '100%', height: 300 }}>
        <h3>CO2 & NO</h3>
        <Line
          data={{
            labels: mockLabels,
            datasets: [
              {
                label: 'CO2',
                data: mockCO2Data,
                borderColor: '#ff7300',
                backgroundColor: '#ff7300',
                fill: false,
                tension: 0.1,
                yAxisID: 'y',
              },
              {
                label: 'NO',
                data: mockNOData,
                borderColor: '#ff0000',
                backgroundColor: '#ff0000',
                fill: false,
                tension: 0.1,
                yAxisID: 'y1',
              },
            ],
          }}
          options={{
            responsive: true,
            scales: {
              y: {
                type: 'linear',
                min: 390,
                max: 425,
                position: 'left',
                title: {
                  display: true,
                  text: 'CO2 (ppm)',
                },
              },
              y1: {
                type: 'linear',
                min: 0,
                max: 35,
                position: 'right',
                grid: {
                  drawOnChartArea: false,
                },
                title: {
                  display: true,
                  text: 'NO (ppb)',
                },
              },
            },
          }}
        />
      </div>
    );
  }

  if (type === 'aqi') {
    return (
      <div style={{ width: '100%', height: 300 }}>
        <h3>AQI</h3>
        <Bar
          data={{
            labels: mockLabels,
            datasets: [
              {
                label: 'AQI',
                data: mockAQIData,  // Only AQI data
                backgroundColor: mockAQIData.map(value => value < 50 ? 'green' : 'yellow'),
                fill: true,
                borderWidth: 0,
              }
            ],
          }}
        />
      </div>
    );
  }

  return null;
};

export default AirQualityChart;