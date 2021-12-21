// Arrow Function là một trong những tính năng mới và rất hay của ES6
// Do đó nó được thừa hưởng những tính năng mới của ES6

// Với arrow function ta có thể bỏ qua từ khoá return
// VD: arrow function
double = (x) => x * 2;
// VD: function
function double(x) {
  return x * 2;
}

// Ngoài ra, ta còn sử dụng được arrow function trong trường hợp: map, filter, forEach,...
const numbers = [1, 2, 3, 4];
const newArray = numbers.map((item) => item * 2);
console.log(newArray); // 2 4 6 8
