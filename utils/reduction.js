import { population } from "../script.js";
import getWeight from "./getWeight.js";

const reduction = () => {
    let i = 0
    // Удаляем все хромосомы весом больше 50 и обрезаем вторую половину популяции
    // если её длина больше 1000 
    population.forEach(elem => {
        if (getWeight(elem) >= 50) {
            population.splice(i, 1)
        }
        if (population.length > 1000) {
            population.splice(population.length / 2, population.length / 2)
        }
        i += 1
    })
}

export default reduction