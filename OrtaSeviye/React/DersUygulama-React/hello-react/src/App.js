import './App.css';
import Hooks from "./components/Hooks";
import {useState} from "react";
import Counter from "./components/Counter";
// import { useState } from "react";
// import Header  from "./components/Header"
// import User from "./components/User"
// import Counter from "./components/Counter"
// import Input from "./components/InputExample"


/* --- JSX - Basic Rules --- */
// function App() {
//   return (
//     <div>
//       <Header />
//         <p className="pargraph">Lorem ipsum dolor sit amet.</p>
//        
//         <label htmlFor="">
//             Name
//             <input id="myInput"/>
//         </label>
//     </div>
//   );
// }

/* --- Rendering Variables in Components --- */
// const name = "Melih";
// const surname = "Dural";
// function App () {
//     return (
//         <>
//             <h1>{name} {surname}</h1>
//             <br/>
//             <h2>
//                 {`Benim adım ${name} soyadım ${surname}`}
//             </h2>
//         </>
//     )
// }

/* --- Conditional Rendering --- */
// const name = "Melih";
// const surname = "Dural";
// const isLoggedIn = true;
// function App() {
//     return (
//         <>
//             <h1>
//                
//                 {isLoggedIn && `Benim adım ${name} soyadım ${surname}`}
//                 {!isLoggedIn && "Giriş başarısız!"}
//             </h1>
//
//             <h1>
//                 {
//                     isLoggedIn ? `Benim adım ${name} soyadım ${surname}`
//                     : "Giriş başarısız!"
//                 }
//             </h1>
//            
//         </>
//     )
// }

/* --- Props --- */
// const friends = [
//     {
//         id: 1,
//         name: "Ali",
//     },
//     {
//         id: 2,
//         name: "Veli",
//     },
//     {
//         id: 3,
//         name: "Ayşe",
//     },
//     {
//         id: 4,
//         name: "Fatma",
//     },
//     {
//         id: 5,
//         name: "Hayriye",
//     }
// ]
// function App () {
//     return (
//         <>
//             <button onClick={setLogIn}>Log in!</button>
//             <User
//                 name="Melih"
//                 surname="Dural"
//                 age={28}
//                 isLoggedIn={isLoggedIn}
//                 friends={friends}
//                 address = {{
//                     title: `Cayyolu/Ankara`,
//                     zip: "06810",
//                 }}
//             />
//         </>
//     )
// }

/* --- States --- */
// function App () {
//     const [isLoggedIn, setLogIn] = useState(false);
//     const [friends, setFriends] = useState(["Ali", "Veli", "Ayşe", "Fatma"]);
//     const [address, setAddress] = useState({ title: `Cayyolu/Ankara`, zip: "06810",});
//     return (
//         <>
//             <User
//                 name="Melih"
//                 surname="Dural"
//                 age={28}
//                 isLoggedIn={isLoggedIn}
//                 friends={friends}
//                 address = {address}
//             />
//             <button onClick={() => {isLoggedIn ? setLogIn(false) : setLogIn(true)}}>
//                 {
//                     isLoggedIn ? "Log out!" : "Log in!"
//                 }
//             </button>
//            
//             <button onClick={() => {
//                 // Array States    
//                
//                 if (isLoggedIn) {
//                     setFriends([...friends, "Hayriye"])
//                 }
//             }}>
//                 Add Friend!
//             </button>
//            
//             <button onClick={ () => {
//                 // Object States
//                
//                 if (isLoggedIn) {
//                     setAddress({/*...address,*/ title: "Istanbul"}) 
//                     // Tek bir değişiklik yapacaksam diğer variableler resetlenmemesi için "...address" yorum bloğunu açman lazım 
//                 }}}
//             >Change Adress</button>
//         </>
//     )
// }

/* --- Counter App --- */
// function App () {
//     return (
//         <>
//             <Counter />
//            
//         </>
//     );
// }

/* --- User Input --- */
// function App () {
//     return (
//         <>
//             <Input />
//         </>
//     );
// }

/* --- Hook Samples --- */
// function App() {
//     const [isVisible, setIsVisible] = useState(true);
//     return (
//         <>
//             <Hooks />
//             <button onClick={() => setIsVisible(() => !isVisible)}>Toggle Counter</button>
//         </>
//     )
// }

function App() {
    const [isVisible, setIsVisible] = useState(true)
    return (
        <>
            {isVisible && <Counter/>}

            <button onClick={() => setIsVisible(!isVisible)}>Toggle Counter!</button>
        </>
    );
}

export default App;