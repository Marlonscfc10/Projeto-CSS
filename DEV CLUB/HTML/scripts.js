
/* 
variaveis (um espaço que você reserva e pode guardar o que quiser lá dentro)

3 jeitos de criar uma variavel

- var / jeito asntigo - NÃO USE
- let -> você pode alterar o valor depois
- const  -> constante

usar const para evitar erro 

*/
 

/* 

Funções (function)
um trecho de codigo que, só é executado quando é chamado

Const abacate = "oi, eu sou um abacate"
const pera = "eu, sou uma pera"
const conta = 30 + 20

console.log(abacate)
console.log(pera)
console.log(conta)
 
funciton soma = 
soma (para chamar a fnção)

*/


const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-form")

function mostrarform(){
form.style.left = "50%"
form.style.transform = "translatex(-50%)"
mascara.style.visibility = "visible"
}

function esconderform(){
form.style.left = "-300px"
form.style.transform = "translatex(0)"
mascara.style.visibility = "hidden"
}

