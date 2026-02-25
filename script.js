class library {
    constructor(bookname) {
        this.bookname = bookname;
    }
    use() {
        return this.bookname + " and his adventures";
        console.log("used");

    }
}

let book = new library("neel");
console.log(book.use());


class user extends library {
    constructor(bookname, email) {
        super(bookname);
        this.email = email;
    }
    login() {
        return this.use();
    }
}

let user1 = new user();