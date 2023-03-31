import {useEffect, useState} from "react"
// function Counter () {
//     const [count, setCount] = useState(0);
//     const increase = () => {
//         setCount(count + 1);
//     }
//
//     const decrease = () => {
//         setCount(count - 1);
//     }
//     return (
//         <>
//             <h1>{count}</h1>
//             <button onClick={decrease}>Decrease (-)</button>
//             <button onClick={increase}>Increase (+)</button>
//         </>
//     );
// }


function Counter() {
    const [number, setNumber] = useState(0);

    useEffect(()=> {
        console.log("!!!! Component Mount Edildi !!!!")

        const interval = setInterval(()=>{
            setNumber((n) => n+1);
        },1000)

        return () => {
            clearInterval(interval)
            console.log("!!!! Component Unmount Edildi !!!!")
        }
    },[])

    return (
        <>
            {/*--- Counter ---*/}
            <h1>{number}</h1>
            <button onClick={()=> setNumber(number + 1)}>Click!</button>

        </>
    );

}

export default Counter