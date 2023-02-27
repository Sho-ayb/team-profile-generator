// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

// requiring Employee parent class

const Employee = require("./Employee");

// constructing the class with extends

class Engineer extends Employee {
  constructor(name, id, email, github) {
    // setting up the 'this ref' on all parent class constructor props using extends keyword

    super(name, id, email);

    // can now add the additions 'this ref' for github prop

    this.github = github;

    // the 'this ref' will be override by this property value

    this.role = "Engineer";
  }

  getGithub() {
    const githubUser = this.github;

    return githubUser;
  }
}

module.exports = Engineer;
