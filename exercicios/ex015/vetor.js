let valores = [9, 7, 8, 2, 3, 5]
valores.sort()
/*
for(let pos = 0 ; pos < valores.length ; pos++) {
    console.log (`A posição ${pos} é referente ao numero:${valores[pos]}`)
}*/
for (let pos in valores) {
    console.log(`Essa chave ${pos} é a referente ao numero:${valores[pos]}`)
}