import { palavrasExpulsao,palavrasMatricula,palavrasCursosTecnicos,palavrasEscolaFundador, mostProbablyQuestion
     } from './prova.js'
  
    let pergunta = "O que você deseja saber?"
    pergunta = pergunta.toLowerCase()
    pergunta = pergunta.split(' ')

    const bancos = [
        palavrasExpulsao,palavrasMatricula,palavrasCursosTecnicos,palavrasEscolaFundador,
    ]
   
    for (let i = 0; i < pergunta.length; i++) { 
    for (let j = 0; j < bancos.length; j++) { 
    
    if (bancos[j].probablyWords.indexOf(pergunta[i]) !== -1) {
    bancos[j].matched++
    }
    }
    }
    console.log(mostProbablyQuestion(pergunta))