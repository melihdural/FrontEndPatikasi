const users = [
    {
        name: "Ali",
        age: 28
    },
    {
        name: "Veli",
        age: 18
    },
    {
        name: "Veli",
        age: 28
    },
    {
        name: "Veli",
        age: 30
    },
    {
        name: "Ayşe",
        age: 42
    },
    {
        name: "Fatma",
        age: 90
    }
];

/*
push        //array'in sonuna bir eleman ekler
map         //array'in tüm elemanlarını inceler (foreach ile aynı işi yappar)
find        //istenen kriterde bulduğu ilk elemanı döner (Linq.First ile aynı işi yapar)
filter      //istenen kriterde bulduğu tüm elemanları döner (Linq.Where-Select ile aynı işi yapar)
some        //istenen kritere uyan herhangi bir eleman varsa true döner (Linq.Any ile aynı işi yapar
every       //istenen kritere uyan herhangi bir eleman varsa true döner (Linq.All ile aynı işi yapar
include     //istenen kritere uyan herhangi bir eleman içeriyorsa true döner. 
*/

/* --- Push --- */
// users.push("Hayriye");
// console.log(users);

/* --- Map --- */
// users.map((x) => {
//     console.log(x.name)
// })

/* --- Find --- */
// const result = users.find((x) => x.name === "Veli" && x.age > 20)
// console.log(result)

/* --- Filter --- */
// const result = users.filter((x) => x.name === "Veli" && x.age > 20)
// console.log(result)