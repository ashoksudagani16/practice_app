import {render, screen} from "@testing-library/react";
import Counter from "./index";
import { Provider } from 'redux-zero/react';
import store from '../../reduxZero/store';
import user from "@testing-library/user-event"


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
})