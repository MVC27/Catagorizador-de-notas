function classificaNotas (a) {
  let conceito = []
 
for(i=0; i<a.length; i++) {
    if(a[i] <5) conceito.push('D')
        else if(a[i] <= 7) conceito.push('C')
        else if(a[i] < 9) conceito.push('B')
        else conceito.push('A')
    }
return conceito
}

// Suas notas
let a = [10,9,5,4,6,5,3]
console.log("Suas notas: " + a)

// Descontando o menor valor
let minimo = Math.min(...a)
console.log(`Menor nota a ser retirada: ${minimo}`)

// Retirando a menor nota do array
a.splice(a.indexOf(minimo), 1)
console.log("Suas notas para conceito: "+ a)

let conceitoFinal = classificaNotas(a)
console.log("Seus conceitos: " + conceitoFinal)




