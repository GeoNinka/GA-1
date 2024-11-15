import { topology } from "../script.js"

const onChangeInput = (e) => {
    let index = e.currentTarget.dataset.index.split(',')
    let row = index[0]
    let column = index[1]
    topology[row][column] = parseInt(e.currentTarget.value)
    topology[column][row] = parseInt(e.currentTarget.value)
    fillTopology(topology, topology.length, topology.length)
    console.log(topology)
}

const fillTopology = (topology, rows, columns) => {
    const topologyMatrix = document.getElementsByClassName('topology')[0]
    topologyMatrix.className = 'topology'
    topologyMatrix.innerHTML = ''
    
    let columnIndex = document.createElement('div')
    columnIndex.className = 'topology__row'

    let space = document.createElement('p')
    space.innerHTML = ' '
    space.className = 'topology__index'
    columnIndex.appendChild(space)

    for (let column = 0; column < columns; column++) {
        let index = document.createElement('p')
        index.innerHTML = column + 1
        index.className = 'topology__index'
        columnIndex.appendChild(index)
    }
    topologyMatrix.appendChild(columnIndex)

    for (let row = 0; row < rows; row ++) {
        let rowElement = document.createElement('div')
        rowElement.className = 'topology__row'

        let rowIndex = document.createElement('p')
        rowIndex.innerHTML = row + 1
        rowIndex.className = 'topology__index'
        rowElement.appendChild(rowIndex)

        for (let column = 0; column < columns; column ++) {
            let columnElement = document.createElement('input')
            columnElement.className = 'topology__column'
            columnElement.id = `${row} ${column}`
            columnElement.dataset.index = [row, column]
            columnElement.value = topology[row][column]
            columnElement.onchange = onChangeInput

            if(column == row) {
                columnElement.disabled = true
            }

            rowElement.appendChild(columnElement)
        }

        topologyMatrix.appendChild(rowElement)
    } 
}

export default fillTopology