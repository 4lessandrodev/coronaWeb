const cadastro = {
  user_id: '1',
  nome: 'Usuario name',
  email: 'usuario@domain.com',
  endereco: { endereco: 'Rua vai quem quer n50', cidade: 'Sao Paulo', estado: 'SP', cep: '75520140' },
  idade: '80',
  genero: 'F'
};

const consultas =[
  {
    id_consulta:1,
    data_hora: '15-03-2020 10:00:00 GMT320',
    teve_febre: 1,
    teve_sintomas: ['coriza', 'nariz entupido', 'cansaço, tosse, dor de cabeça', 'dores no corpo', 'mal estar geral', 'dor de garganta'],
    tomou_medicamento: 0,
    melhorou_apos_medicamento: 1,
    contato_alguem_corona: 0,
    viagem_internacional: 1,
    outros_sintomas: ['vomitos', 'convulções', 'falta de ar', 'dedos azulados e palidos'],
    gravidez: 0
  }, {
    id_consulta: 2,
    data_hora: '15-03-2020 10:00:00 GMT320',
    teve_febre: 1,
    tempo_febre: '02 dias',
    temperatura_febre: '37-40',
    teve_sintomas: ['coriza', 'nariz entupido', 'cansaço', 'tosse', 'dor de cabeça', 'dores no corpo', 'mal estar geral', 'dor de garganta'],
    tomou_medicamento: 1,
    melhorou_apos_medicamento: 0,
    contato_alguem_corona: 0,
    viagem_internaciona: 0,
    outros_sintomas: ['vomitos', 'convulções', 'falta de ar', 'dedos azulados e palidos'],
    gravidez: 0
  }
];