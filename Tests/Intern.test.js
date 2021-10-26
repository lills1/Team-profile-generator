const { expect } = require("@jest/globals");
const Intern = require("../lib/Intern");
test("Testing the properties of Intern", () => {
    const intern = new Intern("name", 4, "email")
    // expect(employee).toExpect(expect.any(Object));
    expect(intern.name).toBe("name");
    expect(intern.id).toBe(4);
    expect(intern.email).toBe("email");
})

test("Testing the methods of Intern", () => {
    const method = new Intern("name", 4, "email")
    // expect(employee).toExpect(expect.any(Object));
    expect(method.getName()).toBe("name");
    expect(method.getId()).toBe(4);
    expect(method.getEmail()).toBe("email");
    expect(method.getRole()).toBe("Intern");

})