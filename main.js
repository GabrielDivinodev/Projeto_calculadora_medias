const FORMULARIO_ADICIONAR = document.querySelector('#formulario-adicionar')
const ATIVIDADES = []
const NOTAS = []
const NOTA_MINIMA = Number(prompt('Digite a nota mínima:'))

let linhas = ''

FORMULARIO_ADICIONAR.addEventListener('submit', function(eventoSubmit){
    eventoSubmit.preventDefault()

    adicionarLinhas()
    atualizaTabela()
    atualizaMediaFinal()
})

function adicionarLinhas(){
    const NOME_ATIVIDADE = document.querySelector('#nome-atividade')
    const NOTA_ATIVIDADE = document.querySelector('#nota-atividade')

    const IMAGEM_APROVADO = '<img src="images/aprovado.png">'
    const IMAGEM_REPROVADO = '<img src="images/reprovado.png">'

    if(ATIVIDADES.includes(NOME_ATIVIDADE.value)){
        alert('Essa atividade já foi registrada!')
    }
    else{
        ATIVIDADES.push(NOME_ATIVIDADE.value)
        NOTAS.push(Number(NOTA_ATIVIDADE.value))

        let novaLinha = '<tr>'
        novaLinha += `<td class = "valor-nome-atividade">${NOME_ATIVIDADE.value}</td>`
        novaLinha += `<td>${NOTA_ATIVIDADE.value}</td>`
        novaLinha += `<td>${NOTA_ATIVIDADE.value >= NOTA_MINIMA ? `${IMAGEM_APROVADO}` : `${IMAGEM_REPROVADO}`}</td>`
        novaLinha += '</tr>'

        linhas += novaLinha
    }

    NOME_ATIVIDADE.value = ''
    NOTA_ATIVIDADE.value = ''

}

function atualizaTabela(){
    const CORPO_TABELA = document.querySelector('tbody')
    CORPO_TABELA.innerHTML = linhas
}

function atualizaMediaFinal(){
    const MEDIA_FINAL = calculaMediaFinal().toFixed(1)
    const MSG_APROVADO = '<td><p class = "resultado aprovado">Aprovado</p></td>'
    const MSG_REPROVADO = '<td><p class = "resultado reprovado">Reprovado</p></td>'
    
    document.querySelector('.totalMedia').innerHTML = MEDIA_FINAL
    document.querySelector('.resultado').innerHTML = MEDIA_FINAL >= NOTA_MINIMA ? MSG_APROVADO : MSG_REPROVADO
}

function calculaMediaFinal(){
    let somaDasNotas = 0

    for(let i = 0; i < NOTAS.length; i++){
        somaDasNotas += NOTAS[i]
    }

    return somaDasNotas / NOTAS.length
}