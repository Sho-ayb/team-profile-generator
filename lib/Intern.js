// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

// requiring Employee parent class

const Employee = require("./Employee");

// creating the Intern class inherits from parent class Employee

class Intern extends Employee {
  constructor(name, id, email, school) {
    // setting up the parent class constructor properties

    super(name, id, email);

    // now can set this class properties

    this.school = school;

    // this 'this ref' will be override by this property

    this.role = "Intern";
  }

  // class method to return the school

  getSchool() {
    const employeeSchool = this.school;

    return employeeSchool;
  }
}

module.exports = Intern;
