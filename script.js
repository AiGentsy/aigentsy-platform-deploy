
function toggleDropdown(id) {
  const dropdown = document.getElementById(`${id}-dropdown`);
  const isVisible = dropdown.style.display === 'block';
  document.querySelectorAll('.dropdown').forEach(el => el.style.display = 'none');
  dropdown.style.display = isVisible ? 'none' : 'block';
}

function activateDashboard() {
  const container = document.getElementById("protocol-area");
  container.innerHTML = `
    <div class="protocol-card"><h3>Realm GDP</h3><canvas id="gdpChart"></canvas></div>
    <div class="protocol-card"><h3>Active Agents</h3><canvas id="agentChart"></canvas></div>
    <div class="protocol-card"><h3>Credit Circulation</h3><p>9.8M AIGx live in economy</p></div>
  `;
  setTimeout(() => {
    const ctx1 = document.getElementById('gdpChart').getContext('2d');
    new Chart(ctx1, {
      type: 'line',
      data: {
        labels: ['Mon','Tue','Wed','Thu','Fri'],
        datasets: [{
          label: 'Realm GDP',
          data: [2.3, 2.9, 3.8, 5.2, 5.8],
          borderColor: '#00ccff',
          backgroundColor: 'rgba(0,204,255,0.2)',
          tension: 0.3
        }]
      }
    });
    const ctx2 = document.getElementById('agentChart').getContext('2d');
    new Chart(ctx2, {
      type: 'bar',
      data: {
        labels: ['A', 'B', 'C', 'D', 'E'],
        datasets: [{
          label: 'Active Agents',
          data: [100, 200, 170, 250, 310],
          backgroundColor: '#00ccff'
        }]
      }
    });
  }, 200);
}

function activateProtocol(type) {
  const container = document.getElementById("protocol-area");
  let html = '';
  if (type === 'vault-performance') {
    html = `<div class="protocol-card"><h3>Performance Vaults</h3><p>Track ROI by cohort.</p><canvas id="vaultChart"></canvas></div>`;
  } else if (type === 'vault-remix') {
    html = `<div class="protocol-card"><h3>Remix Vaults</h3><p>Monitor remix lineage and reward flow.</p></div>`;
  } else if (type === 'aigx-market') {
    html = `<div class="protocol-card"><h3>AIGx Market</h3><p>View exchange activity in real time.</p></div>`;
  } else if (type === 'credit-stake') {
    html = `<div class="protocol-card"><h3>Credit Staking</h3><p>Stake AIGx credits and claim milestone rewards.</p></div>`;
  } else {
    html = `<div class="protocol-card"><h3>Unknown</h3><p>No module found.</p></div>`;
  }

  container.innerHTML = html;
  if (type === 'vault-performance') {
    setTimeout(() => {
      const ctx = document.getElementById("vaultChart").getContext("2d");
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Q1','Q2','Q3','Q4'],
          datasets: [{
            label: 'Vault ROI %',
            data: [14, 21, 17, 23],
            backgroundColor: '#00ccff'
          }]
        }
      });
    }, 200);
  }
}
window.onload = activateDashboard;
