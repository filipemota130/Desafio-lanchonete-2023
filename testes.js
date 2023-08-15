import Item from './src/item.js'
import Lista_de_Produtos from './src/base-de-itens.js'
import formas_de_pagamento from './src/base-de-pagamentos.js';

function calcularValorDaCompra(metodoDePagamento, itens){
    let result = 0;
    let forma;

    try{
        forma = formas_de_pagamento[metodoDePagamento]
    }
    catch(e){
        result = "Forma de pagamento inválida!"
        return result
    }
    if (itens.length == 0) {
        result = "Não há itens no carrinho de compra!"
    }
    else{
        for(i in itens.length){
            item_props = itens[i].split(',')
            const item = new Item(item_props[0],item_props[1])
            if (item.quant < 1 | typeof item.quant === "string") {
                console.log("entrou")
                result = "Quantidade inválida!"
                break
            }
            product = Lista_de_Produtos.find(item.codigo)
            if (product === null){
                result = "Item inválido!"
                break
            }
            result += product.valor * item.quant
        }
        result = result + (result*forma.desc)
    }
    return console.log(result);
}

calcularValorDaCompra('dinheiro', ['café,0'])