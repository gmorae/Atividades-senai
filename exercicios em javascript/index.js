// exercicio 1
var roupa = parseInt(prompt("Digite a quantidade de roupas compradas"))
var dinheiro = parseFloat(prompt("Digite o total de gastos: "))
var total = dinheiro / roupa
document.write("A média de gasto por cada roupa é de: " + total + " reais ")

// exercicio 2
var valor = parseFloat(prompt("Digite o valor: "))
var desconto = 0.1
var descontoValor = valor * desconto
var total = valor - descontoValor
document.write("Neste produto você recebeu " + descontoValor + " reais de desconto e o produto saiu por: " + total)

// exercicio 3
var combo = parseFloat(prompt("Digite o valor do combo: "))
var quant = parseInt(prompt("Digite a quantidade do pedido: "))
var total = combo * quant
document.write("O total que o deve ser pago pelo cliente é: " + total)

// exercicio 4
var v1 = parseFloat(prompt("Digite o valor da v1: "))
var v2 = parseFloat(prompt("Digite o valor da v2: "))
var v3 = parseFloat(prompt("Digite o valor da v3: "))
var media = (v1 + v2 + v3) / 3
document.write("A média aritimetica que o aluno obteve foi de: " + media)

// exercicio 5
var compra = parseFloat(prompt("Digite o valor da compra: "))
if (compra > 2000) {
    var desconto = 0.15
    var valorDesconto = compra * desconto
    var total = compra - valorDesconto
    document.write("O valor da sua compra com 15% de desconto é de: " + total)
} else {
    var falta = 2000 - compra
    if (falta == 1) {
        document.write("Sua compra é de " + compra + " reais e não alcançou o desconto, para o desconto falta " + falta + " real")
    } else {
        document.write("Sua compra é de " + compra + " reais e não alcançou o desconto, para o desconto falta " + falta + " reais")
    }
}

// exercicio 6
var idade = parseInt(prompt("Digite a sua idade: "))
var total = idade * 12
document.write("O total de meses que você viveu é: " + total + "meses")

// execicio 7
var idade = parseInt(prompt("Digite a sua idade: "))
var dias = idade * 365
document.write("O total de meses que você viveu é: " + dias + "meses")

// exercicio 8
var sexo = prompt("Digite o seu sexo: ")
if (sexo != "feminino") {
    document.write("Na campanha novembro azul você fará seus exames com maior facilidade")
} else {
    document.write("Fça o preventivo com maior facilidade")
}

// exercicio 9
var nome = prompt("Digite seu nome: ")
var idade = parseInt(prompt("Digite sua idade: "))
if (idade != 10) {
    document.write(nome + ", você não esta apto para participar do time")
} else {
    document.write(nome + ", você está apto para participar do time")
}

// exercicio 10
var sabor = prompt("Qual valor você gostaria de comer: ")
if (sabor != "baunilha") {
    document.write("Desculpe, com o sorvete de " + sabor + " não tem desconto")
} else {
    document.write("Parabéns, você escolheu o sabor de " + sabor + " e ganhou 20% de desconto")
}