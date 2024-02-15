const perguntas = [
    {
        pergunta: "O que é JavaScript?",
        respostas: [
            "Uma linguagem de programação para o lado do servidor",
            "Uma linguagem de programação para o lado do cliente",
            "Uma linguagem de marcação para criar páginas web"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a maneira correta de se referir a um arquivo JavaScript externo chamado 'script.js'?",
        respostas: [
            "<script src='script.js'></script>",
            "<script href='script.js'></script>",
            "<script link='script.js'></script>"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função do método 'getElementById' em JavaScript?",
        respostas: [
            "Alterar o estilo de um elemento HTML",
            "Selecionar um elemento HTML por sua classe",
            "Selecionar um elemento HTML por seu ID"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a sintaxe correta para adicionar um comentário em JavaScript?",
        respostas: [
            "// Este é um comentário",
            "/* Este é um comentário */",
            "<!-- Este é um comentário -->"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
        respostas: [
            "==",
            "===",
            "!="
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função do método 'addEventListener' em JavaScript?",
        respostas: [
            "Modificar o HTML de uma página",
            "Adicionar um evento a um elemento HTML",
            "Selecionar um elemento HTML"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função do método 'parseInt' em JavaScript?",
        respostas: [
            "Converter uma string em um número inteiro",
            "Arredondar um número para o número inteiro mais próximo",
            "Converter um número em uma string"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a maneira correta de escrever uma função anônima em JavaScript?",
        respostas: [
            "function myFunction() {}",
            "() => {}",
            "var myFunction = function() {}"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função do método 'splice' em JavaScript?",
        respostas: [
            "Remover elementos de um array e/ou adicionar novos elementos",
            "Concatenar dois arrays",
            "Inverter a ordem dos elementos em um array"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o método que permite a concatenação de strings em JavaScript?",
        respostas: [
            "concat()",
            "join()",
            "append()"
        ],
        correta: 0
    }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

//objeto específico (conjunto) - não há repetição de informação
const corretas = new Set()
const totaldeDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totaldeDePerguntas

//loop ou laço de repetição
for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        //evento de mudar o input
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta //true
            
            corretas.delete(item)
            if(estaCorreta){
                corretas.add(item)                                
            }
            
            mostrarTotal.textContent = corretas.size + ' de ' + totaldeDePerguntas
        }

        quizItem.querySelector('dl').appendChild(dt)
    }

    //remover elemento resposta A que consta no HTML
    quizItem.querySelector('dl dt').remove()

    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
}