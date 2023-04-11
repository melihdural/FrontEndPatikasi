import {render, fireEvent, screen} from "@testing-library/react";
import App from "../../App";

describe('Filtered Emojis', function () {
    let input;
    beforeEach(() => {
        // eslint-disable-next-line testing-library/no-render-in-setup
        render(<App />)
        input = screen.getByPlaceholderText("Search...")
    })

    test("filtered emojis", ()=>{
        const title = "joy";
        fireEvent.change(input, {target: {value: title}})

        expect(screen.getAllByAltText("Joy"));
    })
});