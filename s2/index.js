// -1.1
// Với từ khóa var, ta có thể khai báo đa dạng các kiểu biến như number, string, boolean,…
// const dùng để khai báo một hằng số - là một giá trị không thay đổi được trong suốt quá trình chạy.
// -1.2
// Khai báo var được định phạm vi toàn cục (global) hay hàm (function) trong khi let được định phạm vi là khối mã (block)
// Biến var có thể được cập nhật và khai báo lại trong phạm vi tồn tại; biến let có thể được cập nhật nhưng không thể khai báo lại.
// Khai báo của var, let đều được dịch chuyển lên đầu của phạm vi. Nhưng trong khi biến var được khởi gán giá trị với undefined, biến let không được khởi gán giá trị.
// Trong khi var và let có thể được khai báo không khởi gán giá trị.
// -1.3
// biến let có thể được cập nhật nhưng không thể khai báo lại; biến const không thể cập nhật nhưng không thể khai báo lại.
// let có thể được khai báo không khởi gán giá trị, const phải khởi gán giá trị khi khai báo.
// -1.4
// khai báo biến dữ liệu
// -2.1
// Trong JavaScript hay bất kỳ ngôn ngữ lập trình nào khác boolean là kiểu dữ liệu logic, nó có hai giá trị true và false.
// Và Boolean là đối tượng đại diện cho kiểu dữ liệu boolean, nó cũng bao gồm thêm cả các thuộc tính và phương thức khác.
// -2.2
// Tạo đối tượng boolean mới
// Hàm toSource()
// Hàm toString()
// Hàm valueOf()
// -3.a
// for(let x = 0; x < 7;x++) 
// {
//     console.log(x);
// }
// -3.b
// let n = prompt ('hay nhập số');
// for(let x = 0; x <n;x++) 
// {
// console.log(x);
// }
// -3.c
// let n = prompt ('hay nhập số');
// for(let x = 3; x <n;x++) 
// {
// console.log(x);
// }
// -3.d
// let c = prompt ('hay nhập số c');
// let n = prompt ('hay nhập số n');
// for(c; c < n;c++) 
// {
// console.log(c);
// }
// -3.e
// let c = prompt ('hay nhập số c');
// let n = prompt ('hay nhập số n');
// let i =  parseInt(c);
// for(i; i < n;) 
// {
// console.log(i);
// i = i + 3;
// }
// -3.f
// let c = prompt ('hay nhập số c');
// let n = prompt ('hay nhập số n');
// let s = prompt ('hay nhập số s');
// let o = parseInt(c);
// let i = parseInt(s);
// for(; o < n;) 
// {
// console.log(o);
// o = o + i;
// }
// -4
// let n = prompt('Nhap gia tri cua N')
// let giaithua = 1;
// for(let i=1;i<=n;i++)
// {
// 	giaithua*=i;
// }
// alert('Giai Thua bang '+giaithua)
// -5
// let tuoi = prompt ('ban bao nhieu tuoi')
// if(tuoi>14)
// {
//     console.log('di xem phim')
// }
// else if(tuoi<14)
// {
//     console.log('khong du tuoi')
// }
// -6
// let x = prompt ('nhap tu 0-9')
// if(x>4.5)
// {
//     console.log('Higherhalf')
// }
// else if(x<4.5)
// {
//     console.log('lowerhalf')
// }
// -7
// let x = prompt ('nhap x')
// let n = prompt ('nhap n')
// if(x>n/2)
// {
//     console.log( x + ' Higherhalf ' + n)
// }
// else if(x<n/2)
// {
//     console.log( x + ' lowerhalf ' + n)
// }
// -8
// let x = prompt ('x=')
// if( x % 2 == 0)
// {
//     console.log('chia het cho 2')
// }
// else 
// {
//     console.log('so le')
// }
// -9.a
// for(x = 0 ; x <= 2;x++)
// {
//     console.log("L");
// }
// for(x = 0 ; x <= 2;x++)
// {
// console.log("H");
// }
// -9.b
// let n = Number(prompt("Enter a number n"));
// y = Math.ceil(n/2)
// for(x = 1 ; x <= y;x++)
// {
//     console.log("L");
// }
// for(;y < n ;y++)
// {
//     console.log("H");
// }
// -9.c
// for(x = 0 ; x <=3 ;x++)
// {
//     console.log(0);
//     console.log(1);
// }
// -9.d
// let n = Number(prompt("Enter a number n "))
// for(let x = 1; x <= n ; x++)
// {
//     if (x % 2 == 0 )
//     {
//         console.log(1);
//     }
//     else{
//         console.log(0);
//     }
// }
// -10 
// let kg = prompt ('kg=');
// let cm = prompt ('chieu cao =')
// let m = cm*0.01;
// let BMI = kg/(m*m);
// console.log(BMI)
// if (BMI <16)
// {
//     console.log('thieu can tram trong');
// }
// else if (BMI>=16,BMI<=18.5)
// {
//     console.log('thieu can');
// }
// else if (BMI>=18.5,BMI<=25)
// {
//     console.log('binh thuong');
// }
// else if (BMI>=25,BMI<=30)
// {
//     console.log('thua can');
// }
// else if (BMI>30)
// {
//     console.log('beo phi');
// }






