import Todo from "./index";
import {fireEvent, render, screen} from "@testing-library/react";

describe("Todo-App Test", ()=>{
    let button, input;

    beforeEach(()=>{
        render(<Todo/>)

        button = screen.getByText("Add");
        input = screen.getByLabelText("Text:");
    })

    test("Default 3 Items exist", ()=>{
        const items = screen.getAllByText(/Item/);
        expect(items.length).toEqual(3);
    })

    test("Input and Button Items exist", ()=>{
        expect(button).toBeInTheDocument()
        expect(input).toBeInTheDocument()
    })

    test("Typing and submit functions active", ()=>{
        const name = "Melih";
        fireEvent.change(input, {target: {value: name}})
        fireEvent.click(button);

        expect(screen.getByText(name)).toBeInTheDocument();
    })
})