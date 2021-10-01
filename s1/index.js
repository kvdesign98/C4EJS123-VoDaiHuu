Võ Đại Hữu C4EJS123


1.A 	
         In JavaScript, in what cases, you will get the SyntaxError telling you that some of                         your variables have invalid names? Can you give 3 different examples of invalid variable   names?
 
    let 1name;
  let vo-huu;
let huu-1;

B.In JavaScript, how to check a variable data types?
   
         
   Trong ngôn ngữ lập trình nói chung và JavaScript nói riêng, mỗi một biến (variable) sẽ mang một giá trị (value), và mỗi một value này sẽ mang một kiểu dữ liệu (data types).

   typeof là một từ khóa JavaScript sẽ trả về kiểu của một biến khi bạn gọi nó. Bạn có thể sử dụng điều này để xác thực các tham số hàm hoặc kiểm tra xem các biến đã được xác định hay chưa.



2.Watch this video to review about HTML, CSS, JavaScript functions in the front-end web, and then connect these two columns

                                                      1-B,2-A,3-E,4-C
	
3.Declare the following variables
A String named message with value ‘Coding is great’, then use console.log to print it out

let message = 'Coding is great';  

console.log(message);


A Number named studentCount with value 0, then use console.log to  print it out
let studentCount =0;

console.log(studentCount);



    
      4.  Update the declared variables in Exercise 3
Change message into ‘Coding might not be easy, but still great’, then use console.log to  print it out


let message = 'Coding is great';  

console.log(message);

let studentCount =0;

console.log(studentCount);

message = 'Coding might not be easy, but still great';

console.log(message);

             b.Change studentCount into total of the students in our class right now (16 for example), then use console.log to print it out
 
let message = 'Coding is great';  

console.log(message);

let studentCount =0;

console.log(studentCount);

message = 'Coding might not be easy, but still great';

console.log(message);

studentCount =20;

console.log(studentCount);
  
             c.After completing exercise a, change the message into lowercase, then use console.log to print it out

let message = 'Coding is great';  

console.log(message);

let studentCount =0;

console.log(studentCount);

message = 'Coding might not be easy, but still great';

message = message.toLowerCase();

console.log(message);

studentCount =20;

console.log(studentCount);


             d.After completing exercise b, increase studentCount by 1, then use console.log to print it out


studentCount =20;

console.log(studentCount);

studentCount = studentCount + 1;

console.log(studentCount);

 
5.Write a script to show user a nice message 
alert('chào mọi người đây là thông điệp hay');

6.Write a script to ask user about their name, and then say hi to them, say something nice to them if you want :)

alert('chào mọi người đây là thông điệp hay');

let x = prompt('your name');   

alert(`hi${x}`);

console.log(x);

7.Write a script that ask 2 things from users, their first name and last name, then greet them with their full name


alert('chào mọi người đây là thông điệp hay');

let x = prompt('họ của bạn');

let y = prompt('tên của bạn');

alert(` chào ${x} ${y}`);

console.log(x,y);


8.Write a script that calculates the area of a square

alert('tính diện tích hình vuông');

let x = prompt('nhập vào cạnh 1 a or b ,c ');

alert (x = x * x);

console.log(x);

9.Write a script that calculates the area of a circle
alert('diện tích hình tròn');

let x = prompt('nhập vào bán kính hình tròn');

alert( x = x * x * 3.14);

console.log(x);

10.Write a script that converts Celsius (0C) into Fahrenheit (0F)

alert('đổi độ C (0C) thành độ F (0F)');

let x = prompt('nhập vào độ C (0C) ');

y = (x * 1.8) + 32;

alert(`${x} (C) = ${y} (F)`);

console.log(x,y);

