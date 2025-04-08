/*
 * @Author: chb
 * @Date: 2025-04-07 16:36:30
 * @Description: demo
 */
class Validator {
  constructor() {
    this.next = null;
  }

  setNext(next) {
    this.next = next;
  }

  handleRequest(args) {
    if (this.validate(args)) {
      console.log("passed !");
    } else if (this.next) {
      this.next.handleRequest(args);
    } else {
      console.log("validate failed");
    }
  }
  validate(args) {
    throw new Error("abstract is not run");
  }
}

// 具体处理者
class UsernameValidator extends Validator {
  validate(data) {
    console.log('username 校验开始');
    const username = data.username;
    return username && username.length >= 3 && username.length <= 20;
  }
}

class PasswordValidator extends Validator {
  validate(data) {
    const password = data.password;
    console.log('pass 校验开始', password && password.length >= 6);
    return password && password.length >= 6;
  }
}

const userValid = new UsernameValidator()
const passValid = new PasswordValidator()

userValid.setNext(passValid)

userValid.handleRequest({
    username: '1',
    password: '123123123'
})