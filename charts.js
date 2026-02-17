const ctx1 = document.getElementById('chart1');

new Chart(ctx1, {
  type: 'bar',
  data: {
    labels: ['Grade 10', 'Grade 9', 'Grade 8', 'Grade 7'],
    datasets: [{
      label: 'participants',
      data: [10, 20, 30, 15],
      backgroundColor: ['blue', 'red', 'yellow', 'green']
   }]
  },
  options: {
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: false,
        text: 'Participants by Grade'
      }
    }
  }
});

const ctx2 = document.getElementById('chart2');

new Chart(ctx2, {
  type: 'pie',
  data: {
    labels: ['Red', 'Blue', 'Green'],
    datasets: [{
      data: [5, 15, 10]
    }]
  }
});