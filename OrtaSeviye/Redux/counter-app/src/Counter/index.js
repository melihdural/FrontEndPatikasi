import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {increment, decrement, handleSubmit} from "../redux/counter/counterSlice";

function Counter(props) {
    const [type, setType] = useState("");
    const countValue = useSelector((state)=> state.counter);
    const dispatch = useDispatch();

    const _handleSubmit = (e) => {
        e.preventDefault();
        setType(e.target.value);
        console.log(type)
        dispatch(handleSubmit(type));
        setType("");
    }

    return (
        <div>
            <h1>{`${countValue.user} ${countValue.value}`}</h1>
            <br/><br/>

            <button onClick={() => dispatch(decrement())}>Decrease</button>
            <button onClick={() => dispatch(increment())}>Increase</button>
            <br/><br/>

            <form onSubmit={_handleSubmit}>
                <div>
                    <label>
                        <input
                            placeholder={"Change name!"}
                            value={type}
                            onChange={(e)=> setType(e.target.value)}
                            onSubmit={_handleSubmit}
                        />
                    </label>
                </div>
            </form>

        </div>
    );
}

export default Counter;