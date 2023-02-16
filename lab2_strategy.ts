enum NameOfProduct {
    TV = "TV",
    TheTimes = "TheTimes",
    Headphones = "Headphones",
    Camera = "Camera",
    Laptop = "Laptop",
}

enum PriceOfProduct {
    First_Pr = 1200,
    Second_Pr = 250,
    Third_Pr= 120,
    Fourth_Pr = 700,
    Fifth_Pr = 950,
}

const date1 = new Date('December 24, 2022 00:00:00')
const date2 = new Date('December 31, 2022 00:00:00');

enum AllTerminsOfCredit {
    ThreeMonth = 3,
    SixMonth = 6,
    NineMonth = 9,
    TwelveMonth = 12,
}

class PaymentMethods {
    price: number;
    termin: AllTerminsOfCredit;
    
    constructor(price, termin){
        this.price = price;
        this.termin = termin;
    }

    paymentOnCredit() {
        let graphic = '';
        let percent = 15;
        let getfullpricewithpercent = ((this.price * percent) / 100) + this.price;
        let getpriceofmonth = getfullpricewithpercent / this.termin;
        for (let i = 1; i < this.termin + 1; i++) {
            graphic += '\n' + i  + '-month = ' + getpriceofmonth;
        }
        let payment = graphic + '\n' + percent + '%' + '\n' + this.termin + ' months';      
        return payment;
    }

    PaymentInInstallments() {
        let paymentininstallments = this.price / this.termin;
        let pay = 'Payment is ' + paymentininstallments + ' per month';
        return pay;
    }

    discountOnGoods() {
        let now = new Date();
        let newprice;
        let percent1 = 15;
        let percent2 = 20;
        if (now == date1 && now < date2) {
            newprice = this.price - (this.price * percent1) / 100;
        }

        return newprice;
    }

}

interface Strategy {
    paymentMethod(): number;
}

class BuyersOrderOfOneProduct implements Strategy {
    name: NameOfProduct;
    price: PriceOfProduct;
    methods_of_payment: PaymentMethods;

    constructor(name, price, methods_of_payment) {
        this.name = name;
        this.price = price;
        this.methods_of_payment = methods_of_payment;
    }

    getProductByName() {
        return this.name;
    }

    paymentMethod(): number {
        return this.price;
    }

    credit() {
        return this.methods_of_payment.paymentOnCredit();
    }

    inParts() {
        return this.methods_of_payment.PaymentInInstallments();
    }

}

class BuyersOrderOfSeveralGoods implements Strategy {
    name: NameOfProduct;
    price: PriceOfProduct;
    num_of_product_orders: number;
    methods_of_payment: PaymentMethods;
    
    constructor(name, price, num_of_product_orders, methods_of_payment){
        this.name = name;
        this.price = price;
        this.num_of_product_orders = num_of_product_orders;
        this.methods_of_payment = methods_of_payment;
    }

    getProductByName() {
        return this.name;
    }

    paymentMethod(): number {
        let amount = 0;
        for (let i = 0; i < this.num_of_product_orders; i++) {
            amount += this.price;
        }
        return amount;
    }

    credit() {
        return this.methods_of_payment.paymentOnCredit();
    }

    inParts() {
        return this.methods_of_payment.PaymentInInstallments();
    }

}

const product = NameOfProduct.Headphones;
const price_of_product = PriceOfProduct.Third_Pr;
const term = AllTerminsOfCredit.SixMonth;
let amount = Number(prompt('Enter amount of product: '));
while(amount <= 0) {
    amount = Number(prompt('Enter a number > 0: '));
}
let full_price = price_of_product * amount;

const test= new PaymentMethods(full_price, term);

const some_order = new BuyersOrderOfSeveralGoods(product, price_of_product, amount, test);
console.log(some_order.getProductByName());
console.log(some_order.paymentMethod());
console.log(some_order.credit());
