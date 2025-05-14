
document.addEventListener("DOMContentLoaded", function() {
    const ctx = document.getElementById("growthChart").getContext("2d");
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Y1', 'Y2', 'Y3'],
            datasets: [
                {
                    label: 'Revenue',
                    data: [2000, 4500, 8000],
                    borderColor: '#38bdf8',
                    tension: 0.4
                },
                {
                    label: 'Agents',
                    data: [1000, 3000, 6000],
                    borderColor: '#a78bfa',
                    tension: 0.4
                },
                {
                    label: 'Vaults',
                    data: [500, 2000, 4000],
                    borderColor: '#5eead4',
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        color: 'white'
                    }
                }
            },
            scales: {
                x: { ticks: { color: 'white' } },
                y: { ticks: { color: 'white' } }
            }
        }
    });
});
