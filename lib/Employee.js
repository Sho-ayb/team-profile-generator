// TODO: Write code to define and export the Employee class

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = "Employee";
  }

  // class method to return the Employee name

  getName() {
    const employeeName = this.name;
    return employeeName;
  }

  // class method to return the Employee id

  getId() {
    const employeeId = this.id;
    return employeeId;
  }

  // class method to return the Employee email address

  getEmail() {
    const employeeEmail = this.email;
    return employeeEmail;
  }

  // class method to return the role

  getRole() {
    const employeeRole = this.role;

    return employeeRole;
  }
}

module.exports = Employee;
