// 产品 - 表单
class Form {
    constructor() {
        this.fields = [];
    }

    addField(field) {
        this.fields.push(field);
    }

    show() {
        console.log('生成的表单：');
        this.fields.forEach((field) => {
            console.log(field);
        });
    }
}

// 抽象建造者
class FormBuilder {
    constructor() {
        this.form = new Form();
    }

    buildTextField() {
        throw new Error('抽象方法不能直接调用');
    }

    buildCheckbox() {
        throw new Error('抽象方法不能直接调用');
    }

    getResult() {
        return this.form;
    }
}

// 具体建造者 - 文本表单建造者
class TextFormBuilder extends FormBuilder {
    buildTextField() {
        this.form.addField('文本字段');
        return this; // 支持链式调用
    }

    buildCheckbox() {
        // 文本表单建造者不支持复选框
        return this;
    }
}

// 具体建造者 - 复选表单建造者
class CheckFormBuilder extends FormBuilder {
    buildTextField() {
        // 复选表单建造者不支持文本字段
        return this;
    }

    buildCheckbox() {
        this.form.addField('复选框');
        return this; // 支持链式调用
    }
}

// 指挥者
class FormDirector {
    constructor(builder) {
        this.builder = builder;
    }

    constructTextForm() {
        return this.builder.buildTextField().getResult();
    }

    constructCheckForm() {
        return this.builder.buildCheckbox().getResult();
    }

    constructMixedForm() {
        return this.builder
            .buildTextField()
            .buildCheckbox()
            .getResult();
    }
}
/**
 * 以下部分都是可以提前执行预设，使用者只需要关注具体的业务逻辑即可
 * 例如：constructTextForm方法的设计调用逻辑，这就是建造者模式的核心
 * 这样的设计使得客户端代码更加简洁，并且可以轻松地创建不同类型的表单。
 * 同时，建造者模式也支持链式调用，使得客户端代码更加灵活。
 */
/****************************  begin ****************************/
// 客户端代码
const textBuilder = new TextFormBuilder();
const checkBuilder = new CheckFormBuilder();

// 创建纯文本表单
const textDirector = new FormDirector(textBuilder);
const checkDirector = new FormDirector(checkBuilder);

/****************************  end  ****************************/

const textForm = textDirector.constructTextForm();
textForm.show();

// 创建纯复选框表单
const checkForm = checkDirector.constructCheckForm();
checkForm.show();

// 创建混合表单(使用支持两种组件的建造者)
const mixedBuilder = new class extends FormBuilder {
    buildTextField() {
        this.form.addField('文本字段');
        return this;
    }

    buildCheckbox() {
        this.form.addField('复选框');
        return this;
    }
};

const mixedDirector = new FormDirector(mixedBuilder);
const mixedForm = mixedDirector.constructMixedForm();
mixedForm.show();