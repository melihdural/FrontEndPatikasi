import React, {useState} from "react";
import List from "./List";
import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";

function Todos() {
    const [todos, setTodos] = useState([

        { todoName: "Taste JavaScript ", todoActive: true },
        { todoName: "Code furiously ", todoActive: true },
        { todoName: "Promote Mavo", todoActive: false },
        { todoName: "Give talks", todoActive: false },
        { todoName: "GWrite tutorials", todoActive: true },
        { todoName: "Have a life!", todoActive: false },
    ])

    const [value, setValue] = useState(todos)

    const addTodo = (todo) => {
        setTodos([...todos, {
            todoName: todo,
            isMarked: false,
        }])
    }

    return(
      <div className={"container"}>
          <Header/>
          <Form addTodo={addTodo}/>
          <List
              setList={setTodos}
              lists={todos}
          />
          <Footer
              value={value}
              setList={setTodos}
              lists={todos}
          />
      </div>
    );
}

export default Todos