import { output, clearOutput } from "./output.js"

const createPopulation = (from, to, population) => {
    from -= 1
    to -= 1
    // Обнуление популяции
    population.splice(0, population.length)
    let pathPool = [0,1,2,3,4,5,6,7,8,9]
    // Удаление начальной и конечной точки из пула вершин
    pathPool = pathPool.filter(item => item !== from)
    pathPool = pathPool.filter(item => item !== to)
    // Перемешивание пула вершин
    pathPool.sort(() => Math.random() - 0.5)


    // Рекурсивная функция для перебора всех возможных сочетаний из pathhPool
    function backtrack(currentPermutation, remainingElements) {
        if (remainingElements.length === 0) {
            // В процессе разработки понял что такой метод генерации начальной популяции приводит к 
            // быстрому вырождению, поэтому просто начал перемешивать полученные пути
            currentPermutation.sort(() => Math.random() - 0.5)

            //Добавляем в популяцию начальную и конечную вершину и полученный путь
            currentPermutation.push(to)
            currentPermutation.unshift(from)
            population.push(currentPermutation);
            return;
        }

        // Задаём количество хромосом в начальной популяции
        if (population.length < 10) {
            for (let i = 0; i < remainingElements.length; i++) {
                const nextElement = remainingElements[i];
                const newRemaining = remainingElements.slice(0, i).concat(remainingElements.slice(i + 1));
                backtrack(currentPermutation.concat(nextElement), newRemaining)
            }
        }
    }
    backtrack([], pathPool)
    clearOutput()
    return population
}

export default createPopulation