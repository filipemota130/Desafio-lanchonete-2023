import Item from './item.js'
import Lista_de_Produtos from './base-de-itens.js'
import formas_de_pagamento from './base-de-pagamentos.js';

class CaixaDaLanchonete {
    calcularValorDaCompra(metodoDePagamento, itens) {
        if (itens.length === 0){
            console.log('itens')
        }
        else if (formas_de_pagamento.find(metodoDePagamento)){
            total = 0;
            for (i in itens.length){
                item_props = itens[i].split(',')
                const item = new Item(item_props[0],item_props[1])
                if (item == null){
                    console.log("Item inválido!")
                    break
                }
                else if (item.quant < 1){
                    console.log("Quantidade inválida!")
                    break
                }
                result = Lista_de_Produtos.find(item.codigo)
                total += result.valor * item.quant
            }
        }
        else{
            console.log("Forma de pagamento inválida!")
        }
        return "";
    }
}

export { CaixaDaLanchonete };
