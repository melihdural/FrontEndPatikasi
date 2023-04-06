import Header from "../Header";
import {useMemo, useState} from "react";

function Memoization() {
    const [counter, setCounter] = useState(0);
    const data = useMemo(()=>{ //useMemo object tipi passlediğimizde sürekli render edilmemesi için kullanılır.
        return {name: "Melih"}
    },[])

    return(
        <div className={"container"}>
            <Header number={counter % 5 === 0 ? counter : 0} data={data} />
            <div>
                <h3>{counter}</h3>
                <button onClick={()=> setCounter(counter +1)}>Increase</button>
            </div>
        </div>
    );
}

export default Memoization