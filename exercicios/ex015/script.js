let num = [5, 8, 9, 9 ]
console.log(num.length)
var contar = num.indexOf(9)
if (contar == -1) {
    console.log('o valor não foi encontrado')
} else {
    console.log(`o valor está na posicão ${contar}`)
}
