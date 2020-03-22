const cadastro = {
  user_id: '1',
  nome: 'Usuario name',
  email: 'usuario@domain.com',
  genero: 'F',
  endereco: 'Rua vai quem quer n50',
  cidade: 'Sao Paulo',
  estado: 'SP',
  cep: '75520140',
  idade: '80',
  ibge:'5030350'
};

//Rota de consumo http://localhost:3000/users/consulta/:id
const consulta =
  [
    {
      "id": 4,
      "data_hora": "2020-03-22T00:54:35.000Z",
      "teve_febre": 1,
      "tomou_medicamento": 0,
      "melhorou_apos_medicamento": 0,
      "contato_alguem_corona": 0,
      "viagem_internacional": 0,
      "outros_sintomas": 0,
      "gravidez": 0,
      "id_usuario": 3
    },
    [
      {
        "id": 1,
        "descricao": "Coriza"
      },
      {
        "id": 2,
        "descricao": "Nariz entupido"
      },
      {
        "id": 3,
        "descricao": "Cansaço"
      }
    ]
  ];