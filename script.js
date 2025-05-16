document.addEventListener("DOMContentLoaded", function () {
  // Dynamic metric data
  const metrics = {
    revenue: "$8B+ Annual Revenue",
    agents: "100M+ Active Agents",
    vaults: "10M+ Agent Vaults",
    monetization: "Monetization: Lending, Premium, Insurance",
    transactions: "20B Transactions",
    sentinel: "90% Sentinel Adoption"
  };

  for (const key in metrics) {
    document.getElementById(key).innerText = metrics[key];
  }

  const ctx = document.getElementById("forecastChart").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Year 1", "Year 2", "Year 3", "Year 4"],
      datasets: [{
        label: "Revenue Forecast",
        data: [200, 400, 800, 1600],
        borderColor: "#00ffff",
        backgroundColor: "rgba(0,255,255,0.1)",
        fill: true,
        tension: 0.4
      }]
    },
    options: {
      plugins: {
        legend: {
          labels: {
            color: "#fff"
          }
        }
      },
      scales: {
        x: {
          ticks: { color: "#ccc" }
        },
        y: {
          ticks: { color: "#ccc" }
        }
      }
    }
  });
});
