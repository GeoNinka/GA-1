import { topology, population } from "../script.js";
import getWeight from "./getWeight.js";

const populationSorting = () => {
    population.sort((a, b) => getWeight(a) - getWeight(b))
}

export default populationSorting