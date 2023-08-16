import Lista_de_Produtos from './base-de-itens.js'
import formas_de_pagamento from './base-de-pagamentos.js';

class CaixaDaLanchonete {
    calcularValorDaCompra(metodoDePagamento, itens){
        let result = 0, forma, product, item_props, lista_prod = [];
        try{
            forma = formas_de_pagamento[metodoDePagamento]
            if (itens.length == 0) {
                result = "Não há itens no carrinho de compra!"
            }
            else{
                for (let i = 0; i<itens.length; i++)
                {
                    item_props = itens[i].split(',')
                    if (parseInt(item_props[1]) < 1) {
                        result = "Quantidade inválida!"
                        break
                    }
                    try{
                        product = Lista_de_Produtos[item_props[0]]
                        lista_prod.push(item_props[0])
                        console.log(product)
                        if (product.extra){
                            let search = lista_prod.includes(product.extra_de)
                            if (search === false){
                                result = "Item extra não pode ser pedido sem o principal"
                                break
                            }
                        }
                        result += product.valor * parseInt(item_props[1])
                    }
                    catch(e){
                        result = "Item inválido!"
                        break
                    }
                }

            }
            if (typeof result === "number"){
                result = result + (result*forma.desc)
                result = result.toFixed(2)
                result = result.toString().replace('.', ',');
                return "R$ "+ result;
            }
            return result;
        }
        catch(e){
            result = "Forma de pagamento inválida!"
            return result
        }
    }
}

export { CaixaDaLanchonete };
