// -1.1
// Với var từ khóa, ta có thể khai báo đa dạng các biến kiểu như number, string, boolean,…
// const used to khai báo một số hằng - là giá trị không thể thay đổi trong suốt quá trình chạy.
// -1,2
// Khai báo var được định nghĩa toàn bộ (global) hay function (function) trong khi let được định danh là block code (block)
// Biến thể có thể được cập nhật và khai báo lại trong phạm vi tồn tại; Biến let có thể được cập nhật nhưng không thể khai báo lại.
// Khai báo của var, hãy đều được dịch chuyển lên đầu của phạm vi. Nhưng trong khi var var được khởi động giá trị với không xác định, thì biến cho phép không được khởi động giá trị.
// Trong khi var and let may be duoc khai báo không khởi tạo giá trị.
// -1,3
// biến let may be update but can not khai báo lại; const biến không thể cập nhật nhưng không thể khai báo lại.
// let may be be not start up the value, const must be boot the value when the khai báo.
// -1,4
// khai báo dữ liệu biến
// -2.1
// Trong JavaScript hay bất kỳ ngôn ngữ lập trình nào khác boolean là logic dữ liệu kiểu, nó có hai giá trị true và false.
// And Boolean là đại diện đối tượng cho boolean dữ liệu kiểu, nó cũng bao gồm thêm tất cả các thuộc tính và khác phương thức.
// -2,2
// Tạo mới boolean đối tượng
// Hàm toSource ()
// Hàm toString ()
// Hàm valueOf ()
// -3.a
// for (cho x = 0; x <7; x ++) 
// {
// console.log (x);
//}
// -3.b
// let n = prompt ('hay nhập số');
// for (cho x = 0; x <n; x ++) 
// {
// console.log (x);
//}
// -3.c
// let n = prompt ('hay nhập số');
// for (cho x = 3; x <n; x ++) 
// {
// console.log (x);
//}
// -3.d
// let c = prompt ('hay nhập số c');
// let n = prompt ('hay nhập số n');
// for (c; c <n; c ++) 
// {
// console.log (c);
//}
// -3.e
// let c = prompt ('hay nhập số c');
// let n = prompt ('hay nhập số n');
// let i = parseInt (c);
// for (i; i <n;) 
// {
// console.log (i);
// i = i + 3;
//}
// -3.f
// let c = prompt ('hay nhập số c');
// let n = prompt ('hay nhập số n');
// let s = prompt ('hay nhập số s');
// let o = parseInt (c);
// let i = parseInt (s);
// for (; o <n;) 
// {
// console.log (o);
// o = o + i;
//}
// -4
// let n = prompt ('Nhap gia tri cua N')
// let giaithua = 1;
// for (let i = 1; i <= n; i ++)
// {
// giaithua * = i;
//}
// alert ('Giai Thừa bang' + giaithua)
// -5
// let tuoi = prompt ('ban bao nhieu tuoi')
// if (tuoi> 14)
// {
// console.log ('di xem phim')
//}
// else if (tuoi <14)
// {
// console.log ('khong du tuoi')
//}
// -6
// let x = prompt ('nhap tu 0-9')
// nếu (x> 4,5)
// {
// console.log ('Higherhalf')
//}
// khác nếu (x <4,5)
// {
// console.log ('lowhalf')
//}
// -7
// let x = prompt ('nhap x')
// let n = prompt ('nhap n')
// nếu (x> n / 2)
// {
// console.log (x + 'Higherhalf' + n)
//}
// khác nếu (x <n / 2)
// {
// console.log (x + 'lowhalf' + n)
//}
// -số 8
// let x = prompt ('x =')
// nếu (x% 2 == 0)
// {
// console.log ('chia het cho 2')
//}
// khác 
// {
// console.log ('so le')
//}
// -9.a
// cho (x = 0; x <= 2; x ++)
// {
// console.log ("L");
//}
// cho (x = 0; x <= 2; x ++)
// {
// console.log ("H");
//}
// -9.b
// let n = Number (prompt ("Nhập số n"));
// y = Math.ceil (n / 2)
// cho (x = 1; x <= y; x ++)
// {
// console.log ("L");
//}
// cho (; y <n; y ++)
// {
// console.log ("H");
//}
// -9.c
// cho (x = 0; x <= 3; x ++)
// {
// console.log (0);
// console.log (1);
//}
// -9.d
// let n = Number (nhắc ("Nhập số n"))
// for (cho x = 1; x <= n; x ++)
// {
// nếu (x% 2 == 0)
// {
// console.log (1);
//}
// khác{
// console.log (0);
//}
//}
// -10 
// let kg = prompt ('kg =');
// let cm = prompt ('chieu cao =')
// cho m = cm * 0,01;
// cho BMI = kg / (m * m);
// console.log (BMI)
// nếu (BMI <16)
// {
// console.log ('thieu can tram trong');
//}
// khác nếu (BMI> = 16, BMI <= 18,5)
// {
// console.log ('thieu can');
//}
// khác nếu (BMI> = 18,5, BMI <= 25)
// {
// console.log ('binh thuong');
//}
// khác nếu (BMI> = 25, BMI <= 30)
// {
// console.log ('thua can');
//}
// khác nếu (BMI> 30)
// {
// console.log ('beo phi');
//}