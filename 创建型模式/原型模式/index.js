/*
 * @Author: chb
 * @Date: 2025-03-06 16:34:15
 * @Description: 
 */
// 假设我们正在开发一个在线画板应用程序，用户可以在画板上绘制不同类型的图形，例如矩形、圆形和椭圆。我们可以使用原型模式来创建不同类型的图形对象。

class Shape {
  constructor() {
    this.type = "";
  }

  clone() {
    throw new Error("抽象方法不可以直接调用");
  }

  draw() {
    console.log(`绘制${this.type}`);
  }
}

class Rectangle extends Shape {
  constructor() {
    super();
    this.type = "【矩形】";
  }
  clone() {
    return Object.create(this);
  }
}
// 具体原型 - 圆形
class Circle extends Shape {
  constructor() {
    super();
    this.type = "【圆形】";
  }

  clone() {
    return Object.create(this);
  }
}

// 具体原型 - 椭圆
class Ellipse extends Shape {
  constructor() {
    super();
    this.type = "【椭圆】";
  }

  clone() {
    return Object.create(this);
  }
}

const rectangle = new Rectangle()

const cloneRectangle = rectangle.clone()

cloneRectangle.draw()