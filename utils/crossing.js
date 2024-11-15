import { population } from "../script.js";
import { output, clearOutput } from "./output.js";
import mutation from "./mutation.js";
import getWeight from "./getWeight.js";

let mutationCheckbox = document.getElementById('isMutationActive')


const crossing = () => {
    let crossingType = document.getElementById('crossingSelect').value
    let limit = 0

    // Определение какие хромосомы будут использоваться для скрещиванния
    if (crossingType == 1) {
        limit = population.length
    } else {
        limit = Math.floor(population.length / 2) 
    }

    // Копируем и перемешиваем выбранные хромосомы, после чего скрещиваем  
    let populationClone = [...population]
    populationClone = populationClone.slice(0, limit).sort(() => Math.random() - 0.5)
    while (populationClone.length > 0) {
        shuffle(populationClone.pop(), populationClone.pop())
    }
}

const shuffle = (first, second) => {
    try {
        // Случайный индекс по которой происходит скрещивание
        let separator = Math.floor(Math.random() * 10)
        let firstCross = [...first]
        let secondCross = [...second]
    
        // Скрещивание
        for (let i = 0; i < separator; i++) {
            firstCross[i] = first[i]
            secondCross[i] = second[i]
        }
    
        for (let i = separator; i < first.length; i++) {
            firstCross[i] = second[i]
            secondCross[i] = first[i]
        }

        // Мутация
        if(mutationCheckbox.checked) {
            if(Math.random() > 0.7) {
                mutation(firstCross)
            }
            if(Math.random() > 0.7) {
                mutation(secondCross)
            }
        }
        
        // Проверяем налицие хромосомы в популяции и записываем туда новые элементы
        if (population.indexOf(firstCross)) {
            population.push(firstCross)
        }
        if (population.indexOf(secondCross)) {
            population.push(secondCross)
        }
    } catch (e) {
        // console.log(e)
    }
}

export default crossing