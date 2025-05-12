
document.addEventListener('DOMContentLoaded', () => {
  const ctxGDP = document.getElementById('gdpChart').getContext('2d');
  const ctxAgents = document.getElementById('agentChart').getContext('2d');

  new Chart(ctxGDP, {
    type: 'line',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      datasets: [{
        label: 'Realm GDP',
        data: [2.3, 2.9, 3.8, 5.2, 5.8],
        borderColor: '#00ccff',
        backgroundColor: 'rgba(0,204,255,0.2)',
        tension: 0.3
      }]
    }
  });

  new Chart(ctxAgents, {
    type: 'bar',
    data: {
      labels: ['A', 'B', 'C', 'D', 'E'],
      datasets: [{
        label: 'Active Agents',
        data: [100, 300, 250, 400, 220],
        backgroundColor: '#00ccff'
      }]
    },
    options: { indexAxis: 'y' }
  });
});
