// Enhanced object literals giúp chúng ta
// 1. Định nghĩa key: value cho object
// 2. Định nghĩa method cho object
// 3. Định nghĩa key cho object dưới dạng biến

// VD: object thường
let name = "Javascript";
let price = 1000;

const course = {
  name: name,
  price: price,
  getName: function () {
    return name;
  },
};

// VD: khi dùng object literals
const course2 = {
  name,
  price,
  getName() {
    return name;
  },
};
