import Item from './item.js'
import Lista_de_Produtos from './base-de-itens.js'
import formas_de_pagamento from './base-de-pagamentos.js';

class CaixaDaLanchonete {
    calcularValorDaCompra(metodoDePagamento, itens) {
        let result = 0;
        var forma = formas_de_pagamento.find(metodoDePagamento)
        if (Array.isArray(itens) && itens.length <= 0) {
            console.log(itens)
            result="Não há itens no carrinho de compra!"
        }
        else if (forma){
            for (i in itens.length){
                item_props = itens[i].split(',')
                const item = new Item(item_props[0],item_props[1])
                if (item.quant < 1 | typeof item.quant === "string") {
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
        else{
            result = "Forma de pagamento inválida!"
        }
        return result;
    }
}

export { CaixaDaLanchonete };
