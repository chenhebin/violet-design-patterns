/*
 * @Author: chb
 * @Date: 2025-03-27 10:31:40
 * @Description: 手写实现建造者模式
 */
class Form {
    constructor () {
        this.fields = []
    }

    addField (filed) {
        this.fields.push(filed)
    }

    show () {
        console.log('======生成的表单：=====')
        for (let i of this.fields) {
            console.log(i)
        }
    }
}

class FormBuilder {
    constructor () {
        this.form = new Form()
    }

    addTextField () {
        throw new Error('抽象方法不能直接调用')
    }
    addCheckBoxField () {
        throw new Error('抽象方法不能直接调用')
    }

    getResult () {
        return this.form
    }
}

class TextFormBuilder extends FormBuilder {
    constructor () {
        super ()
    }
    addTextField () {
        this.form.addField('文本组件创建')
        return this
    }

    addCheckBoxField () {
        return this
    }
}
class CheckBoxFormBuilder extends FormBuilder {
    constructor () {
        super ()
    }
    addTextField () {
        return this
    }

    addCheckBoxField () {
        this.form.addField('复选框组件创建')
        return this
    }
}

class FormGenerate {
    constructor (builder) {
        this.builder = builder
    }

    constructTextForm () {
        return this.builder.addTextField().getResult()
    }

    constructCheckboxForm () {
        return this.builder.addCheckBoxField().getResult()
    }

    constructMixedForm () {
        return this.builder.addTextField().addCheckBoxField().getResult()
    }
}

const textBuilder = new TextFormBuilder()
const checkboxBuilder = new CheckBoxFormBuilder()

const textGenerate = new FormGenerate(textBuilder)
const checkboxGenerate = new FormGenerate(checkboxBuilder)

textGenerate.constructTextForm().show()
checkboxGenerate.constructCheckboxForm().show()


// 混合表单
const mixedBuilder = new class extends FormBuilder {
    addTextField() {
        this.form.addField('mapCon组件注册');
        return this;
    }

    addCheckBoxField() {
        this.form.addField('coll组件注册');
        return this;
    }
}
const mixedFormGenerate = new FormGenerate(mixedBuilder)
mixedFormGenerate.constructMixedForm().show()