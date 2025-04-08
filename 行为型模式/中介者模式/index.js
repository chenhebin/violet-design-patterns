/*
 * @Author: chb
 * @Date: 2025-04-08 16:26:01
 * @Description: 
 */
class ChatRoom {
    constructor () {
        this.users = {}
    }

    register (user) {
        this.users[user.name] = user
        user.setMediaRoom(this)
    }

    sendMessage(from, to, message) {
        const recipient = this.users[to]
        if (recipient) {
            recipient.receive(from, message)
        } else {
            Object.keys(this.users).forEach(name => {
                if (name !== from) this.users[name].receive(from, message)
            })
        }
    }
}

class User {
    constructor (name) {
        this.name = name
        this.mediaRoom = null
    }
    setMediaRoom (media) {
        this.mediaRoom = media
    }

    send (to = '', message,) {
        console.log(`[${this.name}] 发送给 [${to ? to : '广播厅'}]: ${message}`)
        this.mediaRoom.sendMessage(this.name, to, message)
    }

    receive (from = '', message) {
        console.log(`[${this.name}] 收到来自 [${from}] 的消息：${message}`)
    }
}

const user1 = new User('violet')
const user2 = new User('舔狗1号')
const user3 = new User('舔狗2号')
const user4 = new User('舔狗3号')

const chatRoom = new ChatRoom()

chatRoom.register(user1)
chatRoom.register(user2)
chatRoom.register(user3)
chatRoom.register(user4)

user1.send('','你好，舔狗们！！！叫父王！')

user2.send('violet', 'cnm，小爷是战狼')