// setTimeout( () => {
//     console.log("Merhaba");
//     }, 5000); //Verilen süre kadar bekleyip fonksiyonu çalıştırır.
//
// setInterval( () => {
//     console.log("Çalışıyorum...")
// } ,1000) //Verilen sürede bir çalışır.  

// const sayHi = (cb) => {
//     cb();
// };
//
// sayHi( () => {
//     console.log("Hello");
// });

import fetch from "node-fetch"
import axios from"axios"

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((data) => data.json())
// .then((users) => {
//     console.log("Users yüklendi", users)
// })
//

/*Fetch ile kullanım*/
// async function getData () {
// //     const users = await (
// //         await fetch("https://jsonplaceholder.typicode.com/users")
// //     ).json();
// //     const post1 = await(
// //         await fetch("https://jsonplaceholder.typicode.com/posts/1")
// //     ).json();
// //     const post2 = await(
// //         await fetch("https://jsonplaceholder.typicode.com/posts/2")
// //     ).json();
// //     const post3 = await(
// //         await fetch("https://jsonplaceholder.typicode.com/posts/3")
// //     ).json();
// //
// //     console.log("users", users);
// //     console.log("post 1", post1);
// //     console.log("post 2", post2);
// //     console.log("post 3", post2);
// //    
// // }

/*Axios ile kullanım*/
// async function getData () {
//     const { data : users } = await axios("https://jsonplaceholder.typicode.com/users");
//     const { data : post1 } = await axios("https://jsonplaceholder.typicode.com/posts/1");
//     const { data : post2 } = await axios("https://jsonplaceholder.typicode.com/posts/2");
//     const { data : post3 } = await axios("https://jsonplaceholder.typicode.com/posts/3");
//
//     console.log("users", users);
//     console.log("post 1", post1);
//     console.log("post 2", post2);
//     console.log("post 3", post2);
//
// }


// getData();

