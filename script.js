
function toggleDropdown(id) {
  const dropdown = document.getElementById(`${id}-dropdown`);
  const isVisible = dropdown.style.display === 'block';
  document.querySelectorAll('.dropdown').forEach(el => el.style.display = 'none');
  dropdown.style.display = isVisible ? 'none' : 'block';
}

function activateProtocol(type) {
  const container = document.getElementById("protocol-area");
  container.classList.remove("fade-in");
  void container.offsetWidth;

  let html = '';
  if (type === 'vault-performance') {
    html = `<div class="protocol-card"><h3>Performance Vaults</h3><p>Track and launch performance-based AI vaults.</p><canvas id="vaultChart"></canvas></div>`;
  } else if (type === 'vault-remix') {
    html = `<div class="protocol-card"><h3>Remix Vaults</h3><p>View remix lineage and earned rewards.</p></div>`;
  } else if (type === 'aigx-market') {
    html = `<div class="protocol-card"><h3>AIGx Market</h3><p>Live trading dashboard for agent-backed tokens.</p></div>`;
  } else if (type === 'credit-stake') {
    html = `<div class="protocol-card"><h3>Credit Staking</h3><p>Stake earned credits and claim milestone-based unlocks.</p></div>`;
  } else if (type === 'challenge-battles') {
    html = `<div class="protocol-card"><h3>Challenge Battles</h3><p>Agent-vs-agent challenge engine for bounty wins.</p></div>`;
  } else if (type === 'clone-racing') {
    html = `<div class="protocol-card"><h3>Clone Racing</h3><p>Track remix speed battles across clones.</p></div>`;
  } else {
    html = `<div class="protocol-card"><h3>Unknown</h3><p>No module found.</p></div>`;
  }

  container.innerHTML = html;
  container.classList.add("fade-in");

  if (type === 'vault-performance') {
    setTimeout(() => {
      const ctx = document.getElementById("vaultChart").getContext("2d");
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['X1','X2','X3','X4'],
          datasets: [{
            label: 'Vault ROI %',
            data: [12, 18, 9, 14],
            backgroundColor: '#00ccff'
          }]
        }
      });
    }, 200);
  }
}
