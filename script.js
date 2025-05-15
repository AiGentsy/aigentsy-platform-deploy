document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("forecastChart").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Year 1", "Year 2", "Year 3"],
      datasets: [{
        label: "Revenue Forecast",
        data: [200, 600, 1200],
        borderColor: "#00ffff",
        backgroundColor: "rgba(0,255,255,0.2)",
        fill: true,
        tension: 0.4
      }]
    },
    options: {
      plugins: {
        legend: { labels: { color: "#fff" } }
      },
      scales: {
        x: { ticks: { color: "#ccc" } },
        y: { ticks: { color: "#ccc" } }
      }
    }
  });
});