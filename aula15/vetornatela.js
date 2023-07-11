let valores = [8, 1, 7, 6, 4, 2, 9, 3, 5]
valores.sort()
//console.log(vetores)

/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
*/


/* 

Está de baixo é a melhor solução mas tem uma mais simples!!
                ||
               \  /
                \/ 
*/


/*

for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

*/

// Uma maneira mais simples de resolver logo abaixo!


for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} 