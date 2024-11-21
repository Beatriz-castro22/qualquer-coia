function one(){
    return[
        `isso e otimoooooo!
         fico muito feliz que esteja bem!
         voce e incrivel, continue com energia
         positiva isso contagia poe crer!<3`]
}

function two(){
    return[
        `parece que algo te fez ficar assim:(
         mais nao se preocupe! acolha o seu sentimento
         negar ou reprimir um sentimento nao e a melhor
         maneira de lidar com ele!
         chore se quizer ninguem ta vendo!nao quarde essa
         dor para si mesmo, voce vai ficar bem. `]
}

function thee(){
    return[
        `voce deve se acalmar nao deixe que o estresse
         ou a raiva estraguem seu dia, respire um pouco e 
         tome cuidado com suas palavras por que mesmo estando 
         com raiva nao deve falar algo que pode machucar outras pessoas:)`]
}

function four(){
    return[
        `Meditacao, joga, ouvir musica, fazer uma massagem, caminhar,
         ler um livro ou ver um filme divertido podem ajudar a relaxa.
         e normal se sentir ansioso as vezes ta tudo bem.`
    ]
}

function five(){
    return[
`Investigue a origem do sentimento.
Priorize a qualidade das interacoes.
Descubra novos caminhos para seguir sozinho.
Pratique, pratique, pratique.
Tenha sempre meios de combater o tedio.
Busque o bem-estar emocional na terapia`

    ]
}

do{
    let nome = prompt('Oiii bem vindo ao sentimental diary ,por gentileza digite seu nome <3' )
    let option = prompt(`Ola ${nome} qual sentimento voce esta sentido hoje? 
        1-Feliz
        2-Triste
        3-Raiva 
        4-Ansioso
        5-Solitario
        6-sair` )
switch (option) {
    case '1':
        let happy = one()
        alert(`esta feliz!
             ${happy.join('\n')}`)
        break;

    case '2':
        let sad = two()  
        alert(`esta triste?
             ${sad.join('\n')}`)
        break;
        
    case '3':
        let angry = thee()
        alert(`esta com raiva?
             ${angry.join('\n')}`)
        break;

    case '4':
    let anxiety = four()
    alert(`esta ansioso?
        ${anxiety.join('\n')}`)
    break;

    case '5':
        let lonely = five()
        alert(`esta solitario?
            ${lonely.join('\n')}`)
        break;

    case '6':
        alert(`ate mais!se quiser escutar uma musica 
            de acordo com o que voce ta sentindo va ao projeto
            `)

    default:alert("opcao invalida!")
    
}

}while (option !== '6')