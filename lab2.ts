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
const ALL_PRODUCTS = 5;
let THE_NUMBER_OF_PRODUCT_ORDERS = 3;

class AllProducts {
    name: NameOfProduct;
    price: PriceOfProduct;
    
    constructor(name: NameOfProduct, price: PriceOfProduct){
        this.name = name;
        this.price = price;
    }

}

enum AllTerminsOfCredit {
    ThreeMonth = 3,
    SixMonth = 6,
    NineMonth = 9,
    TwelveMonth = 12,
}

class BuyersOrder extends AllProducts {
    constructor(...params: ConstructorParameters<typeof AllProducts>) {
        super(...params);
    }

    getProductByName() {
        let getproduct = NameOfProduct.Headphones;
        return getproduct;
    }

    cardPaymentForOneProduct() {
        let getpriceone = "Total sum = " + PriceOfProduct.Third_Pr;
        return getpriceone;
    }

    cardPaymentForACoupleOfGoods () {
        let getprice = PriceOfProduct.Third_Pr;
        let amount = 0;
        for (let i = 0; i < THE_NUMBER_OF_PRODUCT_ORDERS; i++) {
            amount += getprice;
        }
        return amount;
    }

    paymentOnCredit(gettermin: AllTerminsOfCredit.SixMonth) {
        let graphic = '';
        let percent = 15;
        let getfullpricewithpercent = ((this.cardPaymentForACoupleOfGoods() * 15) / 100) + this.cardPaymentForACoupleOfGoods();
        let getpriceofmonth = getfullpricewithpercent / gettermin;
        for (let i = 1; i < gettermin + 1; i++) {
            graphic += '\n' + i  + '-month = ' + getpriceofmonth;
        }
        let payment = graphic + '\n' + percent + '%' + '\n' + gettermin + 'months';      
        return payment;
    }

    discountOnGoods(discount1: PriceOfProduct.Fifth_Pr, discount2: PriceOfProduct.Second_Pr) {
        let now = new Date();
        let newprice1, newprice2;
        let percent1 = 15;
        let percent2 = 20;
        if (now == date1 && now < date2) {
            newprice1 = discount1 - (discount1 * percent1) / 100;
            newprice2 = discount2 - (discount2 * percent2) / 100;
        }
    }

    PaymentInInstallments(gettermin: AllTerminsOfCredit.SixMonth) {
        let paymentininstallments = this.cardPaymentForACoupleOfGoods() / gettermin;
        let pay = 'Payment is' + paymentininstallments + 'per month';
        return pay;
    }

}

const someorder = new BuyersOrder(NameOfProduct.Headphones, PriceOfProduct.Third_Pr);

type SingleOrder = {
    product: NameOfProduct;
    price:  PriceOfProduct;
    payment: any;
}

const singleorder: SingleOrder = {
    product: NameOfProduct.Headphones,
    price: PriceOfProduct.Third_Pr,
    payment: someorder.cardPaymentForOneProduct(),
}
}
