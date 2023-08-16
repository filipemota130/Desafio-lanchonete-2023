import Lista_de_Produtos from './base-de-itens.js'
import formas_de_pagamento from './base-de-pagamentos.js';

class CaixaDaLanchonete {

    productValidator(code){
        try{
            let product = Lista_de_Produtos[code]
            return product
        }
        catch(e){
            return false;
        }
    }
    
    paymentValidator(method){
        try{
            let forma = formas_de_pagamento[method]
            return forma
        }
        catch(e){
            return false;
        }
    }
    
    checkQuantity(quant){
        if(quant < 1) {
            return false
        }
        return quant
    }
    
    MoneyFormater(amount, forma){
        amount += (amount*forma.desc)
        amount = amount.toFixed(2)
        amount = amount.toString().replace('.', ',');
        return "R$ "+ amount;
    }
    
    calcularValorDaCompra(metodoDePagamento, itens){
        let result = 0, forma, product, item_props, prod_list = [], code, quant;
        
        forma = this.paymentValidator(metodoDePagamento)

        if(!forma){
            result = "Forma de pagamento inválida!"
        }
        else {
            if (itens.length === 0) {
                result = "Não há itens no carrinho de compra!"
            }
            else{
                for (let i = 0; i<itens.length; i++)
                {
                    item_props = itens[i].split(",")
                    if (item_props.length <=1){

                    }
                    code = item_props[0]
                    
                    product = this.productValidator(code)
                    if (!product){
                        result = "Item inválido!"
                        break
                    }
                    prod_list.push(code)
                    if (product.extra){
                        let search = prod_list.includes(product.extra_de)
                        if (search === false){
                            result = "Item extra não pode ser pedido sem o principal"
                            break
                        }
                    }
                    quant = this.checkQuantity(parseInt(item_props[1]))
                    if (!quant){
                        result = "Quantidade inválida!"
                        break
                    }
                    result += product.valor * quant
                }
            }
            if (typeof result === "number"){
                return this.MoneyFormater(result, forma)
            }
        }
        return result;
    }
}
export { CaixaDaLanchonete };
