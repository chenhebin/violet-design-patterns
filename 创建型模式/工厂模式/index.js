class Product {
    run () {
        throw new Error('抽象工厂不可以直接使用')
    }
}
class Dog extends Product {
    constructor (name) {
        super() // 调用父类构造函数
        this.name = name
    }
    run () {
        console.log('The dog name that running is:', this.name);
    }
}

class Cat extends Product {
    constructor (name) {
        super() // 调用父类构造函数
        this.name = name
    }
    run () {
        console.log('The cat name that running is:', this.name);
    }
}

class Factory {
    createIns (type, name) {
        switch (type) {
            case 'dog':
                return new Dog(name)
            case 'cat':
                return new Cat(name)
            default:
                throw new Error('工厂没这动物类型！')
        }
    }
}
const factory = new Factory()

const p = factory.createIns('dog', 'violet')
p.run()

