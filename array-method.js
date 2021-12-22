// map(): map nhận một callback là đối số , Callback sau đó được đưa ra giá trị hiện tại của phép lặp,
// index của vòng lặp và mảng ban đầu mà từ đó map được gọi
// Ngoài ra còn có 1 đối số thứ 2 tuỳ chọn cho map ( sau khi gọi lại ) đó là giá trị để sử dụng "this" bên trong callback

// find() kiểm tra xem có phtu tmđk thì dừng luôn => trả về 1 đối tg

// filter(): filter nhận các đối số giống như map và hoạt động rất giống nhau.
// Sự khác biệt duy nhất là callback cần trả về true hoặc false,
// nếu nó là true mảng không thay đổi nếu là false phần tử đó sẽ được lọc ra khỏi mảng ban đầu .

// reduce(): khá giống với map và filter nhưng hơi khác ở đối số callback.
// Callback bây giờ nhận bộ tích luỹ ( nó tích luỹ tất cả các giá trị trả về.
// Giá trị của nó là sự tích luỹ của các tích luỹ trả về trước đó ) giá trị hiện tại,
// index hiện tại và cuối cùng là toàn bộ mảng .

// map()
const arrayMap = [1, 4, 9, 16];
// pass a function to map
const map1 = arrayMap.map((x) => x * 2);
console.log(map1); // expected output: Array [2, 8, 18, 32]

// find()
const arrayFind = [5, 12, 8, 130, 44];
const found = arrayFind.find((element) => element > 10);
console.log(found); // expected output: 12

// filter()
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
const result = words.filter((word) => word.length > 6);
console.log(result); // expected output: Array ["exuberant", "destruction", "present"]

// reduce()
const arrayReduce = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;
// 1 + 2 + 3 + 4

console.log(arrayReduce.reduce(reducer)); // expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(arrayReduce.reduce(reducer, 5)); // expected output: 15

// findIndex()
const arrayFindIndex = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(arrayFindIndex.findIndex(isLargeNumber));
// expected output: 3
