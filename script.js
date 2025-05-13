
document.addEventListener('DOMContentLoaded', () => {
  const gdpCtx = document.getElementById('gdpChart').getContext('2d');
  new Chart(gdpCtx, {
    type: 'line',
    data: {
      labels: ['Mon','Tue','Wed','Thu','Fri'],
      datasets: [{
        label: 'Realm GDP',
        data: [2.3, 2.9, 3.8, 5.2, 5.8],
        borderColor: '#8c52ff',
        backgroundColor: 'rgba(140,82,255,0.2)',
        tension: 0.3
      }]
    }
  });

  const agentCtx = document.getElementById('agentChart').getContext('2d');
  new Chart(agentCtx, {
    type: 'bar',
    data: {
      labels: ['Alpha','Beta','Gamma','Delta'],
      datasets: [{
        label: 'Active Agents',
        data: [120, 160, 130, 210],
        backgroundColor: '#ff4da6'
      }]
    }
  });

  const creditCtx = document.getElementById('creditChart').getContext('2d');
  new Chart(creditCtx, {
    type: 'line',
    data: {
      labels: ['Start','Mid','Now'],
      datasets: [{
        label: 'AIGx Circulation',
        data: [5000000, 8000000, 9800000],
        borderColor: '#77ffcc',
        backgroundColor: 'rgba(119,255,204,0.2)',
        tension: 0.4
      }]
    }
  });
});
