interface Product {
  name: string;
  price: number;
  producer: string;
}

interface Order {
  date: Date;
  amount: number;
  deliveryAddress: string;
  paymentToken: number;
  stateOfpayment: boolean;
  products: Product[];
}

class CopyOrder implements Order {
  public date: Date;
  public amount: number;
  public deliveryAddress: string;
  public paymentToken: number;
  public stateOfpayment: boolean;
  public products: Product[];

  constructor(order: Order) {
    this.date = order.date;
    this.amount = order.amount;
    this.deliveryAddress = order.deliveryAddress;
    this.paymentToken = order.paymentToken;
    this.stateOfpayment = false;
    this.products = order.products.map((p) => ({ ...p }));
  }

  clone(): Order {
    return new CopyOrder(this);
  }
}

const userOrder: Order = {
  date: new Date(),
  amount: 2380,
  deliveryAddress: "123 Main St.",
  paymentToken: 427846727424768,
  stateOfpayment: true,
  products: [
    { name: "Apple Watch SE", price: 360, producer: "Apple" },
    { name: "Sony LinkBuds", price: 250, producer: "Sony" },
    { name: "Samsung Galaxy S22 8/256GB", price: 900, producer: "Samsung"},
    { name: "Yamaha Set NS-51", price: 520, producer: "Yamaha"},
    { name: "Canon EOS 4000D BK 18-55", price: 350, producer: "Canon"},
  ],
};

const copyOrder = new CopyOrder(userOrder).clone();


console.log("User order:", userOrder);
console.log("Copy of the order:", copyOrder);
