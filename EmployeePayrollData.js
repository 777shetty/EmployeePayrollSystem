class EmployeePayrollData {

    id;
    salary;
    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
    }
    get name() { return this._name; }
    set name(name) {
        this._name = name;
    }

    toString() {
        return "id="+ this.id +", name="+ this.name +", salary="+ this.salary;
    }
}

let employeePayrollData = new EmployeePayrollData(1, "Chethan", 40000);
console.log(employeePayrollData.toString());
employeePayrollData.name = "Arjun";
console.log(employeePayrollData.toString());