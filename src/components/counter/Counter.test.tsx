import {render, screen} from "@testing-library/react";
import Counter from "./index";
import { Provider } from 'redux-zero/react';
import store from '../../reduxZero/store';
import user from "@testing-library/user-event"


// Mock the alert function
window.alert = jest.fn();

describe("counter", () => {
    test("renders correctly", () => {
        render(<Provider store={store}>
            <Counter />
        </Provider>);
        const countElement = screen.getByRole("heading");
        expect(countElement).toBeInTheDocument();
        const buttonElement = screen.getByRole("button", {name: "Increment"});
        expect(buttonElement).toBeInTheDocument();
    })

    test("renders initial count value", () => {
        render(<Provider store={store}>
            <Counter />
        </Provider>);
        const countElement = screen.getByRole("heading");
        expect(countElement).toHaveTextContent('0')
    })

    test("renders a count 1 after clicking incremet button", async() => {
        user.setup()
        render(<Provider store={store}>
            <Counter />
        </Provider>);
        const buttonElement = screen.getByRole("button", {name: "Increment"});
        await user.click(buttonElement)
        const countElement = screen.getByRole("heading");
        expect(countElement).toHaveTextContent('1')
    })

    test("render a count is 10, after clicking set button",async () => {
        user.setup()
        render(<Provider store={store}>
            <Counter />
        </Provider>)
       
        const numberInput = screen.getByRole("spinbutton")
        await user.type(numberInput, '10')
        const setButton = screen.getByRole("button", {name: "Set"})
        await user.click(setButton)
        const countElement = screen.getByRole("heading");
        expect(countElement).toHaveTextContent('10')
    });

    test("elements are hovered right order", async() => {
        user.setup()
        render(<Provider store={store}>
            <Counter />
        </Provider>)
        const incrementButton = screen.getByRole("button", {name: "Increment"})
        const decrementButton = screen.getByRole("button", {name: "Decrement"})
        const numberInput = screen.getByRole("spinbutton")
        const setButton = screen.getByRole("button", {name: "Set"})
        await user.tab()
        expect(incrementButton).toHaveFocus()
        await user.tab()
        expect(decrementButton).toHaveFocus()
        await user.tab()
        expect(numberInput).toHaveFocus()
        await user.tab()
        expect(setButton).toHaveFocus()
    });

    test("render popup, after clicking on button", async() => {
        user.setup()
        render(<Provider store={store}>
            <Counter />
        </Provider>);
        const inputElement = screen.getByRole("textbox");
        const showPopUpElement = screen.getByRole("button", {name: "Show Popup"});
        await user.type(inputElement, "Hello Ashok");
        await user.click(showPopUpElement)
        expect(window.alert).toHaveBeenCalledWith("Hello Ashok")
    })
})