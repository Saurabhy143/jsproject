let Data = "users data"
class Users{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("data = ", Data)
    }
}

class Admin extends Users{
    constructor(name, email){
        super(name, email)
    }
editData(){
        Data = "changed users data"
        console.log(Data)
    }
}

let student1 = new Users("saurabh", "abc@gamil.com")
let student2 = new Users("gaurav", "xyz@gamil.com")

let teacher1 = new Users("Teacher", "zyx@gmail.com")

let admin1 = new Admin("admin ", "admin@gmail.com")