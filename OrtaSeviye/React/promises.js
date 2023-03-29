// const getComments = (number) => {
//     return new Promise((resolve, reject) => {
//         if (number === 1){
//             resolve({ comment: "comment" });
//         }
//        
//         reject("Bir problem oluştu");
//     });
// };
//
// getComments(1)
//     .then((data) => console.log(data))
//     .catch((e) => console.log(e) )

import axios from"axios"

const getUsers = () => {
    return new Promise( async (resolve, reject) => {
        const {data} = await  axios(
            "https://jsonplaceholder.typicode.com/users"
        );
        
        resolve(data);
        reject("Bir sorun olustu!");
        
    });
};

const getPost = (post_id) => {
    return new Promise( async (resolve, reject) => {
        const {data} = await  axios(
            "https://jsonplaceholder.typicode.com/posts/" + post_id
        );

        resolve(data);
        reject("Bir sorun daha olustu!");
    });
};

// (async () => {
//      await getUsers()
//          .then((data) => console.log(data))
//          .catch((e) => console.log(e))
//    
//     await getPost(1)
//         .then((data) => console.log(data))
//         .catch((e) => console.log(e))
//
//     await getPost(2)
//         .then((data) => console.log(data))
//         .catch((e) => console.log(e))
// })();

// (async () => {
//     try {
//         const users = await getUsers();
//         const post1 = await getPost(1);
//         const post2 = await getPost(2);
//
//         console.log(users);
//         console.log(post1);
//         console.log(post2);
//     }
//     catch (e) {
//         console.log(e)
//     }
// })();

Promise.all([getUsers(), getPost(1), getPost(2)])
.then(console.log)
.catch(console.log);