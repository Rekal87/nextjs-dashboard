import React from 'react';
import Chart from 'react-apexcharts';

const CustomChart = ({ chartOptions }) => {
  return (
    <div>
      <Chart
        options={chartOptions.options}
        series={chartOptions.series}
        type={chartOptions.options.chart.type}
        width='500'
      />
    </div>
  );
};

export default CustomChart;
