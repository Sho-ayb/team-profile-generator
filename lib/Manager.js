// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

// requiring Employee class

const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    // using super keyword to setup 'this ref'

    super(name, id, email);

    // setting up the 'this ref' on the additional constructor property

    this.officeNumber = officeNumber;

    // the 'this ref' will override the 'this.role' within parent class
    this.role = "Manager";
  }

  getOfficeNumber() {
    const managerOfficeNumber = this.officeNumber;

    return managerOfficeNumber;
  }
}

module.exports = Manager;
