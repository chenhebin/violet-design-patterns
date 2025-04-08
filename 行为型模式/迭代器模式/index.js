/*
 * @Author: chb
 * @Date: 2025-04-07 16:36:30
 * @Description: 
 */
class CommonIterator {
    hasNext () {
        console.log('抽象方法不可以调用');
    }
    next () {
        console.log('抽象方法不可以调用');
    }
}

class TaskIterator extends CommonIterator {
    constructor (task) {
        super()
        this.task = task
        this.currentIndex = 0
    }

    hasNext () {
        return this.currentIndex < this.task.length
    }

    next () {
        return this.task[this.currentIndex ++]
    }
}

class openIterator {
    constructor (task) {
        this.task = task || []
    }

    addTask (task) {
        this.task.push(task)
    }

    generateIterator () {
        return new TaskIterator(this.task)
    }
}
const obj = new openIterator()
obj.addTask('hello')
obj.addTask('chenhebin')

const iteratorObj = obj.generateIterator()

while (iteratorObj.hasNext()) {
    const _temp = iteratorObj.next()
    console.log(_temp);
    
}