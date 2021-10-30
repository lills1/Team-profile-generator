const { expect } = require("@jest/globals");
const Manager = require("../lib/Manager");

test("Testing the properties of Manager", () => {
    const manager = new Manager("name", 4, "email", 123)
    // expect(employee).toExpect(expect.any(Object));
    expect(manager.name).toBe("name");
    expect(manager.id).toBe(4);
    expect(manager.email).toBe("email");
    expect(manager.officenumber).toBe(123)
})

test("Testing the methods of Manager", () => {
    const method = new Manager("name", 4, "email")
    // expect(employee).toExpect(expect.any(Object));
    expect(method.getName()).toBe("name");
    expect(method.getId()).toBe(4);
    expect(method.getEmail()).toBe("email");
    expect(method.getRole()).toBe("Manager");

})