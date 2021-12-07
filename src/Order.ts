import isCPFValid from './isCPFValid'
import Items from './types'

export default class Order {
    customerCPF: string
    totalAmount: number = 0
    items: Items[] = []

    constructor(customerCPF: string){
        this.customerCPF = customerCPF
    }

    createOrderItems(items: Items[]){
        if(!isCPFValid(this.customerCPF)) return "Invalid CPF"
        items.forEach((item, index) => {
            item.id = index
            this.totalAmount += ( item.price * item.quantity ) 
            this.items.push(item) 
        })

        return `${items.length} Items were created for this Order`
    }

    applyDiscount(percentual: number){
        this.totalAmount -= (this.totalAmount * percentual / 100) 
        return "Discount cupom was applied"
    }
}