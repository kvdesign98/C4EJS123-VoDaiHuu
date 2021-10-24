// 1.
// let container = document.getElementById('list');
// for(let i = 0; i < 3; i++){
// container.insertAdjacentHTML('afterend', `<li>${i}</li>`);
// }
// // 1d, 2a, 3c, 4b
// 2.
// setInterval(function(){ console.log("Heehaw"); }, 3000);
// 3.1
// "let" Once run in the function, this variable cannot be reused
// 3.2
// "var"  Once run in the function, this variable cannot be reused
// 4.
// const d = document.getElementsByTagName("li");
// console.log(d)
// console.log(d[1])
// for(let i = 0; i < d.length; i++) {
//     i=d;
//     console.log(d)
//   }
// 5.
// const d = document.getElementsByClassName("”singer”");
// console.log(d)
// console.log(d[1])
// for(let i = 0; i < d.length; i++) {
//     i=d;
//     console.log(d)
//   }
// 6.
// let div = document.getElementById('div-02');
// div.remove();
// 7.
// let b = document.getElementById('button 1');
// b.addEventListener('click', (e) => {
//     console.log(e.target);
// });
// let c = document.getElementById('button 2');
// c.addEventListener('click', (f) => {
//     console.log(f.target);
// });
// let d = document.addEventListener('keydown', (g) => {
//     console.log(g.key);
// });
// 8.
// function information(name,dream) {
//     alert('tên của bạn là ' + name)
//     alert(dream+' là 1 điều ước hay')
// }
// information(ten,dieuuoc) 
// 9.
// function information(name,dream) {
//     alert('tên của bạn là ' + name)
//     alert(dream+' là 1 điều ước hay')
// }
// var ten=prompt('nhập tên của bạn')
// var dieuuoc=prompt('ước đi')
// information(ten,dieuuoc) 
// 10.
// function information(name,dream) {
//         alert('tên của bạn là ' + name)
//         alert(dream+' là 1 điều ước hay')
//     }
//     for(var i=0;;i++){
//         var ten=prompt('nhập tên của bạn')
//         var dieuuoc=prompt('ước đi')
//         if(dieuuoc==0){
//             alert('hãy nhập điều ước')
//             dieuuoc=prompt('nhập lại điều ước')
//         }
//         information(ten,dieuuoc) 
//         break;
// }
// 11.
// const btn = document.getElementById("upper_btn");
// console.log(btn)
// function myFunction() {
//     var fun=document.getElementById("upper_btn").placeholder = "Upper it!!!! just clicked";
//     console.log(fun)
//   }
// const input = document.getElementById("name_input");
// console.log(input)     
// function myFunction() {
//     var fun=document.getElementById("upper_btn").placeholder = "Upper it!!!! just clicked";
//     var names=document.getElementById("name_input").placeholder="user\'s names:"+document.getElementById("name_input").value
//     var vietHoa=document.getElementById("name_input").placeholder="user names uppercase:"+document.getElementById("name_input").value.toUpperCase()
//     var vietHoa2=document.getElementById("name_input").value.toUpperCase()
//     var update=document.getElementById("result_div")
//     update.textContent=vietHoa2
//     console.log(fun)
//     console.log(names)
//     console.log(vietHoa)
// }
// 12.
// const div = document.getElementById("result_div");
// console.log(div)
// let  item  =  [ "Backpack" ,  "MiBand watch" ,  "Ring" ] ;
// console.log(item);
// let list = document.getElementById('item__list__ul');
// console.log(list);
// for (let i = 0; i < item.length; i++) {
//     list.insertAdjacentHTML('beforeend', `
//     <li>${item[i]}</li>`)
// }
// console.log(list);
// let del = document.getElementsByName('item 1')
// del.remove();
// for (let i = 0; i < 2; i++) {
//     list[i].remove();
// }