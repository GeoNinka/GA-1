import { generation } from "../script.js"

let mutationType = document.getElementById('mutationSelect')

const textAreaMutation = document.getElementById('textfieldMutation')

const mutation = (chromosome) => {
    // Выбираем индекс случайного гена и производим его мутацию
    let geneIndex = Number(Math.floor(Math.random() * (9 - 1)) + 1)
    switch(Number(mutationType.value)){
        case(0):
            inversion(chromosome, geneIndex)
            break
        case(1):
            changeToRandom(chromosome, geneIndex)
            break
        case(2):
            changeToNeighbor(chromosome, geneIndex)
            break
        case(3):
            randomMutation(chromosome, geneIndex)
            break
    }
}

const inversion = (chromosome, geneIndex) => {
    let outputChromosome = [...chromosome]
    chromosome[geneIndex] = Math.abs(9 - chromosome[geneIndex])
    textAreaMutation.value += `Mutation Inversion ${generation[0]} поколение \n ${outputChromosome} => \n ${chromosome} \n\n` 
}

const changeToRandom = (chromosome, geneIndex) => {
    let outputChromosome = [...chromosome]
    chromosome[geneIndex] = Math.floor(Math.random() * 10)
    textAreaMutation.value += `Mutation Random ${generation[0]} поколение \n ${outputChromosome} => \n ${chromosome} \n\n` 
}

const changeToNeighbor = (chromosome, geneIndex) => {
    let outputChromosome = [...chromosome]
    let idx = Number(Math.floor(Math.random() * (8 - 1)) + 1)
    let buble = chromosome[idx + 1]
    chromosome[idx + 1] = chromosome[idx]
    chromosome[idx] = buble
    textAreaMutation.value += `Mutation Swap ${generation[0]} поколение \n ${outputChromosome} => \n ${chromosome} \n\n` 
}

const randomMutation = (chromosome, geneIndex) => {
    let rnd = Math.floor(Math.random() * 3)
    switch(rnd) {
        case(0):
            inversion(chromosome, geneIndex)
            break
        case(1):
            changeToRandom(chromosome, geneIndex)
            break
        case(2):
            changeToNeighbor(chromosome, geneIndex)
            break
    }
}

export default mutation
