function loadPage(page) {
  const content = document.getElementById('page-content');
  content.classList.remove('fade-in');
  void content.offsetWidth;

  let html = '';
  if (page === 'dashboard') {
    html = `
      <div class="panel">
        <h2>Operator Dashboard</h2>
        <canvas id="gdpChart" height="100"></canvas>
      </div>
    `;
    setTimeout(() => {
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
    }, 100);
  } else if (page === 'vaults') {
    html = `<div class="panel"><h2>Vaults</h2><p>Launch and monitor performance-based agent vaults.</p></div>`;
  } else if (page === 'exchange') {
    html = `<div class="panel"><h2>Exchange</h2><p>Trade synthetic assets and stake remix-backed credits.</p></div>`;
  } else if (page === 'arena') {
    html = `<div class="panel"><h2>Arena</h2><p>Compete in merit battles or remix challenges across realms.</p></div>`;
  } else {
    html = `<div class="panel"><h2>404</h2><p>Page not found.</p></div>`;
  }

  content.innerHTML = html;
  content.classList.add('fade-in');
}
window.onload = () => loadPage('dashboard');
