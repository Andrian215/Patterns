const date = new Date('2022-10-22T14:42');

let amountorder: number;
amountorder = 2380;

let adress: {
    name: string;
    street: string;
    settlement: string;
    region: string;
    country: string;
    zip_code: number;
}

adress = {
    name: 'Artur Howard',
    street: 'Pleasant_Ct',
    settlement: 'Yorkville',
    region: 'Illinois',
    country: 'USA',
    zip_code: 60560,
}

class Token {
    protected payment_token: number;

    constructor(payment_token: number) {
        this.payment_token = payment_token;
    }

    returnToken(): Number {
        return this.payment_token;
    }
}

type paymentStatusOfTheGoods = {
    status: boolean;
}

type Product = {
    name_of_product: string;
    count: number;
    producer: string;
}

class AllProducts {
    goods: Product[];
    constructor(goods: Product[]){
        this.goods = goods;
    }
} 


const list_of_goods: (AllProducts)[] = [
    new AllProducts([
        {
            name_of_product: 'Apple Watch SE',
            count: 360,
            producer: 'Apple',
        },
        {
            name_of_product: 'Sony LinkBuds',
            count: 250,
            producer: 'Sony',
        },
        {
            name_of_product: 'Samsung Galaxy S22 8/256GB',
            count: 900,
            producer: 'Samsung',
        },
        {
            name_of_product: 'Yamaha Set NS-51 ',
            count: 520,
            producer: 'Yamaha',
        },
        {
            name_of_product: 'Canon EOS 4000D BK 18-55 ',
            count: 350,
            producer: 'Canon',
        }
    ])
]

class UserOrder {
    order_date = date;
    amount = amountorder;
    get_adress = adress;
    secret_token: Token;
    status: paymentStatusOfTheGoods;
    all_goods: AllProducts;

    constructor(order_date , get_adress, amount = amountorder, secret_token: Token, status: paymentStatusOfTheGoods, all_goods: AllProducts){
        this.order_date = order_date;
        this.amount = amount;
        this.get_adress = get_adress;
        this.secret_token = secret_token;
        this.status = status;
        this.all_goods = all_goods;
    }

    save() {
        let params = [this.order_date, this.amount, this.get_adress, this.secret_token, this.status, this.all_goods];
        return params;
    }
}

class CopyUserOrder {
    private copy: UserOrder;
    statusOfpayment: paymentStatusOfTheGoods;

    constructor(copy: UserOrder, statusOfpayment: paymentStatusOfTheGoods) {
        this.copy = copy;
        this.statusOfpayment = statusOfpayment;
    }

    backup(): void {
        this.copy.save();
    }

    paymentStatus() {
        this.statusOfpayment.status = false;
        return this.statusOfpayment;
    }
}
