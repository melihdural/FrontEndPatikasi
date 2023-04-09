import Dropdown from "./Dropdown";
import Days from "./Days";
import {Formik} from "formik";

function Container() {
    return(
        <>
         <div className={"container"}>
             <Dropdown />
             <Days />
         </div>
        </>
    );
}

export default Container;