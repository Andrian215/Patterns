class Product {
  constructor(public name: string, public price: number) {}
}

class Order {
  private products: [Product, number][] = [];

  public addProduct(product: Product, numOfproduct: number) {
    this.products.push([product, numOfproduct]);
  }

  public calculateTotalPrice(): number {
    return this.products.reduce(
      (total, [product, numOfproduct]) => total + product.price * numOfproduct,
      0
    );
  }

  public Order(): void {
    console.log("Order:");
    this.products.forEach(([product, numOfproduct]) => {
      console.log(`${product.name} x ${numOfproduct} - ${product.price}$`);
    });
    console.log(`Total: ${this.calculateTotalPrice()}$`);
  }

  public pay(paymentStrategy: Strategy): void {
    paymentStrategy.pay(this.calculateTotalPrice());
  }
}

interface Strategy {
  pay(amount: number): void;
}

class CardPayment implements Strategy {
  public pay(amount: number): void {
    console.log(`Payment by credit card in the sum ${amount}$`);
  }
}

class CreditPayment implements Strategy {
  constructor(private readonly percent: number, private readonly term: number) {}

  public pay(amount: number): void {
    const monthlyPayment = (amount * (1 + this.percent)) / this.term;
    console.log(`Payment in credit: ${this.term} months for ${monthlyPayment}$`);
  }
}

const product1 = new Product("TV", 1200);
const product2 = new Product("TheTimes", 250);
const product3 = new Product("Headphones", 120);
const product4 = new Product("Camera", 700);
const product5 = new Product("Laptop", 950);

const order = new Order();
order.addProduct(product1, 2);
order.addProduct(product2, 5);
order.addProduct(product3, 3);
order.addProduct(product4, 2);
order.addProduct(product5, 1);

order.Order();

const cardPayment = new CardPayment();
order.pay(cardPayment);

const creditPayment = new CreditPayment(0.1, 12);
order.pay(creditPayment);

