import fillTopology from './utils/fillTopology.js'
import createPopulation from './utils/createPopulation.js'
import { onClickStartButton, onClickGenerateButton } from './utils/settingsListeners.js'

let rows = 10
let columns = 10

document.getElementById('firstNode').value = 1
document.getElementById('lastNode').value = 10

// Начальная топология
export let topology = [
    [0, 3, 7, 2, 1000, 4, 10, 10, 2, 2],
    [3, 0, 1, 9, 7, 3, 10, 9, 7, 7],
    [7, 1, 0, 2, 6, 7, 1, 3, 2, 6],
    [2, 9, 2, 0, 10, 1, 8, 2, 4, 8],
    [1000, 7, 6, 10, 0, 2, 6, 2, 7, 10],
    [4, 3, 7, 1, 2, 0, 1000, 10, 3, 5],
    [10, 10, 1, 8, 6, 1000, 0, 9, 5, 4],
    [10, 9, 3, 2, 2, 10, 9, 0, 8, 8],
    [2, 7, 2, 4, 7, 3, 5, 8, 0, 1],
    [2, 7, 6, 8, 10, 5, 4, 8, 1, 0]
]
// Популяция
export let population = []
// Счётчик поколений
export let generation = [0]
// Массив для лучших найденных путей в каждом поколении
export let bestWays = []

fillTopology(topology, rows, columns)

let startButton = document.getElementById('startButton')
let generateButton = document.getElementById('generateButton')
startButton.addEventListener('click', onClickStartButton)
generateButton.addEventListener('click', onClickGenerateButton)