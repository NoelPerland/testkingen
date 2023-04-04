const {
  add,
  multiply,
  subtract,
  divide,
  filterArrayByUserFriends,
} = require("./functions");

describe("Testing my functions", () => {
  it("Should only return names of user's friends from the array of all the names", () => {
    const user = {
      name: "Nolle",
      age: 24,
      friends: ["Alex", "Emil", "Kenta", "Julia"],
    };
    const array = [
      "Dante",
      "Alex",
      "Bahar",
      "Emil",
      "Olli",
      "Hoffe",
      "Shai",
      "Simme",
    ];
    const result = filterArrayByUserFriends(user, array);

    expect(result).toEqual(["Alex", "Emil"]);
  });
  it("Should thorw error if user or array is omitted", () => {
    expect(() => {
      filterArrayByUserFriends();
    }).toThrow();
  });

  it("Adding 5 and 10 should equal 15", () => {
    const sum = add(5, 10);
    expect(sum).toBe(15);
  });
  it("multiplying 5 and 10 should equal 50", () => {
    const sum = multiply(5, 10);
    expect(sum).toBe(50);
  });
  //   it("subtract 5 and 10 should equal -5", () => {
  //     const sum = subtract(5, 10);
  //     expect(sum).toBe(-5);
  //   });
  //   it("divide 5 and 10 should equal 0.5", () => {
  //     const sum = divide(5, 10);
  //     expect(sum).toBe(0.5);
  //   });
});
