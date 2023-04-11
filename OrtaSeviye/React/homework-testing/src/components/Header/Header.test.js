import Header from "./index";
import {render, screen} from "@testing-library/react";

test("Header-test", ()=>{
    render(<Header/>)
    const img_1 = screen.getByAltText("img_1");
    const headerText = screen.getByText("Emoji Search");
    const img_2 = screen.getByAltText("img_2");

    expect(img_1).toBeInTheDocument();
    expect(headerText).toBeInTheDocument();
    expect(img_2).toBeInTheDocument();
})