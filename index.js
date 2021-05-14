// Code your solutions in this file

function writeCards(array) {
    let notes = []
    for (let i = 0; i < array.length; i++) {
        notes.push(`Thank you, ${array[i]}, for the wonderful surprise gift!`)
    }
    return notes
}

function countDown() {
    let i = 10;
    while (i > -1) {
        console.log(i)
        i--
    }
}