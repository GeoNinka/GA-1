const textArea = document.getElementById('textfield')

export const output = (text) => {
    textArea.value += text + '\n'
}

export const clearOutput = () => {
    textArea.value = ''
}

