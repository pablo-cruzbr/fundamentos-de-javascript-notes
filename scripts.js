console.log("Hello Word JavaScript")

//console
//Usamos console para depurar nosso codigo ou para enviar algum aviso
//menssagens, avisos, erros e ira ser impressão na aba console do navegador

console.error("Este é um erro!")
console.warn("Este é um aviso")
console.log('Está é uma mensagens')
// Podemos escrever string com aspas duplas ou unicas

//Variáveis 
// Forma de guardar algum valor na memória para o uso do nosso software.

var x = 10
//Maneiras mais modernas introduzidas em ES6
let y = 15
const z = 20

if(1) {
    let y = 55
    console.log(y)
}
//Não podemos redeclarar uma variável menos que ela esteja no mesmo escopo.
console.log(x)
console.log(y)
console.log(z)


// tipos de dados
// Typeof Explica o  tipo de dado (boolean, string, null, objeto
const name = 'Pablo'
console.log(name)
console.log(typeof name)

const shirtsQty = 4
console.log(shirtsQty)
console.log(typeof shirtsQty)

const decimal = 12.4
console.log(decimal)
console.log(typeof decimal)

const isApproved = false //Verdadeiro ou Falso
console.log(isApproved)
console.log(typeof isApproved)

let surname = null
console.log(surname)
console.log(typeof surname)

surname = "Pablo"
console.log( typeof surname)

let age
console.log(age)
console.log(typeof age)

age = 30
console.log(age)
console.log(typeof age)

const languages = ['JavaScript', 'PHP', 'Python']
console.log(languages)
console.log(typeof languages)

const user = {idade: '20',email: "pablocruz@gmail.com", password: 'teste123123'} //Objeto
console.log(user)
console.log(typeof user)

//métodos de string
//Métodos de manipulação de string
const fullName = "Pablo Cruz"
console.log(fullName.length)

const stringToArray = fullName.split('')
console.log(stringToArray)

console.log(fullName.toLocaleLowerCase())
console.log(fullName.toLocaleUpperCase())

console.log(fullName.indexOf('Pablo'))

console.log(fullName.slice(0, 6))

//Métodos de Mnipulação de Arrays

const list = ['a', 'b', 'c', 'd', 'e'] //Começam sempre do 0

console.log(list.length)

console.log(list[3])
//Adicionar valores a minha list
list[5] = 'f'
console.log(list)
//Retirar valores da minha lista
console.log(list[list.length -1])

//Adicionar um elemento ao final
list.push('g')

//Remover um elemento do final da minha lista
list.pop
console.log(list)

//Adicionar um elemento ao inicio
list.unshift('a')
console.log(list)