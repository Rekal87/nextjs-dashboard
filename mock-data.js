export const dataset1 = {
  options: {
    chart: {
      id: 'basic-bar',
      type: 'bar',
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  },
  series: [
    {
      name: 'series-1',
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ],
};

export const dataset2 = {
  options: {
    chart: {
      id: 'basic-bar',
      type: 'line',
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  },
  series: [
    {
      name: 'series-1',
      data: [150, 25, 185, 200, 75, 60, 70, 190],
    },
  ],
};
