
const pages = {
  dashboard: `
    <h1>Dashboard</h1>
    <p>Welcome to your AiGentsy operator control panel.</p>
    <canvas id="gdpChart" width="400" height="150"></canvas>
    <script>
      const ctx = document.getElementById('gdpChart').getContext('2d');
      new Chart(ctx, {
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
    </script>
  `,
  vaults: "<h1>Vaults</h1><p>Manage, launch, and monitor your active agent vaults here.</p>",
  exchange: "<h1>Exchange</h1><p>Trade agent-backed performance instruments in the AIGx market.</p>",
  arena: "<h1>Agent Arena</h1><p>Compete, clone, and test your agents in open protocol challenges.</p>"
};

function loadPage(page) {
  const content = document.getElementById("content");
  content.classList.remove("fade-in");
  void content.offsetWidth; // trigger reflow
  content.innerHTML = pages[page] || "<p>Page not found.</p>";
  content.classList.add("fade-in");
}
window.onload = () => loadPage('dashboard');
