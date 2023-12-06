const listaFrutas = ['mamão', 'banana', 'laranja', 'tomate']
const FrutaProcurada = 'tomate'
const listaNumeros = [7, 15, 30, 40]
const numeroProcurado = 7

function procuraValorEmArray (array, valorProcurado){

    let valorEncontrado = false  //CRIA VARIÁVEL QUE GUARDA SE ENCONTROU O VALOR

    for(let i = 0; i < array.length; i++){

        if(array[i] === valorProcurado){

            valorEncontrado = true
            break

        }  //PERCORRE TODO ARRAY PROCURANDO O VALOR E ALTERA VARIÁVEL (OU NÃO) CASO ENCONTRE UMA CORRESPONDÊNCIA
    }
if(valorEncontrado){
    console.log('Elemento Encontrado')
    

}else{
    console.log('Elemento Não Encontrado!')
}     //RETORNA UM CONSOLE.LOG CASO O VALOR TENHA SIDO ENCONTRADO E OUTRO CONSOLE.LOG CASO NÃO TENHA SIDO ENCONTRADO 
}
procuraValorEmArray(listaFrutas, FrutaProcurada)
procuraValorEmArray(listaNumeros, numeroProcurado)
procuraValorEmArray(['mamão', 'banana', 'laranja', 'tomate'], 'mexerica')
