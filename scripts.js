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

//objetos
//conserguimos ter uma ou N propriedade e o valor dela
//Para acessar por . , []
const product = {
    name: 'Pablo',
    price: 15.99,
    inStock: true,
    sizes: ['P',  'M', 'G'],
    'Main color' : 'blue0,'
}
console.log(product.name)
console.log(product['name'])
console.log(product['Main color'])

//destructuring - Desestruturar
//Outra forma de acessar as propriedades de um objetos
const {price, inStock} = product
console.log(price)
console.log(inStock)

//Desetruturação de Arrays
const [n1, n2] = list

console.log(n1)
console.log(n2)

//JSON - Javascript Object Notation 
// Temos uma estrutura de dados e ela é utilizada para comunicação com API's

const dog = {
    name: 'Shark',
    age: 10,
}

console.log('Converter um Objeto em JSON: JSON.stringfy')
const json = JSON.stringify(dog)
console.log(json)

console.log('Converter um JSON em Objeto: JSON.parse ')
const obj = JSON.parse(json)
console.log(obj)


//Estruturas condicionais 
const a = 10

if(a > 8){
    console.log("A é maior que 8")
}
const b = 'Matheus'

if(b === 'João'){
    console.log('O nome é João')
}else if (b === 'Pedro') {
    console.log('O nome é Pedro')
}else {
    console.log('Não encontramos o nome do usuário!')
}

const someNumber = 14

//if ternário
//Muito utilizado em layout no React 
let testingANmber = someNumber < 20 ? 'Yes' : 'No'
console.log(testingANmber)

//Estruturas de repetição - Loop
console.log('Estruturas de Repetição:')

console.log('Loop usando while: ')
const myList = [1,2,3,4,5]
let counter = 0

while (counter < myList.length){
    console.log('Inprimindo: ' + myList[counter])
    counter++
}

console.log('Loop usando For')
const mySecondList = ['a','b','c','d','e']
console.log('variável, condição, Incremento')
for (let counter = 0; counter < mySecondList.length; counter++){
    console.log(`Inprimindo: ${mySecondList[counter]}`) //template literals
}

//métodos de array -> repetição
//forEach, map, filter
//forEach conseguimos repetir todos os itens baseado em uma função anônima. Substitui Loops. Então ele entra no lugar do Loop

const names = ["Matheus", "Emerson", "Pablo", "Murilo"]

names.forEach(function (name){
    console.log(`O nome é: ${name}`)
})

//Map: Modificar um dado, passamos em cada um dos itens da lista e modificamos dados da array.
const  modificamosNames = names.map(function (name){
    if(name === 'Pablo') {
        return(name = 'Sr. Pablo')
    }else {
        return name
    }
})
console.log(modificamosNames)

//Filter: vamos criar um filtro para trazer apenas os elementos que queremos.
const bigNumbers = [1,2,3,4,5,10,100].filter(function(number){
    return number >= 5
})

console.log(bigNumbers)

//Reduce: Conseguimos reduzir um array inteiro a um elemento só, ou seja, uma soma.

const sumAll = [10,20,30,40,50].reduce(function(total,number){
    return total + number
})

console.log(sumAll)








