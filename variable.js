// - chúng ta có 3 cách khai báo biến trong js:
// + var: variable
// + let
// + const
// Trong js, tên biến có phân biệt chữ hoa và chữ thường và bao gồm cả chữ và số
// nhưng kí tự đầu tiên phải là chữ hoặc dấu gạch dưới
// Quy tắc đặt tên biếncủa js là camelCase

// 1. var
// - Các biến được khai báo bằng từ khóa var có phạm vi function
// có nghĩa là những biến này chỉ có thể được truy cập trong hàm mà chúng được khai báo.
// Khai báo biến bằng từ khóa var có thể gán lại được giá trị cho chúng

// VD:
// function showName() {
//   var name = "Nguyễn Văn A";
// }
// console.log(name); // name is not defined

// 2. let
// Các biến được khai báo bằng let có phạm vi block có nghĩa là các biến đó
// sẽ chỉ có thể truy cập được bên trong block mà chúng được khai báo chứ không phải bên ngoài block đó.
// Khai báo biến bằng từ khóa let cũng có thể gán lại được giá trị cho chúng
// VD:
let firsrName = "Duc";
if (firsrName === "Duc") {
  let sex = "Nam";
}
console.log(sex); // sex is not defined
// 3. const
// Các biến được khai báo bằng const có phạm vi block giống như let.
// Các biến được khai báo bằng const không thể được cập nhật hoặc khai báo lại
// Do đó, nên gán giá trị cho biến trong quá trình khởi tạo.
// VD:
const age = 22;

// Nhìn chung var, let, const đều được dùng để khai báo biến
// var khác với let và const ở phạm vi (scope)
// let và const thì có phạm vi (scope) như nhau, nhưng const không thể cập nhật được giá trị như var và let
