var full = 100

const setProgress = (value, chartClassName) => {
    document.querySelector(chartClassName + ' .progressbar-marker')
        .style.transform = 'rotate(' + (360 * value / full) + 'deg)';
    document.querySelector(chartClassName + ' .progressbar-line')
        .style['stroke-dashoffset'] = 'rotate(' + (304.777 * (1 - value / full)) + 'px';
    document.querySelector(chartClassName + ' .progressbar-text')
        .innerHTML = value+'%';
        document.querySelector(chartClassName + ' .progressbar-line').style.strokeDashoffset = (304.777 * (1 - value / full))+'px'
}

setProgress(25, '.progress-one')
setProgress(50, '.progress-two')
setProgress(75, '.progress-three')
