import { bestWays } from "../script.js";


// Для отрисовки графика используется библиотека chart.js 
function drawGraph () {
    // Формирование массива индексов
    const length = Array.from({ length: bestWays.length }, (_, index) => index + 1)
    
    const ctx = document.getElementById('canvas')
    
    // Если график уже нарисован то уничтожаем его
    let chart = Chart.getChart('canvas')

    if (chart) {
        chart.destroy()
    }

    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: length,
            datasets: [{
                label: 'Популяции',
                data: bestWays,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        }
    })
}

export default drawGraph