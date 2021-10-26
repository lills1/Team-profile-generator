const { expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");
test("Testing the properties of Engineer", () => {
    const engineer = new Engineer("name", 4, "email")
    // expect(employee).toExpect(expect.any(Object));
    expect(engineer.name).toBe("name");
    expect(engineer.id).toBe(4);
    expect(engineer.email).toBe("email");
})

test("Testing the methods of Engineer", () => {
    const method = new Engineer("name", 4, "email")
    // expect(employee).toExpect(expect.any(Object));
    expect(method.getName()).toBe("name");
    expect(method.getId()).toBe(4);
    expect(method.getEmail()).toBe("email");
    expect(method.getRole()).toBe("Engineer");

})