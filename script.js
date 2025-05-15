document.addEventListener("DOMContentLoaded", function() {
  const ctx1 = document.getElementById("dashboardChart").getContext("2d");
  new Chart(ctx1, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar"],
      datasets: [{
        label: "Growth",
        data: [100, 300, 600],
        borderColor: "#00ffff",
        fill: false
      }]
    }
  });

  const ctx2 = document.getElementById("vaultsChart").getContext("2d");
  const vaultChart = new Chart(ctx2, {
    type: "bar",
    data: {
      labels: ["Vault A", "Vault B", "Vault C"],
      datasets: [{
        label: "Value",
        data: [200, 150, 400],
        backgroundColor: "#00ffff"
      }]
    }
  });

  document.getElementById("performanceBtn").onclick = () => {
    vaultChart.data.datasets[0].data = [200, 150, 400];
    vaultChart.update();
  };

  document.getElementById("remixBtn").onclick = () => {
    vaultChart.data.datasets[0].data = [300, 500, 250];
    vaultChart.update();
  };
});
