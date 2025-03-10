<!--
 * @Author: chb
 * @Date: 2025-03-06 16:33:39
 * @Description: decs
-->
# 原型模式概述  

原型模式属于创建型设计模式的一种，它通过复制现有对象来创建新对象，而无需依赖具体类。原型模式由两个主要角色组成：

- 原型（Prototype）：定义了一个克隆自身的接口，可以是一个抽象类或接口。
- 具体原型（Concrete Prototype）：实现了原型接口的具体对象，负责实现克隆方法来复制自身。


原型模式通过复制现有对象来创建新对象，避免了使用传统的实例化方式，从而提高了对象的创建效率。在前端开发中，原型模式常用于创建复杂的对象或组件，以减少重复的初始化过程，提高性能和代码复用性。