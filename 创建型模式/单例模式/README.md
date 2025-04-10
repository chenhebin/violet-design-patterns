单例模式属于创建型设计模式，它通过限制一个类只能创建一个实例来确保全局只有一个访问点。单例模式由以下几个主要角色组成：

单例类（Singleton Class）：表示单例对象的类，它只能创建一个实例，并提供一个访问该实例的方法。
实例化方法（Instance Method）：用于获取单例类的实例的方法，通常为静态方法。
单例模式可以保证全局只有一个实例存在，避免了多个实例的创建和资源的浪费。在前端开发中，单例模式常用于管理全局状态、共享资源或限制某个类的实例化次数。