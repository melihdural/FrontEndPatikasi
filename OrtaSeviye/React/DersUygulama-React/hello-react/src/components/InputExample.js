import { useState } from "react";

function InputExample () {
    
    const [form, setForm] = useState({ name: "", surname: "" });
    const [submit, setSubmittedValue] = useState("")
    const onInputValueChanged = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const setSubmit = () => {
        setSubmittedValue(`${form.name} ${form.surname}`);
    }
    
    return (
        <>
            <h4>Name</h4>
            <input name={"name"} placeholder={"İsim Giriniz..."} value={form.name} onChange={onInputValueChanged}/>
            <br/>
            <br/>
            
            <h4>Surname</h4>
            <input name={"surname"} placeholder={"Soyisim Giriniz..."} value={form.surname} onChange={onInputValueChanged}/>
            <br/>
            <br/>
            
            <button onClick={setSubmit}>Submit</button>
            
            <h5>{submit}</h5>
        </>
    );
}

export default InputExample