// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return $ { this.name.first };
    }

    getEmail() {
        return $ { this.email };
    }
}

module.exports = Employee;