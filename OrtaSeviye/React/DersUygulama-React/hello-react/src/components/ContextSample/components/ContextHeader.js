import ButtonThemeHandler from "./ButtonThemeHandler";

function ContextHeader() {
    return(
        <div className={"container"}>
            <div className={"row pt-4"}>
                <div className={"col-11"}>
                    <h4>Melih Dural</h4>
                </div>
                <div className={"col-1"}>
                    <ButtonThemeHandler/>
                </div>
            </div>
        </div>
    );
}

export default ContextHeader