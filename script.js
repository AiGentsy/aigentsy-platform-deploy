
function toggleDropdown(id) {
  const el = document.getElementById(id + '-dropdown');
  el.style.display = el.style.display === 'block' ? 'none' : 'block';
}

function loadSection(section) {
  const el = document.getElementById('protocol-area');
  let colorMap = {
    'yield-vaults': '#8c52ff',
    'reputation-vaults': '#ff4da6',
    'aigx-market': '#77ffcc',
    'synthetic-indexes': '#00ccff',
    'dashboard': '#8c52ff',
    'clone-trees': '#ff4da6',
    'challenge-bounties': '#77ffcc',
    'rank-ladder': '#00ccff'
  };
  const color = colorMap[section] || '#00ccff';

  el.innerHTML = '<canvas id="protoChart"></canvas>';
  setTimeout(() => {
    const ctx = document.getElementById('protoChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Mon','Tue','Wed','Thu','Fri'],
        datasets: [{
          label: section.replace('-', ' ').toUpperCase(),
          data: [2.3, 2.8, 3.5, 4.9, 5.5],
          borderColor: color,
          backgroundColor: color + '33',
          tension: 0.4
        }]
      }
    });
  }, 200);
}
