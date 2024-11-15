import { topology } from "../script.js"

const getWeight = (chromosome) => {
    let weight = 0
    // Проходим по генам хромосомы и прибавляем значения из матрицы к результату
    for (let i = 0; i < chromosome.length - 1; i++) {
        weight += topology[chromosome[i]][chromosome[i+1]]
    }

    return weight
}

export default getWeight    