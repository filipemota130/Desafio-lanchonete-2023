const Lista_de_Produtos = {
    "cafe" : {
        codigo: 'cafe',
        descricao: 'Café',
        valor:	3.00,
        principal: true,
        extra: false,
    },
    'chantily': {
        codigo: 'chantily',
        descricao: 'Chantily (extra do Café)',
        valor:	1.50,
        principal: false,
        extra: true,
        extra_de : 'cafe',
    },
    'suco': {
        codigo: 'suco',
        descricao: 'Suco Natural',
        valor:	6.20,
        principal: true,
        extra: false,
    },
    'sanduiche' : {
        codigo: 'sanduiche',
        descricao: 'Sanduíche',
        valor:	6.50,
        principal: true,
        extra: false,
    },
    'queijo': {
        codigo: 'queijo',
        descricao: 'Queijo (extra do Sanduíche)',
        valor:	2.00,
        principal: false,
        extra: true,
        extra_de : 'sanduiche',
    },
    'salgado' : {
        codigo: 'salgado',
        descricao: 'Salgado',
        valor:	7.25,
        principal: true,
        extra: false,
    },
    'combo1': {
        codigo: 'combo1',
        descricao: '1 Suco e 1 Sanduíche',
        valor:	9.50,
        principal: true,
        extra: false,
    },
    'combo2': {
        codigo: 'combo2',
        descricao: '1 Café e 1 Sanduíche',
        valor:	7.50,
        principal: true,
        extra: false,
    },
}

export default Lista_de_Produtos;