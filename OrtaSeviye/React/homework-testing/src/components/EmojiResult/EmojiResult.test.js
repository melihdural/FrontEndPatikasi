import {fireEvent, getByText, render, screen} from '@testing-library/react';
import React from 'react';
import emojiList from '../filterEmoji/emojiList.json';
import App from "../../App";
import userEvent from "@testing-library/user-event";

let copiedEmoji;
describe("Emoji Render Test",()=>{
    beforeEach(()=>{
        render(<App />)
        copiedEmoji = screen.getByText("Joy");
    })

    test("emoji list is rendered ? ", () => {
        emojiList.slice(0, 20).map((item,i) => {
            expect(screen.getByText(item.title)).toBeInTheDocument();
        })
    })

    test("emoji copy to clipboard", ()=> {
        fireEvent.click(copiedEmoji);
        expect(copiedEmoji.parentElement.getAttribute("data-clipboard-text")).toMatch("😂");
    })
})