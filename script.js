
document.addEventListener("DOMContentLoaded", function() {
    const ctx = document.getElementById('tokenomicsChart').getContext('2d');
    const data = {
        labels: ['Community', 'Treasury', 'Staking', 'Private', 'Team', 'Liquidity', 'Advisors', 'Marketing'],
        datasets: [{
            data: [30, 20, 15, 10, 10, 7, 5, 3],
            backgroundColor: [
                '#39FF14', '#9D00FF', '#FF007F', '#00FFFF', 
                '#FF9900', '#3366FF', '#008000', '#FF4500'
            ],
            borderWidth: 0,
            hoverOffset: 4
        }]
    };

    const config = {
        type: 'doughnut',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '82%',
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: 'rgba(3, 5, 4, 0.95)',
                    titleColor: '#39FF14',
                    bodyColor: '#fff',
                    borderColor: '#39FF14',
                    borderWidth: 1,
                    callbacks: {
                        label: function(context) {
                            return ' ' + context.label + ': ' + context.raw + '%';
                        }
                    }
                }
            }
        }
    };

    new Chart(ctx, config);
});
