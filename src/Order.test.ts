import Order from './Order'
import Items from './types'

test("Não deve fazer um pedido com cpf inválido", function () {
    const customerCPF = '111.444.777-05';
    const order = new Order(customerCPF)
    const item: Items[] = [{
        description: '',
        price: 0,
        quantity: 0
    }]

    expect(order.createOrderItems(item)).toBe("Invalid CPF");
});

test("Deve fazer um pedido com 3 itens (com descrição, preço e quantidade)", function () {
    const customerCPF = '111.444.777-35';
    const order = new Order(customerCPF)
    const items: Items[] = [{
        description: 'Item 1',
        price: 10,
        quantity: 1
    },
    {
        description: 'Item 2',
        price: 20,
        quantity: 1
    },
    {
        description: 'Item 3',
        price: 40,
        quantity: 50
    }]

    expect(order.createOrderItems(items)).toBe("3 Items were created for this Order");
});

test("Deve fazer um pedido com cupom de desconto (percentual sobre o total do pedido)", function () {
    const customerCPF = '111.444.777-35';
    const order = new Order(customerCPF)
    const items: Items[] = [{
        description: 'Item 1',
        price: 10,
        quantity: 1
    },
    {
        description: 'Item 2',
        price: 20,
        quantity: 1
    },
    {
        description: 'Item 3',
        price: 40,
        quantity: 50
    }]

    order.createOrderItems(items)
    expect(order.applyDiscount(10.5)).toBe("Discount cupom was applied")
});