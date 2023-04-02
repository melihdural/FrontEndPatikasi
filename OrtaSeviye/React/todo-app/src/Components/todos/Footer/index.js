import React from "react";
import List from "../List";

function Footer({setList, lists, value}) {
    function onAllItemSelected(e) {
        e.preventDefault();
        setList(value)
    }

    function onActiveItemSelected(e) {
        e.preventDefault();
        setList(lists.filter((i) => i.todoActive === false))
    }

    function onCompletedItemSelected(e) {
        e.preventDefault();
        setList(lists.filter((i) => i.todoActive === true))
    }

    function onClear() {

    }
    const unCompletedLength = lists.filter((i) => i.todoActive === false).length;

    return(
        <div>
            <footer className="footer">
                <span className="todo-count">
                    <strong>{unCompletedLength} </strong>
                    items left
                </span>

                <ul className="filters">
                    <li>
                        <a
                            href={"#/"}
                            id={"all"}
                            className={lists.todoActive === null ? "selected": ""}
                            onClick={onAllItemSelected}

                        >All</a>
                    </li>
                    <li>
                        <a
                            href={"#/"}
                            id={"active"}
                            className={lists.todoActive === false ? "selected": ""}
                            onClick={onActiveItemSelected}

                        >Active</a>
                    </li>
                    <li>
                        <a
                            href={"#/"}
                            id={"completed"}
                            className={lists.todoActive === true ? "selected": ""}
                            onClick={onCompletedItemSelected}

                        >Completed</a>
                    </li>
                </ul>

                <button className="clear-completed" onClick={onClear}>
                    Clear completed
                </button>
            </footer>

            <footer className="info">
                <p>Created by <a href="https://github.com/melihdural/">Melih Dural</a></p>
            </footer>
        </div>
    );
}

export default Footer