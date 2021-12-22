// map() lặp qua từng phtu trong mảng nhưng trả về mảng mới vs số lượng phtu bằng vs số lg phtu mảng cũ
// find() kiểm tra xem có phtu tmđk thì dừng luôn => trả về 1 đối tg
// filter() giống find nhưng trả về tất cả phtu tmdk => trả về tất cả đối tg
// reduce() thực thi 1 hàm lên các phtu trong mảng và trả về gtrị duy nhất => gtri trả về là gtri accumulator sau lần callback cuối cùng. gtrị khởi tạo initialvalue chính là gtri cho accumulator trong lần gọi đầu của callback và nếu k set gtri thì accumulator là phtu đầu tiên trong arr

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
