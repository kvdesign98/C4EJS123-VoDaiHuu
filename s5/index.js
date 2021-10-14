// 1.1
// const getRandomArbitrary = (min, max) => 
// {
//     return Math.random() * (max - min) + min;
// };

// for (let i = 0; i < 10; i += 1)
// {
//     console.log(`Random number ${i}: ${getRandomArbitrary(0,1)}`);
// }
// 1.2
// var myArray = [2,5,6,9,10];    
// var rand = myArray[(Math.random() * myArray.length) | 0]
// console.log(`Random number ${rand}`)
// 1.3

// const myArray = 
// [
//     {



//                 quiz:'how many legs do an optopus has?',


//                 question:

//                     [
//                         'A. 4 legs','B. no legs','C. 8 legs','D. 2 legs'
//                     ],



//                 answer:'C. 8 legs',


//     },
//     {       

//                 quiz: 'which country is home to the kangaroo',


//                 question:               
//                     [
//                         'A. Australia','B. Autria','C. New Zealand','D. US'
//                     ],                              


//                 answer:'A. Australia',


//     },
// ]
// console.log(myArray)
// 1.4and5
// const myArray =
//     [
//         {
//             quiz: 'how many legs do an optopus has?',
//             question:
//                 [
//                     'A. 4 legs\n', 'B. no legs\n', 'C. 8 legs\n', 'D. 2 legs\n',
//                 ],
//             answer: 'C',
//         },
//         {
//             quiz: 'which country is home to the kangaroo',
//             question:
//                 [
//                     'A. Australia\n', 'B. Autria\n', 'C. New Zealand\n', 'D. US\n',
//                 ],
//             answer: 'A',
//         },
//         {
//             quiz: 'what sweet food made by bees using nectar from flowers',
//             question:
//                 [
//                     'A. Bread\n', 'B. Honey\n', 'C. Sugar\n', 'D. Potene\n',
//                 ],
//             answer: 'C',
//         },
//         {
//             quiz: 'which fictional detective lived at 221b Baker Street',
//             question:
//                 [
//                     'A. Watson\n', 'B. Sam Spade\n', 'C. Scubidu\n', 'D. Sherlock Holmes\n',
//                 ],
//             answer: 'D',
//         },
//     ]
//     var diem =0;
//     for(let i=0;i<myArray.length;i++) {
//     var rand = myArray[(Math.random() * myArray.length) | 0 ]  
//     var nv=prompt(`${rand.quiz} \n ${rand.question}`+('A,B,C,D'))
// if(rand.answer==nv)
// {
//     diem += 1
// }}
// console.log(diem)
// 1.6-8
    // var quizAnswered =[];
    // var diem = 0;
    // for(let i=0;i<myArray.length;i++) {
    //     var index = Math.floor(Math.random() * myArray.length);
    //     var rand = myArray[index]
    //     while (quizAnswered.includes(rand.quiz)) {
    //         index = Math.floor(Math.random() * myArray.length);
    //         rand = myArray[index]
    //     }
    //     var nv = prompt(`${rand.quiz} \n ${rand.question}` + ('A,B,C,D'))
    //     if (rand.answer.toLowerCase() == nv.toLowerCase()) {
    //         diem += 1
    //     }
    //     quizAnswered.push(rand.quiz)
    //     console.log('---------------------')
    // }
    // console.log(diem)
// 2.1
// var menu = ['to', 'be', 'that', 'of', 'elon', 'to', 'this', 'now', 'back', 'cool', 'hey', 'love', 'of', 'life', 'that', 'rain', 'summer', 'color', 'now', 'of', 'hat', 'late', 'sorry', 'my', 'team']
// var counts = {};

// for (var i = 0; i < menu.length; i++) {
//   var num = menu[i];
//   counts[num] = counts[num] ? counts[num] + 1 : 1;
// }

// console.log(
//   ' to:'+counts['to']+'\n',
//   'be:'+counts['be']+'\n',
//   'that:'+counts['that']+'\n', 
//   'of:'+counts['of']+'\n',
//   'elon:'+counts['elon']+'\n',
//   'this:'+counts['this']+'\n',
//   'now:'+counts['now']+'\n',
//   'back:'+counts['back']+'\n',
//   'cool:'+counts['cool']+'\n',
//   'hey:'+counts['hey']+'\n',
//   'love:'+counts['love']+'\n',
//   'life:'+counts['life']+'\n',
//   'rain:' +counts['rain']+'\n',
//   'summer:'+counts['summer']+'\n',
//   'color:'+counts['color']+'\n',
//   'hat:'+counts['hat']+'\n',
//   'late:'+counts['late']+'\n',
//   'sorry:'+counts['sorry']+'\n',
//   'my:' +counts['my']+'\n',
//   'team:'+counts['team']);
//   2.2-3
//   const inventory = [
//     {
//         name: 'HP Envy 13aq',
//         price: 21000,
//         brand: 'HP',
//         quantity: 5,
//     },
//     {
//         name: 'Dell XPS 9370',
//         price: 30000,
//         brand: 'Dell',
//         quantity: 1,
//     },
//     {
//         name: 'Dell Inspiron 3567',
//         price: 9300,
//         brand: 'Dell',
//         quantity: 12,
//     },
//     {
//         name: 'Dell Latitude E5450',
//         price: 8600,
//         brand: 'Dell',
//         quantity: 2,
//     },

//     {
//         name: 'Asus Zenbook',
//         brand: 'Asus',
//         price: 20000,
//         quantity: 4,
//     },
//     {
//         name: 'HP Pavilion',
//         brand: 'HP',
//         price: 14000,
//         quantity: 7,
//     },]
// const inventoryByBrand = 
// {
//     'HP':[],
//     'Dell':[],
//     'Asus':[],
// }
// for (let i = 0; i < inventory.length; i++) 
// {
//    const inv = inventory[i];
//    const brand = inv.brand;
//    inventoryByBrand[brand].push(inv);
// }
// console.log(inventoryByBrand);
// 2.4-7
// while (inventoryByBrand){
// let TH = prompt('(HP, Dell or Asus)');
// let listName = inventoryByBrand[TH];
// console.log(listName);
// let tenMay =[];
// let tien;
// let tongTien = 0;
// for (let i = 0; i < listName.length; i++) 
// {
//     tenMay.push(listName[i].name);
//     tien = listName[i].price * listName[i].quantity;
//     tongTien = tongTien + tien;
// }
// console.log(tongTien);
// alert(`Có ${inventoryByBrand[TH].length} sản phẩm mang thương hiệu ${TH}:\n${tenMay.join('\n')}\n\nTổng giá trị: ${(tongTien*1000).toLocaleString()}VNĐ`);}


