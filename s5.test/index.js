// bài 1
// function str(){
//     var str_input = "program";
//     for (var i = str.length-1;i>=0;i--){
//         str_input += str[i];
//         console.log(str_input);
//     }
// }
// bài 2
// let str = 'this is Test';
// let newstr= str.charAt(0).toUpperCase() +   str.slice(1); 
// console.log(newstr);
// bài 3
// function unique(arr) {
//     var Arr=['one','two','three','one','one','four','five','four','five','five']
//     for (var i = 0; i < arr.length; i++) {
//       if (!Arr.includes(arr[i])) {
//         Arr.push(arr[i])
//       }
//     }
//     return Arr
// }
// console.log(unique(['one','two','three','four','five']))
// bài 4
// mindX = [
// {
//     name: 'Nguyen Van A',
//     age: 18,
//     luong:15000000,
//     chuc:'nv',
// },
// {
//     name: 'Nguyen Van B',
//     age: 19,
//     luong:16000000,
//     chuc:'nv',

// },
// {
//     name: 'Nguyen Van C',
//     age: 20,
//     luong:17000000,
//     chuc:'nv',
// },
// ];
// console.log(mindX)
// while(true)
// {
//     nv =prompt('nhap vao nhiem vu C,R,U,D')
//     if(nv=='C')   
//     {
//         tenBien1 = prompt('nhap vao thu ban muon them')
//         giaTri1 = prompt('nhap vao gia tri cua ten an vua them')
//         mindX.tenBien1=giaTri1;
//     }
//     else if(nv=='R')
//     {
//         viTri2 = prompt('Vi tri muon xem')
//     }
//     else if(nv=='U')
//     {
//         viTri3= prompt('Vi tri muon thay doi')
//         giaTri3= prompt('nhap vao gia tri thay doi')
//         mindX[viTri3-1] =giaTri3;
//     }
//     else if(nv=='D')
//     {
//         viTri4 = prompt('Vi tri muon xoa')
//         mindX.splice(viTri4-1,1);
//     }
// }    
// bài 5.a
day   = prompt ('nhập ngày')
month = prompt ('nhập tháng')
year  = prompt ('nhập năm')
ngay = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
thang = [1,2,3,4,5,6,7,8,9,10,11,12]
while(day!= ngay && month!=thang)   
{
        alert('ngày: ' +day+ ' tháng: ' +month+ ' năm: ' +year+ ' không hợp lệ ')
}
     if (!(day!= ngay && month!=thang))
{
        alert('ngày: ' +day+ ' tháng: ' +month+ ' năm: ' +year+ ' hợp lệ ')
}



