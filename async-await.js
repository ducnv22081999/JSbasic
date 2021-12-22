// Async ra đời giúp chúng ta viết Promise gọn hơn
// Ngoài ra, nếu dùng async thì chúng ta có thể dùng một từ khoá khác là await.

// Async được dùng để khai báo một hàm bất đồng bộ
// Các hàm bất đồng bộ sẽ luôn trả về một giá trị
// Việc sử dụng async chỉ đơn giản là ngụ ý rằng một lời hứa sẽ được trả lại và nếu một lời hứa không được trả lại,
// JavaScript sẽ tự động kết thúc nó.

// Await được sử dụng để chờ một Promise
// Nó chỉ có thể được sử dụng bên trong một khối Async
// Từ khóa Await làm cho JavaScript đợi cho đến khi promise trả về kết quả
// Cần lưu ý rằng nó chỉ làm cho khối chức năng không đồng bộ chờ đợi chứ không phải toàn bộ chương trình thực thi.

// Khi khai báo một hàm với từ khoá là async thì mặc định hàm đó sẽ luôn trả về một Promise
// Nếu bạn return thì những gì được return sẽ được đưa vào Promise.resolve
// Còn khi bạn throw exception thì nó sẽ được đưa vào Promise.reject

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Success promise1"), 2000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Success promise2"), 2000);
});

(async () => {
  console.time("timeleap");
  const p1 = await promise1;
  const p2 = await promise2;

  console.log(p1);
  console.log(p2);

  console.timeEnd("timeleap");
})();
