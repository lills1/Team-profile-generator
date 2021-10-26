const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee");
test("Testing the properties of Employee", () => {
    const employee = new Employee("name", 4, "email")
    // expect(employee).toExpect(expect.any(Object));
    expect(employee.name).toBe("name");
    expect(employee.id).toBe(4);
    expect(employee.email).toBe("email");
})

test("Testing the methods of Employee", () => {
    const method = new Employee("name", 4, "email")
    // expect(employee).toExpect(expect.any(Object));
    expect(method.getName()).toBe("name");
    expect(method.getId()).toBe(4);
    expect(method.getEmail()).toBe("email");
    expect(method.getRole()).toBe("Employee");

})