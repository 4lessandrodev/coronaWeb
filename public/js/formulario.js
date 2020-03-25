const BTN_ENVIAR = document.querySelector('#enviar-consulta');
const PERGUNTAS = document.querySelectorAll('.pergunta');
const BUTTONS_NAO = document.querySelectorAll('.button_nao');
const BUTTONS_SIM = document.querySelectorAll('.button_sim');
const SINTOMAS = [];


const SALVAR_RESPOSTA = (e) => {
  e.preventDefault();
  let div = e.target.parentNode.parentNode;
  let indice = [...PERGUNTAS].indexOf(div);
  div.classList.toggle('hidden');
  PERGUNTAS[indice + 1].classList.toggle('hidden');
  (e.target.textContent.toUpperCase() == 'SIM') ? SINTOMAS.push(e.target.value) : '';
};



for (let btn of BUTTONS_NAO) {
  btn.addEventListener('click', SALVAR_RESPOSTA);
}

for (let btn of BUTTONS_SIM) {
  btn.addEventListener('click', SALVAR_RESPOSTA);
}



const ENVIAR_CONSULTA = (e) => {
  if (SINTOMAS[0] == '' || SINTOMAS[0] == null || SINTOMAS[0] == undefined) {
    return false;
  } else {
    let ids_sintomas = JSON.stringify(SINTOMAS); 
    fetch('/users/salvar-consulta', {
      headers: { "Content-Type": "application/json" },
      method: 'POST',
      body: ids_sintomas
    })
    .then(response => response.json())
    .then(json => {
      location.reload();
    });
  }
};


BTN_ENVIAR.addEventListener('click', ENVIAR_CONSULTA);