// 1.
// const product = 
// {
//     name: 'Xiaomi rice cooker',
//     price: 1700,
//     brand: 'Xiaomi',
//     color: 'white',
// };

// for (let x in product) 
// {
//     console.log(x);
// }
// 1.1
// property
// 1.2
// const product = 
// {
//     name: 'Xiaomi rice cooker',
//     price: 1700,
//     brand: 'Xiaomi',
//     color: 'white',
// };
// for(let i in product)
// {
//     console.log([i]+': '+ product [i]);
// }
// 2.
// const task = {
//     subject: 'Implement login featur',
//     createdBy: 'Hoang Ngoc Duc',
//     assignTo: 'Nguyen Phuong Nam',
//     dueDate: '2019-10-08T18:00:24+0000',
//     expectedHours: 0.5,
// };
// for(let i in task) 
// {
//     console.log([i])
// }
// 3.
// let jobSearch = {
//     https://gist.githubusercontent.com/qhuydtvt/6870e14e544455f6de6081a83e365b5b/raw/adb147e19259e3ee9b093cb71228026e2417ab09/jobs.js
// }
// console.log(jobSearch)
// 3.1
// outermost layer is array
// 3.2
// Hits is Array
// 3.3
// Find the the job's tiltle, locations, salary, benefits, skills and requirements
// 4.
// let key = [
//     ["debug", "done", "defect", "pm", "uiux"],
//     ["The process of figuring out why your program has a certain error and how to fix it", 
//     "When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)", 
//     "The formal word for ‘error’", 
//     "The short version  of Project Manager, the person in charge of the final result of a project", 
//     "UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels"]
// ]
// console.log(key[0][1])
// // 4.1vs2
// while(true)
// {
//     alert('Hi there,this is dev dictionary')
//     i=prompt('Enter a keyword')
//     if(!(key[0].includes(i)))
//     {
//         new_key = prompt('we could  not find your word :' + i +" leave your explanation: ");
//         key[0].push(i);
//         key[1].push(new_key);
//     }
//     for(let x = 0; x < key[0].length; x++){
//         if(i == key[0][x]){
//             alert(key[0][x]+'\n'+key[1][x])
//         }
//     }
// }
// 5.
// let type = 
// [
//     {
//         Name: 'Xiaomi portable charger 20000mah',
//         Brand: 'Xiaomi',
//         Price: 428,
//         Color: 'White',
//         Category: 'Charger',
//     },
//     {
//         Name: 'VSmart Active 1',
//         Brand: 'VSmart',
//         Price: 5487,
//         Color: 'Black',
//         Category: 'Phone',
//     },
//     {
//         Name: 'IPhone X',
//         Brand: 'Apple',
//         Price: 21490,
//         Color: 'Gray',
//         Category: 'Phone',
//     },
//     {
//         Name: 'Samsung Galaxy A9',
//         Brand: 'Samsung',
//         Price: 8490,
//         Color: 'Blue',
//         Category: 'Phone',
//     }
// ];
// 5.1
// for(let i = 0 ; i < type.length; i++)
// {
//     console.log(`Name: ${type[i].Name} \nPrice: ${type[i].Price}`)
// }
// 5.2
// for(let x = 0 ; x < type.length; x++)
//     {
//         if(x=Number)
//         x = prompt('Enter product position')
//         console.log(`Name: ${type[x].Name} \nBrand: ${type[x].Brand} \nPrice: ${type[x].Price} \nColor: ${type[x].Color} \nCategory: ${type[x].Category} `)      
        
//     }
// 5.3
// y = [`${type[1].Name};${type[1].Price}`]
// y = 'charger'
// s = prompt('Enter')
//     while(s == y)          
//             {
//                 console.log(`Name: ${type[1].Name} \nPrice:${type[1].Price}`)
//                 break;
//             }
//     p= [`${type[1].Name};${type[1].Price}\n;${type[2].Name};${type[2].Price}\n;${type[3].Name};${type[3].Price}\n`]
//     p= 'phone'
//     while(s == p)
//     {
//         console.log(`Name:${type[1].Name}\nPrice:${type[1].Price}\n\nName:${type[2].Name}\nPrice:${type[2].Price}\n\nName:${type[3].Name}\nPrice:${type[3].Price}`)
//         break;
//     }
// 5.4
// type[0].Providers='PhukienzeroDientuccc';
// type[1].Providers='TgddDdghnVhStore';
// type[2].Providers='Tgdd';
// type[3].Providers='Tgdd';
// console.log(`
//     Name:${type[0].Name}\nPrice:${type[0].Price}\nProviders:${type[0].Providers}
// \n\nName:${type[1].Name}\nPrice:${type[1].Price}\nProviders:${type[1].Providers}
// \n\nName:${type[2].Name}\nPrice:${type[2].Price}\nProviders:${type[2].Providers}
// \n\nName:${type[3].Name}\nPrice:${type[3].Price}\nProviders:${type[3].Providers}`)
//5.5
// const varr = [];
// for (let i = 0 ; i < product.length ; i++)
// {
//     let sth = product[i][Object.keys(product[i])[5]];
//     varr.push(sth);
// }
// console.log(varr);
// 6.1
// let prints = [
//     {
//         task: 'HTML',
//         process: false
//     },
//     {
//         task: 'CSS',
//         process: false
//     },
//     {
//         task: 'Basic of JavaScript',
//         process: false
//     },
//     {
//         task: 'Node Package Manager (npm)',
//         process: false
//     },
//     {
//         task: 'Git',
//         process: false
//     },
// ]
// console.log('Hi there');
// for (i = 0; i < prints.length; i++) {
//     console.log(`${i+1}. ${prints[i].task}`);
//     console.log(`   Complete: ${prints[i].process}`);
// }
// 6.2
// let sports = prompt('Nhập sports (new, delete, update, complete');
// if (sports == 'new') {
//     let newTask = prompt('Nhập nhiệm vụ ');
//     prints.push({task: newTask, process: false});
// }
// console.clear();
// for (i = 0; i < prints.length; i++) {
//     console.log(`${i+1}. ${prints[i].task}`);
//     console.log(`Complete: ${prints[i].process}`);
// }
// 6.3
// let sports = prompt('Nhập sports (new, delete, update, complete');
// if (sports == 'update') {
//     let location = Number(prompt('location cần update'));
//     let newTask = prompt('Nhập học tập mới');
//     prints[location-1].task = newTask;
//     console.log(prints);

// }
// console.clear();
// for (i = 0; i < prints.length; i++) {
//     console.log(`${i+1}. ${prints[i].task}`);
//     console.log(`Complete: ${prints[i].process}`);
// }
// 6.4
// let sports = prompt('Nhập sports (new, delete, update, complete');
// if (sports == 'complete') {
//     let location = Number(prompt('location cần hoàn thành'));
//     prints[location-1].process = true;
// }
// console.clear();
// for (i = 0; i < prints.length; i++) {
//     console.log(`${i+1}. ${prints[i].task}`);
//     console.log(`Complete: ${prints[i].process}`);
// }
// 6.5
// let sports = prompt('Nhập sports (new, delete, update, complete');
// if (sports == 'delete') {
//     let location = Number(prompt('location cần xóa'));
//     prints.splice(location-1, 1);
// }
// console.clear();
// for (i = 0; i < prints.length; i++) {
//     console.log(`${i+1}. ${prints[i].task}`);
//     console.log(`Complete: ${prints[i].process}`);
// }
// 6.6
// let sports = prompt('Nhập sports (new, delete, update, complete)');
// if (sports == 'new') {
//     let newTask = prompt('Nhập học tập mới');
//     prints.push({task: newTask, process: false});
//     console.clear();
//     for (i = 0; i < prints.length; i++) {
//         console.log(`${i+1}. [ ] ${prints[i].task}`);
//     }
// }

// if (sports == 'update') {
//     let location = Number(prompt('location cần update'));
//     let newTask = prompt('Nhập học tập mới');
//     prints[location-1].task = newTask;
//     console.clear();
//     for (i = 0; i < prints.length; i++) {
//         console.log(`${i+1}. [ ] ${prints[i].task}`);
//     }
// }
// if (sports == 'complete') {
//     let location = Number(prompt('location cần sports'));
//     prints[location-1].process = true;
//     console.clear();
//     for (i = 0; i < prints.length; i++) {
//         if (i == location - 1) {
//             console.log(`${i+1}. [x] ${prints[i].task}`);
//         } else {
//             console.log(`${i+1}. [ ] ${prints[i].task}`);
//         }
        
//     }
// }
// if (sports == 'delete') {
//     let location = Number(prompt('location cần xóa'));
//     prints.splice(location-1, 1);
//     console.clear();
//     for (i = 0; i < prints.length; i++) {
//         console.log(`${i+1}. [ ] ${prints[i].task}`);
//     }
// }
// tham khảo bài a Tâm
// 15.
//    let jobData={https://gist.githubusercontent.com/qhuydtvt/6870e14e544455f6de6081a83e365b5b/raw/adb147e19259e3ee9b093cb71228026e2417ab09/jobs.js}
// 16.
// let oldData = 
// {
//     firedRice: 
//     {
//         Price: 30,
//         vnName: 'Com rang dua bo'
//     },
//     noddle: 
//     {
//         price: 20,
//         vnName: 'My tom chanh'
//     },
//     pho: 
//     {
//         price: 35,
//         vnName: 'My tom chanh'
//     },
// };
// let 
//     {
//         noddle, ...rest
//     } = oldData;
// let newData = (noddle, rest);
// console.log(newData);


    




   








