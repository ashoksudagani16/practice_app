import {render, screen} from "@testing-library/react"
import CounterTwo from "./index";
import user from "@testing-library/user-event"

describe("Counter Two", () => {
    test("renders correctly", () => {
        render(<CounterTwo count={0} />);
        const textElement = screen.getByText("Counter Two");
        expect(textElement).toBeInTheDocument()
    })

    test("should handlers are called", async() => {
        user.setup()
        const incrementHandler = jest.fn()
        const decrementHandler = jest.fn()
        render(<CounterTwo count={0} increment={incrementHandler} decrement={decrementHandler}/>);

        const incrementButton = screen.getByRole("button", {name: "Increment"})
        const decrementButton = screen.getByRole("button", {name: "Decrement"})
        await user.click(incrementButton)
        await user.click(decrementButton)
        expect(incrementHandler).toHaveBeenCalledTimes(1);
        expect(decrementHandler).toHaveBeenCalledTimes(1);

    
    })
})