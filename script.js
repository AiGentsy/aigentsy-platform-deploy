
document.addEventListener('DOMContentLoaded', () => {
  const ctx1 = document.getElementById('gdpChart').getContext('2d');
  const ctx2 = document.getElementById('agentChart').getContext('2d');
  const ctx3 = document.getElementById('marketChart').getContext('2d');

  new Chart(ctx1, {
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

  new Chart(ctx2, {
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

  new Chart(ctx3, {
    type: 'line',
    data: {
      labels: ['Open','Mid','Close'],
      datasets: [{
        label: 'Market Index',
        data: [100, 125, 118],
        borderColor: '#77ffcc',
        backgroundColor: 'rgba(119,255,204,0.2)',
        tension: 0.4
      }]
    }
  });
});
