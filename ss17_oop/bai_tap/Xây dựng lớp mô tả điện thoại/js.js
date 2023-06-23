class Mobile {
    constructor(_name) {
        this.name = _name
        this.battery = 100; // pin
        this.draft = ""; // lưu tin nhắn soạn thảo
        this.inbox = []; // lưu tin nhắn trong hộp thư đến
        this.outbox = []; // lưu tin nhắn đã gửi
        this.status = true;
    }

    checkStatus() {
        return this.status;
    }

    onOff() {
        // đang bật -> tắt
        // đang tắt -> bật
        this.status = !this.status;
    }

    writting(text) {
        if (this.status) {
            this.draft = text;
            this.battery--;
        }
    }

    sendMessage(phone) {
        if (this.status) {
            // this: điện thoại hiện tại
            // phone: điện thoại gửi sang
            // 1. chuyển tin nhắn nháp của this -> hộp thư đến của phone
            phone.inbox.push(this.draft);
            // 2. chuyển tin nhắn nháp của this -> hộp thư đã gửi của this
            this.outbox.push(this.draft);
            // 3. xóa tin nhắn nháp
            this.draft = "";
            this.battery--;
        }
    }

    getInbox() {
        if (this.status) {
            this.battery--;
            return this.inbox;
        }
    }

    getOutbox() {
        if (this.status) {
            this.battery--;
            return this.outbox;
        }
    }
}

let dtCuaHuy = new Mobile("Huy");
let dtCuaPhuc = new Mobile("Phúc");

function guitinchoPhuc() {
    // b1: lấy giữ liệu
    let mess_1 = document.getElementById("mess1").value;
    // b2: gán vào thư nháp
    dtCuaHuy.writting(mess_1)
    // b3: gửi tin cho phúc
    dtCuaHuy.sendMessage(dtCuaPhuc)
    // hiển thị hộp thư đến của Phúc
    let inboxPhuc = dtCuaPhuc.inbox.join("-");
    document.getElementById("inbox2").innerText = inboxPhuc;
    document.getElementById("mess1").value = " ";
}

function guitinchoHuy() {
    // b1: lấy giữ liệu
    let mess_2 = document.getElementById("mess2").value;
    // b2: gán vào thư nháp
    dtCuaPhuc.writting(mess_2)
    // b3: gửi tin cho huy
    dtCuaPhuc.sendMessage(dtCuaHuy)
    // hiển thị hộp thư đến của Huy
    let inboxHuy = dtCuaHuy.inbox.join("-");
    document.getElementById("inbox1").innerText = inboxHuy;
    document.getElementById("mess2").value = " ";
}