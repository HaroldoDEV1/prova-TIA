
//---------------------------------------------------------------------------------------------------------
// Palavras fundados
export const palavrasEscolaFundador = {
    probablyWords: [
        "quem", "fundou", "a", "escola",
        "sabe", "me", "dizer", "criou",
        "foi", "o", "criador", "da", "instituição", "educacional"
    ],
    matched: 0,
    answer: "QUem fundou a escola foi XYZXAS"
}

// Cursos técnicos
export const palavrasCursosTecnicos = {
    probablyWords: [
        "qual", "curso", "técnico", "a", "escola",
        "oferece", "sabe", "me", "dizer", "são",
        "os", "da", "instituição", "disponível",
        "na", "área", "técnica", "quais", "cursos", "técnicos"
    ],
    matched: 0,
    answer: "Oferecemos os cursos técnicos XYZXAADJASD"
}

// Matricular e rematricular
export const palavrasMatricula = {
    probablyWords: [
        "quem", "quer", "saber", "matricular", "um", "filho",
        "ou", "rematricular", "uma", "filha", "sabe", "me",
        "dizer", "como", "fazer", "a", "matrícula", "rematrícula",
        "de", "seu", "filho", "sua", "filha", "quais", "são",
        "os", "documentos", "necessários", "para", "a", "matrícula",
        "rematrícula", "na", "escola"
    ],
    matched: 0,
    answer: "Para matricular Deve ser feito XYZ, e para matricular ABC"
}

// QUALQUER OUTRA PERGUNTA
export const palavrasExpulsao = {
    probablyWords: [
        "filho", "eu", "expulsão", "saber", "expulso", "o que fazer", "aconteceu", "porque", "quais",
        "motivos", "meu", "regra", "minha", "filha" ,"dia", "hora", "quem"
    ],
    matched: 0,
    answer:"Ligue para escola xvz, fale com a diretora abd a respeito desse assunto"
}

function showAnswer(index) {
    // Retorne uma string como resposta
        switch (index) {
            case 0:
                return "O fundado é o Bento Quirino dos Santos"
            case 1:
                return "Oferecemos uma grande variedades de cursos técnicos como: INF, Enfermagem, veterinária etc...."
            case 2:
                return "Para matricular Deve ser feito no site da escola, e para matricular ligue para a tesouraria"
            case 3:
                return "Ligue para escola Bento-Quirino, fale com a diretora Célia Rodrigues a respeito desse assunto"
            default:
                return "Só falo do BENTO-QUIRINO a melhor escola do mundo"
    }
    // Exemplo: "Minha resposta"
    return "Resposta de exemplo do arquivo"
}


export function mostProbablyQuestion() {
    let matches = [
        // Veja quem teve mais matches dos bancos
        // Chame a showAnswer com o parâmetro
        palavrasEscolaFundador.matched, 
        palavrasCursosTecnicos.matched, 
        palavrasExpulsao.matched,
        palavrasMatricula.matched, 
    ]
        console.log(matches)
        console.log(Math.max(...matches))
        console.log(matches.indexOf(Math.max(...matches)))
        // Vê quantas palavras de cada pergunta foi usada
        return showAnswer(matches.indexOf(Math.max(...matches)))
    
}
   
