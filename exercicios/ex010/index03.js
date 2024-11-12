var dia = new Date()
var hoje = dia.getDay()
/*
 0 = domingo
 1 = segunda
 2 = terça
 3 = quarta
 4 = quinta
 5 = sexta
 6 = sabádo
*/
console.log(hoje)
switch(hoje) {
case 0:
     console.log('domingo')
break
case 1:
    console.log('segunda')
    break
case 2:
    console.log('terça')
    break
case 3:
    console.log('quarta')
    break
case 4:
    console.log('quinta')
    break
case 5:
    console.log('sexta')
    break
case 6:
    console.log('sabádo')
    break
default:
    console.log('ERRO NUMERO INVALIDO')
    break
}