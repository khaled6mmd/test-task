const ctx = document.getElementById('HomeworkChart').getContext('2d');

// chartsjs

const HomeworkChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['19/5', '18/4', '17/6', '20/7', '22/7', '30/8', '30/8', '30/8', '30/8', '30/8', '30/8', '30/8', '30/8', '30/8', '30/8', '30/8', '30/8'],
        datasets: [{
            label: 'Average',
            data: [60, 63, 57, 58, 56, 52, 47, 57, 62, 57, 61, 48, 50, 55, 47, 57, 47],
            backgroundColor: [
                'rgb(229, 240, 247)'
            ],
            borderColor: [
                'rgb(5, 117, 182)'
            ],
            borderWidth: 1,
            borderSkipped: false,
            borderRadius: 100,
            barPercentage: 0.7,

        },
        {
            label: 'Adam',
            data: [65, 55, 47, 52, 50, 57, 52, 60, 58, 55, 56, 53, 49, 55, 58, 64, 51],
            backgroundColor: [
                'rgb(229, 229, 229)'
            ],
            borderColor: [
                'rgb(51, 51, 51)',

            ],
            borderWidth: 1,
            borderSkipped: false,
            borderRadius: 100,
            barPercentage: 0.7,
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                grid: {
                    borderDash: [6, 6],
                    drawBorder: false
                },
                ticks: {
                    max: this.max,
                    callback: function (value) {
                        return value + '%';
                    },
                }
            },
            x: {
                grid: {
                    display: false,
                    drawBorder: false
                }
            }
        }
    }
});

// toggle datasets of chart bars

const toggleDataSets = (value) => {
    console.log(HomeworkChart.isDatasetVisible(value));
    const isDatasetVisible = HomeworkChart.isDatasetVisible(value)
    if (isDatasetVisible) {
        HomeworkChart.hide(value);
        document.querySelector('.homework-info').children[value].classList.add('homework-info-legend-off')
        console.log();
    } else {
        HomeworkChart.show(value);
        document.querySelector('.homework-info').children[value].classList.remove('homework-info-legend-off')
    }
}

// Pie charts

const setProgress = (value, chartClassName) => {
    document.querySelector(chartClassName + ' .progressbar-marker')
        .style.transform = 'rotate(' + (360 * value / 100) + 'deg)';
    document.querySelector(chartClassName + ' .progressbar-line')
        .style['stroke-dashoffset'] = 'rotate(' + (304.777 * (1 - value / 100)) + 'px';
    document.querySelector(chartClassName + ' .progressbar-text')
        .innerHTML = value + '%';
    document.querySelector(chartClassName + ' .progressbar-line').style.strokeDashoffset = (304.777 * (1 - value / 100)) + 'px'
}

setProgress(25, '.progress-one')
setProgress(50, '.progress-two')
setProgress(75, '.progress-three')


