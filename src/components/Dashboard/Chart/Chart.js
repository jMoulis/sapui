import React, { useRef, useEffect } from 'react';
import ChartJS from 'chart.js';
import styled from '@emotion/styled';
import { FlexBox } from 'components/commons/FlexBox';

const setUpChart = (ctx, type) => {
  return new ChartJS(ctx, {
    type: type || 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [
        {
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  });
};
const Canvas = styled.canvas`
  padding: 1rem;
`;

const Chart = ({ id, type }) => {
  const chartRef = useRef(null);
  useEffect(() => {
    const ctx = chartRef.current;
    setUpChart(ctx, type);
  }, []);
  return <Canvas ref={chartRef} id={id} width="200" height="200" />;
};

export default Chart;
