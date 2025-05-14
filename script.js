
document.addEventListener("DOMContentLoaded", function() {
    const ctx1 = document.getElementById("chart1").getContext("2d");
    const ctx2 = document.getElementById("chart2").getContext("2d");
    new Chart(ctx1, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr'],
            datasets: [{
                label: 'Revenue',
                data: [1000, 2000, 3000, 4000],
                borderColor: '#ff00ff'
            }]
        }
    });
    new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['Agents', 'Vaults', 'Remixes'],
            datasets: [{
                label: 'Counts',
                data: [500, 800, 1200],
                backgroundColor: '#00ffaa'
            }]
        }
    });
});
