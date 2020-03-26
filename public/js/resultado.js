const SINTOMAS = document.querySelectorAll('.sintoma');
const RESULTADO = document.querySelector('#resultado');



let febre = false,
    dRespiratoria = false,
    contatoCovid = false,
    tosse = false,
    cansaco = false;



const lerSintomas = (e) => {
    for (let sintoma of[...SINTOMAS]) {
        (sintoma.textContent.indexOf('Febre') != -1) ? febre = true: '';
        (sintoma.textContent.indexOf('Tosse') != -1) ? tosse = true: '';
        (sintoma.textContent.indexOf('Cansaço') != -1) ? cansaco = true: '';
        (sintoma.textContent.indexOf('Contato com alguém') != -1) ? contatoCovid = true: '';
        (sintoma.textContent.indexOf('Respiratória') != -1) ? dRespiratoria = true: '';
    }
    resultado();
};

let resultado = () => {
    if ((dRespiratoria && contatoCovid) || contatoCovid) {
        RESULTADO.textContent = `Você possui alguns sintomas que podem indicar COVID-19, por favor aguarde o contato de um profissional de saúde 'Fique em casa',
    em caso de urgência você pode ligar para o telefone 0800 555 466`;
    } else if ((febre && dRespiratoria && tosse) || cansaco) {
        RESULTADO.textContent = `Você possui alguns sintomas que podem indicar COVID-19, por favor aguarde o contato de um profissional de saúde 'Fique em casa',
    em caso de urgência você pode ligar para o telefone 0800 555 466`;
    } else {
        RESULTADO.textContent = `Seus sintomas não são suficiente para ser uma possível suspeita de COVID-19, continue acompanhando, se você não se sentir melhor em pouco tempo entre em contato
    (0800 555 466) ou e-mail (notifica@saude.sp.gov.br).`;
    }
};
lerSintomas();