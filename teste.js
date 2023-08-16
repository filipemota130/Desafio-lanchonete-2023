import Lista_de_Produtos from './src/base-de-itens.js'
import formas_de_pagamento from './src/base-de-pagamentos.js';

function splitInput(input){
    let result = input.split(',');
    if (result[1] === undefined) {
        return false;
    }
    return result;
}

function productValidator(code){
    try{
        let product = Lista_de_Produtos[code]
        return product
    }
    catch(e){
        return false;
    }
}

function paymentValidator(method){
    try{
        let forma = formas_de_pagamento[method]
        return forma
    }
    catch(e){
        return false;
    }
}

function checkQuantity(quant){
    if(quant < 1 | undefined) {
        return false
    }
    return quant
}

function MoneyFormater(amount, forma){
    amount += (amount*forma.desc)
    amount = amount.toFixed(2)
    amount = amount.toString().replace('.', ',');
    return console.log("R$ "+ amount);
}

function calcularValorDaCompra(metodoDePagamento, itens){
    let result = 0, forma, product, item_props, prod_list = [], code, quant;

    forma = paymentValidator(metodoDePagamento)
    if(!forma){
        result = "Forma de pagamento inválida!"
    }
    else {
        if (itens.length == 0) {
            result = "Não há itens no carrinho de compra!"
        }
        else{
            for (let i = 0; i<itens.length; i++)
            {
                item_props = itens[i].split(",")
                code = item_props[0] 
                product = productValidator(code)
                if (!product){
                    result = "Item inválido!"
                    break
                }
                
                prod_list.push(code)
                if (product.extra){
                    let search = prod_list.includes(prod_extra.extra_de)
                    if (search === false){
                        result = "Item extra não pode ser pedido sem o principal"
                        break
                    }
                }
                quant = checkQuantity(parseInt(item_props[1]))
                if (!quant){
                    result = "Quantidade inválida!"
                    break
                }
                result += product.valor * quant
            }
        }
        if (typeof result === "number"){
            return MoneyFormater(result, forma)
        }
    }
    return console.log(result);
}

calcularValorDaCompra('credito', ['cafe'])