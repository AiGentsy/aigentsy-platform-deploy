document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("vaultsChart").getContext("2d");
  const chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Vault A", "Vault B", "Vault C"],
      datasets: [{
        label: "Vault Activity",
        data: [300, 500, 200],
        backgroundColor: "#00ffff"
      }]
    },
    options: {
      plugins: { legend: { labels: { color: "#fff" } } },
      scales: {
        x: { ticks: { color: "#ccc" } },
        y: { ticks: { color: "#ccc" } }
      }
    }
  });

  document.getElementById("performanceBtn").addEventListener("click", () => {
    chart.data.datasets[0].data = [300, 500, 200];
    chart.update();
  });

  document.getElementById("remixBtn").addEventListener("click", () => {
    chart.data.datasets[0].data = [150, 350, 450];
    chart.update();
  });
});