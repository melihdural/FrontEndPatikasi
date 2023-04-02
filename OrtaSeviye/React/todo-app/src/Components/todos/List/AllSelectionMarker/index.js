import React from "react";

function AllSelectionMarker({setList, lists}) {
    //handle click all, active, completed
    const onClickList = () => {
        console.log("all-selected")
        setList(
            lists.map((i) => {
                const isTodoActive = lists.some((e) => {
                    return e.todoActive === false;
                });
                return isTodoActive === true
                    ? { ...i, todoActive: true }
                    : { ...i, todoActive: false };
            })
        );
    };

    return(
        <div>
            <input className="toggle-all" type="checkbox" onChange={onClickList}/>
            <label htmlFor="toggle-all" onClick={onClickList}>
                Mark all as complete
            </label>
        </div>
    );
}

export default AllSelectionMarker