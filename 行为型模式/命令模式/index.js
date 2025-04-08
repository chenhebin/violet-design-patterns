
class Command {
    execute () {
        console.log('抽象方法不可以直接调用');
    }
}

class RunCommand extends Command {
    constructor (user) {
        super()
        this.user = user
    }
    execute () {
        this.user.run()
    }
}
class FlyCommand extends Command {
    constructor (user) {
        super()
        this.user = user
    }
    execute () {
        this.user.fly()
    }
}
class BreathCommand extends Command {
    constructor (user) {
        super()
        this.user = user
    }
    execute () {
        this.user.breath()
    }
}

class Button {
    constructor (command) {
        this.command = command
    }

    click () {
        this.command.execute()
    }
}
class RealLogicalMap {
    run () {
        console.log('奔跑ing');
    }
    fly () {
        console.log('飞翔ing');
    }
    breath () {
        console.log('呼吸ing');
    }
}
const realLogical = new RealLogicalMap()
const run = new RunCommand(realLogical)
const fly = new FlyCommand(realLogical)
const breath = new BreathCommand(realLogical)

const runBtn = new Button(run)
const flyBtn = new Button(fly)
const breathBtn = new Button(breath)

runBtn.click()
flyBtn.click()
breathBtn.click()
