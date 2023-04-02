import React, {useState} from "react";
import AllSelectionMarker from "./AllSelectionMarker";
import ListElements from "./ListElements";

function List ({setList, lists}) {
    return(
        <div>
            <section className="main">
                <AllSelectionMarker setList={setList} lists={lists}/>
                <ListElements setList={setList} lists={lists}/>
            </section>
        </div>
    );
}

export default List