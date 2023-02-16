const date = new Date('2022-10-22T14:42');

let amountorder: number;
amountorder = 2380;

type Adress =  {
    name: string, 
    street: string, 
    settlement: string, 
    region: string, 
    country: string, 
    zip_code: number,
}

class GetAdress {
    adress: Adress[]
    constructor(adress: Adress[]){
        this.adress = adress;
    }

}

let adress: (Adress) = 
{
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

class paymentStatusOfTheGoods{
    status: boolean;
    constructor(status) {
        this.status = status;
    }
    returnStatus() {
        return this.status;
    }
}

type Product = {
    name_of_product: string;
    count: number;
    producer: string;
}

class AllProducts {
    list_of_goods: Product[];
    constructor(list_of_goods: Product[]){
        this.list_of_goods = list_of_goods;
    }
}

let list_of_goods: (AllProducts)[] = [
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
        },
        
        
    ])
]

class UserOrder {
    order_date = date;
    amount = amountorder;
    get_adress: Adress;
    secret_token: Token;
    status: paymentStatusOfTheGoods;
    all_goods: Product[];

    constructor(order_date , amount = amountorder, get_adress, secret_token, status, all_goods){
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

    paymentStatus() {
        return this.status;
    }
}
        
class CopyUserOrder {
    private copy: UserOrder;

    constructor(copy: UserOrder) {
        this.copy = copy;
    }

    backup() {
        let get_copy = this.copy.save();
        return get_copy;
    }

    paymentStatus() {
        return false;
    }
}

const token = 42784672742476824;
const secrettoken = new Token(token);
let st = false;


let state_of_payment = new paymentStatusOfTheGoods(st);


const userorder = new UserOrder(
    date,
    amountorder,
    adress,
    secrettoken,
    state_of_payment,
    list_of_goods,
) 

const copyorder = new CopyUserOrder(userorder).backup();

console.log(userorder.save());
console.log(copyorder);
