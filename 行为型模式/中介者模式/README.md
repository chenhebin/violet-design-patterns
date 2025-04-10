<!--
 * @Author: chb
 * @Date: 2025-04-08 16:26:01
 * @Description: 
-->
## 引言
中介者模式（Mediator Pattern）是一种行为型设计模式，它通过封装一系列对象之间的交互，使得这些对象不需要直接相互引用，从而降低了它们之间的耦合度。在前端开发中，中介者模式常用于管理复杂的交互逻辑，促进组件之间的松耦合和可维护性。本文将介绍如何在前端中实现中介者模式，并提供具体的代码示例和解读。

## 中介者模式概述
中介者模式属于行为型设计模式，它通过引入一个中介者对象，将一组对象之间的交互逻辑集中处理，从而减少对象之间的直接依赖关系。中介者模式由以下几个主要角色组成：

- 中介者（Mediator）：定义了对象之间交互的接口，负责协调各个对象的交互关系。
- 具体中介者（Concrete Mediator）：实现了中介者接口，负责具体的交互逻辑。
- 同事对象（Colleague）：定义了对象之间交互的接口，与中介者进行通信。
- 具体同事对象（Concrete Colleague）：实现了同事对象接口，与其他同事对象通过中介者进行通信。
中介者模式的核心思想是将对象之间的交互逻辑集中到中介者对象中，使得对象之间不需要直接引用彼此，从而降低了耦合度。

