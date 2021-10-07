// 1.1
// let a = 5;
// let b = 6;
// console.log(a, b);
// [a,b]=[b,a];
// console.log(a, b);
// 1.2
// let a = 5;
// let b = 6;
// console.log(a, b);
// a = a + b;
// b = a - b;
// a = a - b;
// console.log(a, b);
// 2.
// const s = 'Hello beauty there';
// const a = Array(s)
// const myArr = s.split(' ',3);
// console.log(myArr);
// 3.
// const a = [4, 5, 7, -8];
// console.log(a);
// 4.
// let giatri = ['C', 'R' ,'U' ,'D'];
// let items = ['Jean', 'T-Shirt', 'Socks'];
// let giatri2 = prompt('nhap vao C,R,U,D');
// while(giatri2 != giatri[0] && giatri2 != giatri[1]&& giatri2 != giatri[2]&& giatri2 != giatri[3])
// {
//     alert('nhap sai hay nhap lai');
//     giatri2 = prompt('nhap lai C,R,U,D');
// }
// while(giatri2 == giatri[0] )
// {
//     giatrimoi= prompt('them vao gia tri moi');
//     items.push(giatrimoi);
//     alert('da dc them vao');
//     giatri2 = prompt('nhap lai C,R,U,D');
// }
// if(giatri2 == giatri[2])
//    alert('items list');
//     for (let i=0; i< items.length ; i++)
//     {
//         alert(`${i+1}. ${items[i]}`);
//         giatri2 = prompt('nhap lai C,R,U,D');
//     }
// if (giatri2 == giatri[3]){
//     giatrimoi= prompt('them vao gia tri moi');
//     giatrithaydoi = prompt('chon gi tri muon thay doi')
//     items[giatrithaydoi]= giatrimoi;
//     alert('da dc thay doi')
//     giatri2 = prompt('nhap lai C,R,U,D');
// }
// if (giatri2 == giatri[4])
// {
//     giatrithaydoi = prompt('chon gia tri muon xoa');
//     items.splice(giatrithaydoi,1);
//     alert('da dc cap nhap');
//     giatri2 = prompt ('nhap lai C,R,U,D');
// }
// 5.
// let arr = prompt('Please enter your number:').split(','); 
// let input = prompt ('Pls enter your numbers'); (1)
// let arr = input.split(',').map(Number); (2)
// let arr = prompt ('Please enter your numbers:').split(',').map(Number);
// const sum = arr.reduce((acc,cur)=>{
//     return acc+cur;
// },0);
// console.log(sum);
// 6.
// let arr = prompt('Please enter your number').split(',').map(Number);
// alert('The smallest number is ' + Math.min(...arr));
// 7.
// let mang = prompt('nhap mang ').split(',').map(Number);
// while (mang.length<5)
// {
//     alert('mang phai chua it nhat 5pt');
//     mang = prompt('nhap it nhat 5 phan tu').split(',').map(Number);
// }
// console.log(mang);
// let test = Number(prompt('so N'));
// while (!test)
// {
//     alert('khong phai so');
//     test = Number(prompt('nhap lai N'));
// }
// if (!mang.includes(test))
// {
//     alert(`${test}khong tim thay`);
// }
// else
// {
//     alert(`${test} là gia tri trong mảng ${mang.indexOf(test)}`);
// }
// 8.1
// let cuu = prompt('nhap kich thuoc').split(',').map(Number);
// console.log('kich co cuu cua toi la');
// console.log(...cuu);
// console.log('\n');
// 8.2 

// console.log(`con lon nhat la ${Math.max(...cuu)}`);
// console.log('\n');

// 8.3

// cuu[cuu.indexOf(Math.max(...cuu))]= 8;
// console.log ('sau khi cat xong');
// console.log(...cuu);
// console.log('\n');

//  8.4.5

// for(i = 1 ; i<5 ; i++){

//     console.log('thang'+i );
//     console.log('kich thuoc sau 1 thang');
//     for(let y =0 ; y<cuu.length ; y++){
//         cuu[y] += 50;
//     }
//     console.log(...cuu);
//     console.log('\n');

//     console.log(`con lon nhat ${Math.max(...cuu)}`);
//     console.log('\n');

//     cuu[cuu.indexOf(Math.max(...cuu))]=8;
//     console.log('sau khi cat long');
//     console.log(...cuu);
//     console.log('\n');
// }

// 8.6

// const sum = cuu.reduce((acc, cur) =>{
//     return acc + cur;
// },0);
// console.log(`dan cuu co tong la ${sum}`);
// console.log(`tong tien nhan dc ${sum}*2$ = ${sum*2}`);
// 10.
// let ten = prompt('nhap ten').split(',');
// let map1=ten.map(x => '<'+x+'>');
// alert(ten+'=>'+map1)
// 11.
// var so = prompt('nhap so').split(',');
// var evenNumber = so.filter(function(num)
// {
// return num %2 === 1;
// })
// console.log(evenNumber);







