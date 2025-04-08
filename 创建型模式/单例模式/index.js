// 单例类 - 购物车
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  showItems() {
    console.log('购物车中的物品：');
    this.items.forEach((item) => {
      console.log(item);
    });
  }
}

// 实例化方法 - 获取购物车实例
class ShoppingCartSingleton {
  static getInstance() {
    if (!ShoppingCartSingleton.instance) {
      ShoppingCartSingleton.instance = new ShoppingCart();
    }
    return ShoppingCartSingleton.instance;
  }
}

// 客户端代码
const cart1 = ShoppingCartSingleton.getInstance();
const cart2 = ShoppingCartSingleton.getInstance();

cart1.addItem('商品A');
cart2.addItem('商品B');

cart1.showItems(); // 输出：购物车中的物品：商品A 商品B
cart2.showItems(); // 输出：购物车中的物品：商品A 商品B