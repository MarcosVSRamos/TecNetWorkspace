import Local from '../../models/Local'
import fundo_cidade from '../../assets/images/fundo_cidade.jpg'
import fundo_rural from '../../assets/images/paisagem_rural.jpg'
import fundo_distrito from '../../assets/images/fundo_distrito.jpg'
import { Torre as TorreType } from '../../models/Torre'

export const cidade: Local[] = [
  {
    id: 13,
    category: 'cidade',
    title: 'Centro',
    image: fundo_cidade,
    link: 'https://maps.app.goo.gl/hHmEaoLWf6GRJZu28'
  },
  {
    id: 14,
    category: 'cidade',
    title: 'Cap. Vigário',
    image: fundo_cidade,
    link: 'https://maps.app.goo.gl/yebyYEaBeQpfEsvr6'
  },
  {
    id: 15,
    category: 'cidade',
    title: 'Polo industrial',
    image: fundo_cidade,
    link: 'https://maps.app.goo.gl/oB7ivghrTfqiyR7SA'
  },
  {
    id: 16,
    category: 'cidade',
    title: 'Campo Alto',
    image: fundo_cidade,
    link: 'https://maps.app.goo.gl/WLhfXQJmKgsiNdEf7'
  },
  {
    id: 17,
    category: 'cidade',
    title: 'Grãos de Ouro',
    image: fundo_cidade,
    link: 'https://maps.app.goo.gl/Rc6EwfcQztM1CydB6'
  },
  {
    id: 18,
    category: 'cidade',
    title: 'Galeria',
    image: fundo_cidade,
    link: 'https://maps.app.goo.gl/S4gEBHDwUvsnXcez6'
  },
  {
    id: 19,
    category: 'cidade',
    title: 'Adonai',
    image: fundo_cidade,
    link: 'https://maps.app.goo.gl/mW1KxjzyEHwB2wpz9'
  },
  {
    id: 20,
    category: 'cidade',
    title: 'Planalto',
    image: fundo_cidade,
    link: 'https://maps.app.goo.gl/aVRGZ8eYwXG71BqZ6'
  },
  {
    id: 21,
    category: 'cidade',
    title: 'Aprazível',
    image: fundo_cidade,
    link: 'https://maps.app.goo.gl/MDNce3ihUQfDjNkL6'
  },
  {
    id: 24,
    category: 'cidade',
    title: 'Horta',
    image: fundo_cidade,
    link: 'https://maps.app.goo.gl/FyhfouhjnwwJiqsn6'
  }
]

export const rural: Local[] = [
  {
    id: 1,
    category: 'rural',
    title: 'Sta. Claudina',
    image: fundo_rural,
    link: 'https://maps.app.goo.gl/SUdR11XdziEJmWgv7'
  },
  {
    id: 2,
    category: 'rural',
    title: 'Conchita',
    image: fundo_rural,
    link: 'https://maps.app.goo.gl/HkB9GndtngGRcztZ6'
  },
  {
    id: 3,
    category: 'rural',
    title: 'Faz. LV',
    image: fundo_rural,
    link: 'https://maps.app.goo.gl/t8oF5gMBS4boNCiA7'
  },
  {
    id: 4,
    category: 'rural',
    title: 'Fonseca',
    image: fundo_rural,
    link: 'https://maps.app.goo.gl/9pRKvCHNZBsWPJzGA'
  },
  {
    id: 5,
    category: 'rural',
    title: 'Frenham',
    image: fundo_rural,
    link: 'https://maps.app.goo.gl/v2c6xgFUTGFjSo7t6'
  },
  {
    id: 6,
    category: 'rural',
    title: 'Vaticano',
    image: fundo_rural,
    link: 'https://maps.app.goo.gl/VCTxNHyPUavXGkND8'
  },
  {
    id: 7,
    category: 'rural',
    title: 'Dona Amélia',
    image: fundo_rural,
    link: 'https://maps.app.goo.gl/DGWzmtDd15rpr2kU9'
  },
  {
    id: 8,
    category: 'rural',
    title: 'São Miguel',
    image: fundo_rural,
    link: 'https://maps.app.goo.gl/8XSNacwsnNVemH827'
  },
  {
    id: 9,
    category: 'rural',
    title: 'Terra do Boi',
    image: fundo_rural,
    link: 'https://maps.app.goo.gl/GeK9ezmbKRwmfdZGA'
  },
  {
    id: 10,
    category: 'rural',
    title: 'Porco',
    image: fundo_rural,
    link: 'https://maps.app.goo.gl/6hbVTWkexgBWqoMS7'
  },
  {
    id: 11,
    category: 'rural',
    title: 'Faz. Palmeiras',
    image: fundo_rural,
    link: 'https://maps.app.goo.gl/ms7BoDzoYo5F84Za9'
  },
  {
    id: 12,
    category: 'rural',
    title: 'Granja Finamoure',
    image: fundo_rural,
    link: 'https://maps.app.goo.gl/23AHpzgKZiSdc7PN9'
  },
  {
    id: 25,
    category: 'rural',
    title: 'Remanso',
    image: fundo_rural,
    link: 'https://maps.app.goo.gl/KuvFrPywsAGgtnMn9'
  },
  {
    id: 26,
    category: 'rural',
    title: 'Continental',
    image: fundo_rural,
    link: 'https://maps.app.goo.gl/6aryQsAoWgQ4WVDj7'
  },
  {
    id: 27,
    category: 'rural',
    title: 'Campanário',
    image: fundo_rural,
    link: 'https://maps.app.goo.gl/zo4DzwoH8mSDDK519'
  },
  {
    id: 28,
    category: 'rural',
    title: 'Escritório Camp.',
    image: fundo_rural,
    link: 'https://maps.app.goo.gl/3vzKsUyGCT6LLTgu6'
  },
  {
    id: 29,
    category: 'rural',
    title: 'Caixa Dagua Camp.',
    image: fundo_rural,
    link: 'https://maps.app.goo.gl/xTd5ATJgnNDcYzwE9'
  },
  {
    id: 30,
    category: 'rural',
    title: 'Daminhão',
    image: fundo_rural,
    link: 'https://maps.app.goo.gl/Nv5Cv9Q6jsDrcDFq7'
  },
  {
    id: 31,
    category: 'rural',
    title: 'Santa Fé',
    image: fundo_rural,
    link: 'https://maps.app.goo.gl/D4CG6qdKi2kJvtRHA'
  },
  {
    id: 32,
    category: 'rural',
    title: 'Santa Lúcia',
    image: fundo_rural,
    link: 'https://maps.app.goo.gl/CpHgRhkFpkEanynY7'
  },
  {
    id: 33,
    category: 'rural',
    title: 'Faz. Joa',
    image: fundo_rural,
    link: 'https://maps.app.goo.gl/7m31WfuJgNxE9Uqm8'
  },
  {
    id: 34,
    category: 'rural',
    title: 'Faz. Canecao',
    image: fundo_rural,
    link: 'https://maps.app.goo.gl/NsHB7KubKUaqm8af7'
  },
  {
    id: 35,
    category: 'rural',
    title: 'OB Cereais',
    image: fundo_rural,
    link: 'https://maps.app.goo.gl/jd4qGVLJ7xbhr11x9'
  },
  {
    id: 36,
    category: 'rural',
    title: 'Brasília do Sul',
    image: fundo_rural,
    link: 'https://maps.app.goo.gl/QjrdxgnzQbJm3kLw5'
  },
  {
    id: 37,
    category: 'rural',
    title: 'Lago Dourado',
    image: fundo_rural,
    link: 'https://maps.app.goo.gl/WkaYMZQ5xyPYvU1WA'
  },
  {
    id: 38,
    category: 'rural',
    title: 'Maram',
    image: fundo_rural,
    link: 'https://maps.app.goo.gl/EVxXFKP3muMqXvAi7'
  },
  {
    id: 39,
    category: 'rural',
    title: 'Joao',
    image: fundo_rural,
    link: 'https://maps.app.goo.gl/hL5kn67xeYSVyQmp7'
  },
  {
    id: 40,
    category: 'rural',
    title: 'Adriano Loro',
    image: fundo_rural,
    link: 'https://maps.app.goo.gl/xhMdc4as2ZNhaDob7'
  },
  {
    id: 41,
    category: 'rural',
    title: 'Sitio tereré',
    image: fundo_rural,
    link: 'https://maps.app.goo.gl/fuwn5jAxSvEqmoxu9'
  },
  {
    id: 42,
    category: 'rural',
    title: 'Belo Horizonte',
    image: fundo_rural,
    link: 'https://maps.app.goo.gl/8HkQVFUNgxxa34T28'
  },
  {
    id: 43,
    category: 'rural',
    title: 'Raízen',
    image: fundo_rural,
    link: 'https://maps.app.goo.gl/soTif6eaDg3KMHM66'
  },
  {
    id: 44,
    category: 'rural',
    title: 'Torre Naviraí',
    image: fundo_rural,
    link: 'https://maps.app.goo.gl/BmrAsamKUGtdeUqH8'
  },
  {
    id: 45,
    category: 'rural',
    title: 'Sto. Antônio',
    image: fundo_rural,
    link: 'https://maps.app.goo.gl/bB8hKzHyMqkenV9u7'
  },
  {
    id: 46,
    category: 'rural',
    title: 'Granja Finamoure',
    image: fundo_rural,
    link: 'https://maps.app.goo.gl/23AHpzgKZiSdc7PN9'
  },
  {
    id: 47,
    category: 'rural',
    title: 'Zé Vital',
    image: fundo_rural,
    link: 'https://maps.app.goo.gl/1ebcgoBPbj2SQg8A8'
  },
  {
    id: 48,
    category: 'rural',
    title: 'Ibiporã',
    image: fundo_rural,
    link: 'https://maps.app.goo.gl/3f6uejcZ7yUWnZus8'
  },
  {
    id: 49,
    category: 'rural',
    title: 'Água Doce',
    image: fundo_rural,
    link: 'https://maps.app.goo.gl/xJoNLBBGa6aQ5bWt6'
  },
  {
    id: 50,
    category: 'rural',
    title: 'Paraiso das Aguas',
    image: fundo_rural,
    link: 'https://maps.app.goo.gl/befpiZ426JSwgXw39'
  },
  {
    id: 51,
    category: 'rural',
    title: 'N.S.G Tuti',
    image: fundo_rural,
    link: 'https://maps.app.goo.gl/437hSPv6n87pds2r7'
  },
  {
    id: 52,
    category: 'rural',
    title: 'Carreteira Lins',
    image: fundo_rural,
    link: 'https://maps.app.goo.gl/YVnHB2Z2WFgrzhfC8'
  },
  {
    id: 53,
    category: 'rural',
    title: 'Jatoba',
    image: fundo_rural,
    link: 'https://maps.app.goo.gl/izoF5Hw1Ym9Pd5NF9'
  }
]

export const distrito: Local[] = [
  {
    id: 22,
    category: 'distrito',
    title: 'Nova América',
    image: fundo_distrito,
    link: 'https://maps.app.goo.gl/BtWDKo3vgpWfwZNS9'
  },
  {
    id: 23,
    category: 'distrito',
    title: 'Cristalina',
    image: fundo_distrito,
    link: 'https://maps.app.goo.gl/Fvj5zS6mpAq9z6M8A'
  }
]

export const torres: TorreType[] = [
  {
    id: '1',
    nome: 'Centro',
    location: 'cidade',
    equipamentos: [
      {
        titulo: 'PTP Nova America 1 (10.253.255.2)',
        link: 'https://drive.google.com/uc?export=download&id=1oESzw5zA91637KrQcumr-cv4ltwM5UNC'
      },
      {
        titulo: 'LiteAP GPS - AC 1 (10.100.21.2)',
        link: 'https://drive.google.com/uc?export=download&id=1RcBwGbgF6gpMFr6NQ7R4p5FlU0VGl5Z-'
      },
      {
        titulo: 'LiteAP GPS - AC 2 (10.100.22.2)',
        link: 'https://drive.google.com/uc?export=download&id=11CAcLlGXdg3f4fDmawbKpBfKrYu0TVDj'
      },
      {
        titulo: 'LiteAP GPS - AC 3 (10.100.23.2)',
        link: 'https://drive.google.com/uc?export=download&id=1_g4ju_gZvr6SiwWdVASoKayJddGwDUEO'
      },
      {
        titulo: 'LiteAP GPS - AC 4 (10.100.24.2)',
        link: 'https://drive.google.com/uc?export=download&id=1kkPO_hPa8q9x0psMrjUUY7vbMogrUwjr'
      },
      {
        titulo: 'PTP - CHAMA 1 (10.254.7.2)',
        link: 'https://drive.google.com/uc?export=download&id=1NS43HjkwsFQRwo4subeO2GL7B6USkDOR'
      },
      {
        titulo: 'PTP - Faz Canecao 1 (10.254.13.2)',
        link: 'https://drive.google.com/uc?export=download&id=1JhOKPAM8uaFSaOgHZoOxiHa8Qb6wxYSl'
      },
      {
        titulo: 'PTP - Graos De Ouro 1 (10.254.3.2)',
        link: 'https://drive.google.com/uc?export=download&id=1D4a0NI3NsYmzm3Chqp0u918oumlOHHVW'
      },
      {
        titulo: 'PTP - Horta 1 (10.254.5.2)',
        link: 'https://drive.google.com/uc?export=download&id=1aaIPYR5GZA6mjgkJmQ0Z8ba1xlukY-hF'
      },
      {
        titulo: 'PTP Campo Alto 1 (10.254.2.2)',
        link: 'https://drive.google.com/uc?export=download&id=1VLPyZcRA1KPbMq3h8DGaQUOQaDMuIXPf'
      },
      {
        titulo: 'PTP Polo Industrial 1 (10.253.253.2)',
        link: 'https://drive.google.com/uc?export=download&id=1CCwJcpBbYj85ufcmBcOf--k07H6xYwH_'
      },
      {
        titulo: 'PTP Tec Net Planalto 1 (10.254.10.2)',
        link: 'https://drive.google.com/uc?export=download&id=1rnMnFA8nutfGtFk29VAzIh0c7y6PUx8X'
      },
      {
        titulo: 'Tec Net - Setor 1 (10.100.11.2)',
        link: 'https://drive.google.com/uc?export=download&id=1j3frahxgu-hKTe5pw6O_topu3crjj4E9'
      },
      {
        titulo: 'Tec Net - Setor 2 (10.100.12.2)',
        link: 'https://drive.google.com/uc?export=download&id=1f6EaFEpBM2j15SWRX7Q18tRFzV_8DIWj'
      },
      {
        titulo: 'Tec Net - Setor 3 (10.100.13.2)',
        link: 'https://drive.google.com/uc?export=download&id=1Nbqm3h-x5G6p5lRJqjtCKZ5YDNWkaIJn'
      },
      {
        titulo: 'Tec Net - Setor 4 (10.100.14.2)',
        link: 'https://drive.google.com/uc?export=download&id=1k2J-zCLtvFd-aW7wwxNCt9btQM22Qro4'
      },
      {
        titulo: 'Tec Net Ney 1 (10.254.6.2)',
        link: 'https://drive.google.com/uc?export=download&id=1XoSL19W4-ojbFQ2qcTCEIyyyKrp-W9f2'
      },
      {
        titulo: 'Tec Net PTP Residencial 1 (10.254.12.2)',
        link: 'https://drive.google.com/uc?export=download&id=1Qud_kqdN-vlf5XYVrgkbgPq91-FFz-NF'
      },
      {
        titulo: 'TEC-NET-PH-01 (10.100.1.2)',
        link: 'https://drive.google.com/uc?export=download&id=1hwU5Ubr-13g4bILWiXwBX3Nyhofsc-W4'
      },
      {
        titulo: 'TEC-NET-PH-02 (10.100.2.2)',
        link: 'https://drive.google.com/uc?export=download&id=1p97vsnQxyUdw_tF3mZ5wbBl7lomYfDvJ'
      },
      {
        titulo: 'TEC-NET-PH-03 (10.100.3.2)',
        link: 'https://drive.google.com/uc?export=download&id=1Ba7Fb6m2miXzkKKgRKZI3McQMxE5hr5K'
      },
      {
        titulo: 'TEC-NET-PH-04 (10.100.4.2)',
        link: 'https://drive.google.com/uc?export=download&id=1dG3H77_zuqH9ZC-DsOPmvRJZwDN3_a3S'
      },
      {
        titulo: 'TEC-NET-PH-05 (10.100.5.2)',
        link: 'https://drive.google.com/uc?export=download&id=1H4A45ZXPrvcddDAyBbvGd281aa220-Ne'
      },
      {
        titulo: 'TEC-NET-PH-06 (10.100.6.2)',
        link: 'https://drive.google.com/uc?export=download&id=1DzO513eHyg7FknRIWNQACrhmHf9GbfDu'
      },
      {
        titulo: 'TEC-NET-PH-08 (10.100.8.2)',
        link: 'https://drive.google.com/uc?export=download&id=1oM97a6EX_cODMzsPBGeVk69tdDt-YJSz'
      },
      {
        titulo: 'TEC-NET-PH-09 (10.100.9.2)',
        link: 'https://drive.google.com/uc?export=download&id=1kYq5JrzCb7M0vgVIdocWUcm430G5_Y5-'
      },
      {
        titulo: 'TEC-NET-PH-10 (10.100.10.2)',
        link: 'https://drive.google.com/uc?export=download&id=1j8-qdfPtk0gF-PpbzWXUkSTc3VfHUKqr'
      }
    ]
  },
  {
    id: '2',
    nome: 'Planalto',
    location: 'cidade',
    equipamentos: [
      {
        titulo: 'Painel AC 1',
        link: 'https://drive.google.com/uc?export=download&id='
      },
      {
        titulo: 'Painel AC 2',
        link: 'https://drive.google.com/uc?export=download&id='
      },
      {
        titulo: 'Painel AC 3',
        link: 'https://drive.google.com/uc?export=download&id='
      },
      {
        titulo: 'Painel AC 4',
        link: 'https://drive.google.com/uc?export=download&id='
      },
      {
        titulo: 'Painel AC 5',
        link: 'https://drive.google.com/uc?export=download&id='
      },
      { titulo: 'Switch A', link: '/backups/switch-a.zip' }
    ]
  },
  {
    id: '3',
    nome: 'Galeria',
    location: 'cidade',
    equipamentos: [
      {
        titulo: 'TEC-NET-GALERIA-1 (10.4.1.2)',
        link: 'https://drive.google.com/uc?export=download&id=1GTnDX_CjIGv1ur73UIDuqh3a3_-4EHa1'
      },
      {
        titulo: 'TEC-NET-GALERIA-2 (10.4.2.2)',
        link: 'https://drive.google.com/uc?export=download&id=1dispB1gH90gvucpg6BfPn6pRcraCZE2P'
      },
      {
        titulo: 'TEC-NET-GALERIA-3 (10.4.3.2)',
        link: 'https://drive.google.com/uc?export=download&id=1uytsKIQR4YdOiS8LtFStl6lunf-qIWRA'
      },
      {
        titulo: 'TEC-NET-GALERIA-4 (10.4.4.2)',
        link: 'https://drive.google.com/uc?export=download&id=1gGzp3wWERtTz5rWn2a-TQ8irejZxxVN3'
      }
    ]
  },
  {
    id: '4',
    nome: 'Cap. Vigário',
    location: 'cidade',
    equipamentos: [{ titulo: 'Roteador B', link: '/backups/roteador-b.zip' }]
  },
  {
    id: '5',
    nome: 'Polo Industrial',
    location: 'cidade',
    equipamentos: [{ titulo: 'Roteador B', link: '/backups/roteador-b.zip' }]
  },
  {
    id: '6',
    nome: 'Adonai',
    location: 'cidade',
    equipamentos: [{ titulo: 'Roteador B', link: '/backups/roteador-b.zip' }]
  },
  {
    id: '7',
    nome: 'Graos de Ouro',
    location: 'cidade',
    equipamentos: [{ titulo: 'Roteador B', link: '/backups/roteador-b.zip' }]
  },
  {
    id: '8',
    nome: 'Campo Alto',
    location: 'cidade',
    equipamentos: [{ titulo: 'Roteador B', link: '/backups/roteador-b.zip' }]
  },
  {
    id: '9',
    nome: 'Aprazível',
    location: 'cidade',
    equipamentos: [{ titulo: 'Roteador B', link: '/backups/roteador-b.zip' }]
  },
  {
    id: '10',
    nome: 'Horta',
    location: 'cidade',
    equipamentos: [{ titulo: 'Roteador B', link: '/backups/roteador-b.zip' }]
  }
]
