const cep = require('cep-promise')

let Teresina = []
let SaoPaulo = []



let lista = [
    {
        nome:'Andre Oliveira',
        cep:'64029100'
    },
    {
        nome: 'Allison Gustavo',
        cep:'64027-220'
    },
    {
        nome: 'Empresa',
        cep: '64000-120'
    },
    {
        nome:'Gabriel Bandeira',
        cep: '64036735'
    },
    {
        nome:'David Veras',
        cep: '64052810'
    },
    {
        nome:'Roniel',
        cep: '64029150'
    },
    {
        nome: 'Kaelyson Brendo',
        cep: '64032096'
    },
    {
        nome : 'Adryan Gabriel',
        cep: '64009-100'
    }
]

let dados = []

function listar(){
    
    cep(64055030).then(resposta => {
        console.log(resposta)
    })
            

}

listar()
