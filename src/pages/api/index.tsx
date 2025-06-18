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
    //centro
    id: '1',
    nome: 'Centro',
    location: 'cidade',
    equipamentos: [
      {
        titulo: 'PTP Nova America 1 (10.253.255.2)',
        link: '/backup_torres/centro/Nova_America_1.cfg'
      },
      {
        titulo: 'LiteAP GPS - AC 1 (10.100.21.2)',
        link: '/backup_torres/centro/LiteAP_GPS_AC_1.cfg'
      },
      {
        titulo: 'LiteAP GPS - AC 2 (10.100.22.2)',
        link: '/backup_torres/centro/LiteAP_GPS_AC_2.cfg'
      },
      {
        titulo: 'LiteAP GPS - AC 3 (10.100.23.2)',
        link: '/backup_torres/centro/LiteAP_GPS_AC_3.cfg'
      },
      {
        titulo: 'LiteAP GPS - AC 4 (10.100.24.2)',
        link: '/backup_torres/centro/LiteAP_GPS_AC_4.cfg'
      },
      {
        titulo: 'PTP - CHAMA 1 (10.254.7.2)',
        link: '/backup_torres/centro/PTP_CHAMA_1.cfg'
      },
      {
        titulo: 'PTP - Faz Canecao 1 (10.254.13.2)',
        link: '/backup_torres/centro/PTP_Faz_Canecao_1.cfg'
      },
      {
        titulo: 'PTP - Graos De Ouro 1 (10.254.3.2)',
        link: '/backup_torres/centro/PTP - Graos_De_Ouro_1.cfg'
      },
      {
        titulo: 'PTP - Horta 1 (10.254.5.2)',
        link: '/backup_torres/centro/PTP_Horta_1.cfg'
      },
      {
        titulo: 'PTP Campo Alto 1 (10.254.2.2)',
        link: '/backup_torres/centro/PTP_Campo_Alto_1.cfg'
      },
      {
        titulo: 'PTP Polo Industrial 1 (10.253.253.2)',
        link: '/backup_torres/centro/PTP_Polo_Industrial_1.cfg'
      },
      {
        titulo: 'PTP Tec Net Planalto 1 (10.254.10.2)',
        link: '/backup_torres/centro/PTP_Tec_Net_Planalto_1.cfg'
      },
      {
        titulo: 'Tec Net - Setor 1 (10.100.11.2)',
        link: '/backup_torres/centro/Tec_Net_Setor_1.cfg'
      },
      {
        titulo: 'Tec Net - Setor 2 (10.100.12.2)',
        link: '/backup_torres/centro/Tec_Net_Setor_2.cfg'
      },
      {
        titulo: 'Tec Net - Setor 3 (10.100.13.2)',
        link: '/backup_torres/centro/Tec_Net_Setor_3.cfg'
      },
      {
        titulo: 'Tec Net - Setor 4 (10.100.14.2)',
        link: '/backup_torres/centro/Tec_Net_Setor_4.cfg'
      },
      {
        titulo: 'Tec Net Ney 1 (10.254.6.2)',
        link: '/backup_torres/centro/Tec_Net_Ney_1.cfg'
      },
      {
        titulo: 'Tec Net PTP Residencial 1 (10.254.12.2)',
        link: '/backup_torres/centro/Tec_Net_PTP_Residencial_1.cfg'
      },
      {
        titulo: 'TEC-NET-PH-01 (10.100.1.2)',
        link: '/backup_torres/centro/TEC-NET-PH-01.cfg'
      },
      {
        titulo: 'TEC-NET-PH-02 (10.100.2.2)',
        link: '/backup_torres/centro/TEC-NET-PH-02.cfg'
      },
      {
        titulo: 'TEC-NET-PH-03 (10.100.3.2)',
        link: '/backup_torres/centro/TEC-NET-PH-03.cfg'
      },
      {
        titulo: 'TEC-NET-PH-04 (10.100.4.2)',
        link: '/backup_torres/centro/TEC-NET-PH-04.cfg'
      },
      {
        titulo: 'TEC-NET-PH-05 (10.100.5.2)',
        link: '/backup_torres/centro/TEC-NET-PH-05.cfg'
      },
      {
        titulo: 'TEC-NET-PH-06 (10.100.6.2)',
        link: '/backup_torres/centro/TEC-NET-PH-06.cfg'
      },
      {
        titulo: 'TEC-NET-PH-08 (10.100.8.2)',
        link: '/backup_torres/centro/TEC-NET-PH-08.cfg'
      },
      {
        titulo: 'TEC-NET-PH-09 (10.100.9.2)',
        link: '/backup_torres/centro/TEC-NET-PH-09.cfg'
      },
      {
        titulo: 'TEC-NET-PH-10 (10.100.10.2)',
        link: '/backup_torres/centro/TEC-NET-PH-10.cfg'
      }
    ]
  },
  {
    //planalto
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
    //galeria
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
    //cap vigario
    id: '4',
    nome: 'Cap. Vigário',
    location: 'cidade',
    equipamentos: [
      {
        titulo: 'Tec Net - PTP House 1 (10.254.92.2)',
        link: '/backups/Cap_Vigario/tec_net_-_ptp_house_1_(10.254.92.2).cfg'
      },
      {
        titulo: 'Tec Net - PTP House 2 (10.254.92.3)',
        link: '/backups/Cap_Vigario/tec_net_-_ptp_house_2_(10.254.92.3).cfg'
      },
      {
        titulo: 'TEC NET - Setor House 2 (10.92.2.2)',
        link: '/backups/Cap_Vigario/tec_net_-_setor_house_2_(10.92.2.2).cfg'
      },
      {
        titulo: 'TEC NET - Setor House 3 (10.92.3.2)',
        link: '/backups/Cap_Vigario/tec_net_-_setor_house_3_(10.92.3.2).cfg'
      }
    ]
  },
  {
    //polo industrial
    id: '5',
    nome: 'Polo Industrial',
    location: 'cidade',
    equipamentos: [{ titulo: 'Roteador B', link: '/backups/roteador-b.zip' }]
  },
  {
    //adonai
    id: '6',
    nome: 'Adonai',
    location: 'cidade',
    equipamentos: [
      {
        titulo: 'PTP - Adonai 1 (10.254.21.2)',
        link: '/backup_torres/centro/ptp_-_adonai_1_(10.254.21.2).cfg'
      },
      {
        titulo: 'PTP - Adonai 2 (10.254.21.3)',
        link: '/backup_torres/centro/ptp_-_adonai_2_(10.254.21.3).cfg'
      },
      {
        titulo: 'Setorial Adonai 4 (10.21.4.2)',
        link: '/backup_torres/centro/setorial_adonai_4_(10.21.4.2).cfg'
      },
      {
        titulo: 'TEC NET - Setorial Adonai 1 (10.21.1.2)',
        link: '/backup_torres/centro/tec_net_-_setorial_adonai_1_(10.21.1.2).cfg'
      },
      {
        titulo: 'TEC NET - Setorial Adonai 2 (10.21.2.2)',
        link: '/backup_torres/centro/tec_net_-_setorial_adonai_2_(10.21.2.2).cfg'
      },
      {
        titulo: 'TEC NET - Setorial Adonai 3 (10.21.3.2)',
        link: '/backup_torres/centro/tec_net_-_setorial_adonai_3_(10.21.3.2).cfg'
      },
      {
        titulo: 'TEC NET - Setorial Adonai 5 (10.21.5.2)',
        link: '/backup_torres/centro/tec_net_-_setorial_adonai_5_(10.21.5.2).cfg'
      },
      {
        titulo: 'TEC NET - Setorial Adonai 6 (10.21.6.2)',
        link: '/backup_torres/centro/tec_net_-_setorial_adonai_6_(10.21.6.2).cfg'
      }
    ]
  },
  {
    //graos de ouro
    id: '7',
    nome: 'Graos de Ouro',
    location: 'cidade',
    equipamentos: [{ titulo: 'Roteador B', link: '/backups/roteador-b.zip' }]
  },
  {
    //campo alto
    id: '8',
    nome: 'Campo Alto',
    location: 'cidade',
    equipamentos: [
      {
        titulo: 'PTP Campo Alto 2 (10.254.2.3)',
        link: '/backup_torres/Campo_Alto/ptp_campo_alto_2_(10.254.2.3).cfg'
      },
      {
        titulo: 'TEC-NET-CAMPO-ALTO (10.2.1.2)',
        link: '/backup_torres/Campo_Alto/tec-net-campo-alto_(10.2.1.2).cfg'
      },
      {
        titulo: 'TEC-NET-CAMPO-ALTO-2 (10.2.2.2)',
        link: '/backup_torres/Campo_Alto/tec-net-campo-alto-2_(10.2.2.2).cfg'
      },
      {
        titulo: 'TEC-NET-CAMPO-ALTO-3 (10.2.3.2)',
        link: '/backup_torres/Campo_Alto/tec-net-campo-alto-3_(10.2.3.2).cfg'
      }
    ]
  },
  {
    //aprazivel
    id: '9',
    nome: 'Aprazível',
    location: 'cidade',
    equipamentos: [
      {
        titulo: 'APRAZIVEL 1 - PrismStation 5AC (10.5.25.2)',
        link: '/backup_torres/aprazivel/aprazivel_1_-_prismstation_5ac_(10.5.25.2).cfg'
      },
      {
        titulo: 'APRAZIVEL 2 - PrismStation 5AC (10.5.26.2)',
        link: '/backup_torres/aprazivel/aprazivel_2_-_prismstation_5ac_(10.5.26.2).cfg'
      },
      {
        titulo: 'APRAZIVEL 3 - PrismStation 5AC (10.5.27.2)',
        link: '/backup_torres/aprazivel/aprazivel_3_-_prismstation_5ac_(10.5.27.2).cfg'
      },
      {
        titulo: 'PTP - Posto San Fernando 1 (10.254.34.2)',
        link: '/backup_torres/aprazivel/ptp_-_posto_san_fernando_2_(10.254.34.2).cfg'
      },
      {
        titulo: 'PTP - Posto San Fernando 2 (10.254.34.3)',
        link: '/backup_torres/aprazivel/ptp_-_posto_san_fernando_2_(10.254.34.3).cfg'
      },
      {
        titulo: 'Setoria Aprazivel 1 (10.5.10.2)',
        link: '/backup_torres/aprazivel/setoria_aprazivel_1_(10.5.10.2).cfg'
      },
      {
        titulo: 'Tec Net - Aprazivel - 2 (10.5.20.2)',
        link: '/backup_torres/aprazivel/tec_net_-_aprazivel_-_2_(10.5.20.2).cfg'
      },
      {
        titulo: 'TEC NET - Omni Posto (10.254.34.4)',
        link: '/backup_torres/aprazivel/tec_net_-_omni_posto_(10.254.34.4).cfg'
      },
      {
        titulo: 'TEC NET APRAZIVEL 1 (10.5.1.2)',
        link: '/backup_torres/aprazivel/tec_net_aprazivel_1_(10.5.1.2).cfg'
      },
      {
        titulo: 'TEC NET APRAZIVEL 2 (10.5.2.2)',
        link: '/backup_torres/aprazivel/tec_net_aprazivel_2_(10.5.2.2).cfg'
      },
      {
        titulo: 'TEC NET APRAZIVEL 3 (10.5.3.2)',
        link: '/backup_torres/aprazivel/tec_net_aprazivel_3_(10.5.3.2).cfg'
      },
      {
        titulo: 'TEC NET APRAZIVEL 4 (10.5.4.2)',
        link: '/backup_torres/aprazivel/tec_net_aprazivel_4_(10.5.4.2).cfg'
      },
      {
        titulo: 'TEC NET APRAZIVEL 5 (10.5.5.2)',
        link: '/backup_torres/aprazivel/tec_net_aprazivel_5_(10.5.5.2).cfg'
      }
    ]
  },
  {
    //horta
    id: '10',
    nome: 'Horta',
    location: 'cidade',
    equipamentos: [{ titulo: 'Roteador B', link: '/backups/roteador-b.zip' }]
  },
  {
    //adm
    id: '11',
    nome: 'ADM',
    location: 'rural',
    equipamentos: [
      {
        titulo: 'AP- ADM 2 (10.254.24.3)',
        link: '/backup_torres/ADM/ap-_adm_2_(10.254.24.3).cfg'
      },
      {
        titulo: 'PTP TEC NET - ADM 1 (10.254.24.2)',
        link: '/backup_torres/ADM/ptp_tec_net_-_adm_1_(10.254.24.2).cfg'
      }
    ]
  },
  {
    //agua doce
    id: '12',
    nome: 'Agua Doce',
    location: 'rural',
    equipamentos: [
      {
        titulo: 'TEC NET - PTP Agua Doce 2 (10.70.3.4)',
        link: '/backup_torres/Agua_Doce/tec_net_-_ptp_agua_doce_2_(10.70.3.4).cfg'
      },
      {
        titulo: 'TEC NET - Agua Doce Omni (10.70.3.5)',
        link: '/backup_torres/Agua_Doce/tec_net_-_agua_doce_omni_(10.70.3.5).cfg'
      }
    ]
  },
  {
    //carreteira lins
    id: '13',
    nome: 'Carreteira Lins',
    location: 'rural',
    equipamentos: [
      {
        titulo: 'PTP - FAZ CARRETEIRA (Lins) (10.70.50.4)',
        link: '/backups/Carreteira_(lins)/tec_net_carreteira_lins_1_(10.70.50.5).cfg'
      },
      {
        titulo: 'TEC NET CARRETEIRA LINS 1 (10.70.50.5)',
        link: '/backups/Carreteira_(lins)/tec_net_carreteira_lins_1_(10.70.50.5).cfg'
      }
    ]
  }
]
