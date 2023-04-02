import React, {useEffect, useState} from "react";

const initialFormValues = { task: ""}
function Form({addTodo, todos}) {
    const [form, setForm] = useState(initialFormValues);
    const onChangeInput = (e) => {
        setForm({[e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault(); //Event.preventDefault = Event'in varsayılan davranışını durdurur.

        if (form.task === ""){
            return false;
        }
        addTodo(form.task);
        setForm(initialFormValues);
        console.log(form);
    }

    return(
        <form onSubmit={onSubmit}>
            <div>
                <label>
                    <input
                        name={"task"}
                        placeholder={"What needs to be done?"}
                        value={form.task}
                        onChange={onChangeInput}
                        autoFocus={true}
                    />
                </label>
            </div>
        </form>
    );
}

export default Form