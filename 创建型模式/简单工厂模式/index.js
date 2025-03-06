/*
 * @Author: chb
 * @Date: 2025-03-06 15:59:57
 * @Description: 
 */
// 抽象产品 - 图形
class Shape {
    draw() {
        throw new Error('抽象产品不能直接使用');
    }
}

// 具体产品 - 圆形
class Circle extends Shape {
    draw() {
        console.log('绘制圆形');
    }
}

// 具体产品 - 矩形
class Rectangle extends Shape {
    draw() {
        console.log('绘制矩形');
    }
}

// 具体产品 - 三角形
class Triangle extends Shape {
    draw() {
        console.log('绘制三角形');
    }
}

// 工厂类
class ShapeFactory {
    createShape(type) {
        switch (type) {
            case 'circle':
                return new Circle();
            case 'rectangle':
                return new Rectangle();
            case 'triangle':
                return new Triangle();
            default:
                throw new Error('无效的图形类型');
        }
    }
}

// 客户端代码
const factory = new ShapeFactory();
const circle = factory.createShape('circle');
const rectangle = factory.createShape('rectangle');
const triangle = factory.createShape('triangle');

circle.draw();      // 输出：绘制圆形
rectangle.draw();   // 输出：绘制矩形
triangle.draw();    // 输出：绘制三角形