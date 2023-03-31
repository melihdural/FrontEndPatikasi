import {useState, useEffect} from "react";


function Hooks() {
    /* --- Use State Hook --- */
    const [name, setName] = useState("");
    const [number, setNumber] = useState(0);

    /* --- Use Effect Hook --- */
    useEffect(() => {
        console.log("!!!! Number state güncellendi !!!!")
    }, [number]);

    useEffect(() => {
        console.log("!!!! Name state güncellendi !!!!")
    }, [name]);

    /* --- Component Mount - Unmount --- */ /*--- Counter.js te kullanılıyor toplu dursun diye burada yorum satırında*/
    // useEffect(() => {
    //     console.log("!!!! Component mount edildi !!!!")
    //
    //     const interval = setInterval(() => {
    //         setNumber((n) => n+1);
    //     }, 1000);
    //
    //     return () => {
    //         clearInterval(interval);
    //         console.log("!!!! Component unmount edildi !!!!");}
    // }, []);

    return (
      <>
          {/*<h1>{name}</h1>*/}
          {/*<button onClick={ ()=> setName(`+ ${number}`)}>Set Name!</button>*/}

          {/*<hr />*/}

          {/*<h1>{number}</h1>*/}
          {/*<button onClick={ ()=> setNumber(number + 1)}>Set Number!</button>*/}

          {/*--- Counter ---*/}
          <h1>{number}</h1>
          <button onClick={()=> setNumber(number + 1)}>Click!</button>

      </>
    );
}
export default Hooks;