const FORMCADASTRO = document.getElementById('form-cadastro');
const INPUTCEP = document.getElementById('cep');


//Buscar cep da api viacacep
//---------------------------------------------------------------
const buscarCep = (cep) => {
  return fetch(`https://viacep.com.br/ws/${cep}/json/`)
  .then(res => {
    if (!res.ok) {
      throw new Error('Erro ao buscar cep');
    }
    return res;
  })
  .then(res => {
    let json = res.json();
    return json;
  });
};


//Atribuir valores retornado do json aos campos
//---------------------------------------------------------------
const retornarEndereco = (e) => {
  let cep = INPUTCEP.value;
  cep = cep.replace('-', '');
  if (cep.length == 8 && !isNaN(cep)) {
    buscarCep(cep)
    .then(res => {
      let inputs = FORMCADASTRO.querySelectorAll('input[type=hidden]');
      for (let input of inputs) {
        switch (input.name) {
          case 'ibge':
          input.value = res.ibge;
          break;
          case 'endereco':
          input.value = res.logradouro;
          break;
          case 'estado':
          input.value = res.uf;
          break;
          case 'bairro':
          input.value = res.bairro;
          break;
          case 'cidade':
          input.value = res.localidade;
          break;
          default:
          break;
        }
      }
    });
  }
};

INPUTCEP.addEventListener('change', retornarEndereco);