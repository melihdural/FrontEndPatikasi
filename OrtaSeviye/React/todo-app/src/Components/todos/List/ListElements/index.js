import React from "react";

function ListElements({setList, lists}) {
    return(
      <div>
          <ul className="todo-list">
              {lists.map((list, i) => (
                  <li key={i} className={list.todoActive ? "completed" : ""}>
                      <div className="view">
                          <input
                              className="toggle"
                              type="checkbox"
                              checked={list.todoActive}
                              onChange={() => {
                                  setList(
                                      lists.map((i) => i === list
                                          ? { ...i, todoActive : !i.todoActive } : i
                                      )
                                  );
                              }}
                          />
                          <label>{list.todoName}</label>
                          <button
                              className="destroy"
                              onClick={() => {
                                  setList(
                                      list.filter((remove) => remove !== list)
                                  );
                              }}
                          ></button>
                      </div>
                  </li>
              ))}
          </ul>
      </div>
    );
}

export default ListElements