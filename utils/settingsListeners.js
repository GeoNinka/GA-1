import { topology, population, bestWays, generation } from "../script.js";
import createPopulation from "./createPopulation.js";
import populationSorting from "./populationSorting.js";
import crossing from "./crossing.js";
import { output, clearOutput } from "./output.js";
import getWeight from "./getWeight.js";
import reduction from "./reduction.js";
import drawGraph from "./drawGraph.js";

let repeats = document.getElementById('repeats')
repeats.value = 5

export const onClickStartButton = () => {
    for(let i = 0; i < Number(repeats.value); i++) {
        generation[0] += 1
        console.log(`${generation[0]} поколение обработано.`)
        // В цикле поочерёдно сортируем популяцию, скрещиваем хромосомы, производим
        // редукцию и снова сортируем
        populationSorting()
        crossing()
        reduction()
        populationSorting()
        // Запоминаем результаты каждой популяции для построения графика 
        bestWays.push(getWeight(population[0]))
        output(`Поколение: ${generation[0]} \n`)   
        population.forEach(chromosome => {
            output(`${chromosome}, вес: ${getWeight(chromosome)}`)
        })
        output(`\n`) 
    }
    console.log(bestWays)
    drawGraph()
}

export const onClickGenerateButton = () => {
    // Обнуляем счётчик поколения и лучшие результаты при генерации новой популяции 
    generation[0] = 0
    bestWays.splice(0, bestWays.length)
    const firstNode = parseInt(document.getElementById('firstNode').value)
    const lastNode = parseInt(document.getElementById('lastNode').value)

    createPopulation(firstNode, lastNode, population)
    population.forEach(chromosome => {
        output(chromosome)
    })
}