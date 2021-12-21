// Mỗi cặp ngoặc nhọn  { }  đều là 1 block

{
  const name = "Nguyễn Văn A"; // Biến thuộc block scope
}

function getName() {
  const lastName = "Nguyễn";
  console.log(lastName); // Biến thuộc function scope
}
