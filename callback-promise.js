// Một hàm được gọi à callback khi nó thoải mãn 2 điều kiện sau:
// - Nó là một hàm (function).
// - Nó là đối số cho một hàm khác.

function doHomework(str, callback) {
  console.log(`Hello ${str}.`);
  callback();
}

doHomework("World", function () {
  console.log("Chạy xong callback!");
});

// Nhược điểm của callback là nếu các callback lồng vào nhau liên tiếp, dẫn đến việc khó theo dõi và debug code mà thuật ngữ người ta
// gọi là callback hell, pyramid of doom

// ----------------------------------------------------------------

// Promise ra đời để giải quyết vấn đề Callback hell phía trên,
// nó giúp việc xử lý bất đồng độ trở nên dễ dàng, dễ code và dễ debug hơn khi chỉ sử dụng callback.

// khởi tạo một promise thông qua từ khoá new => new Promise().
// Một promise nhận vào một hàm (executor) với 2 tham số cũng là 2 hàm là resolve và reject.
// Resolve dùng để trả dữ liệu về khi xử lý logic thành công.
// Reject dùng để trả lỗi khi xử lý thất bại.
// Dùng .then(callback) để nhận kết quả trả về từ resolve (thành công).
// Dùng .catch(callback) để nhận kết quả trả về từ reject (bắt lỗi).
// Dùng .finally() để xử lý logic trong mọi trường hợp sau khi này hoàn thành (luôn chạy).

// Định nghĩa một hàm fake lấy dữ liệu bất đồng bộ dùng Promise
const promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    const data = Math.random();
    if (data > 0.5) {
      resolve(data);
    } else {
      reject("Thất bại");
    }
  }, 3000);
});

// Thực thi hàm
promise
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("Done");
  });
