exports.filterArrayByUserFriends = function (user, names) {
  if (!user || !names) {
    throw new Error();
  }
  return names.filter((name) => user.friends.includes(name));
  const filteredArray = [];

  //   for (const name of names) {
  //     if (user.friends.includes(name)) {
  //       filteredArray.push(name);
  //     }
  //   }
  //   return filteredArray;
};

exports.add = function add(x, y) {
  return x + y;
};

exports.multiply = function multiply(x, y) {
  return x * y;
};

// exports.subtract = function subtract(x, y) {
//   return x - y;
// };

// exports.divide = function divide(x, y) {
//   return x / y;
// };
